<script lang="ts">
  import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
	import QRCode from 'qrcode';
  import { copyCanvasToClipboard } from './clipboard-utils';
	import { errorToast } from './toasts/toasts';
	let canvas: HTMLCanvasElement;

	export let value = '';
	export let cssClass = "";
	export let width = 320;
	export let margin = 4;

	$: if (canvas) renderValue(value);

	function renderValue(value: string) {
		QRCode.toCanvas(canvas, value, { width, margin }, function (error) {
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
</script>

<canvas bind:this={canvas} class="{cssClass}" width="640" height="640" />
