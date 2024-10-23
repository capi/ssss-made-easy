<script lang="ts">
	import { run } from 'svelte/legacy';

  import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
	import QRCode from 'qrcode';
  import { copyCanvasToClipboard } from './clipboard-utils';
	import { errorToast } from './toasts/toasts';
	let canvas: HTMLCanvasElement = $state();

	interface Props {
		value?: string;
		cssClass?: string;
		width?: number;
		margin?: number;
	}

	let {
		value = '',
		cssClass = "",
		width = 320,
		margin = 4
	}: Props = $props();


	function renderValue(value: string) {
		QRCode.toCanvas(canvas, value, { width, margin, errorCorrectionLevel: "high" }, function (error) {
			if (error) {
				errorToast('Failed creating QR code', '' + error, 2000);
				console.log(error);
			}
		});
	}

	export function copyToClipboard(): boolean {
		const result = [false];
		copyCanvasToClipboard(canvas, err => {
			result[0] = err == null;
			if (err) {
				alert("" + err);
			}
		});
		return result[0];
	}
	run(() => {
		if (canvas) renderValue(value);
	});
</script>

<canvas bind:this={canvas} class="{cssClass}" width="640" height="640"></canvas>
