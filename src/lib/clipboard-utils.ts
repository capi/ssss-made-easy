export type ClipboardCallback = (error: Error | string | null) => void;

export function copyTextToClipboard(text: string, callback: ClipboardCallback) {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	if (!callback) callback = () => { };
	try {
		if (!window.isSecureContext) {
			callback('Clipboard API is only available from secure contexts (HTTPS or localhost).');
		} else if (navigator.clipboard) {
			navigator.clipboard.writeText(text);
			callback(null);
		} else {
			callback('Your browser does not support the clipboard API.');
		}
	} catch (e) {
		callback("Error: " + e);
	}
}

export function copyCanvasToClipboard(canvas: HTMLCanvasElement, callback: ClipboardCallback) {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	if (!callback) callback = () => { };
	try {
		if (!window.isSecureContext) {
			callback('Clipboard API is only available from secure contexts (HTTPS or localhost).');
		} else if (navigator.clipboard && typeof ClipboardItem != "undefined") {
			canvas.toBlob(blob => {
				if (blob) {
					const item = new ClipboardItem({ "image/png": blob });
					navigator.clipboard.write([item]);
					callback(null)
				} else {
					callback("Failed to convert canvas to image/png");
				}
			});
		} else {
			callback('Sorry, your browser does not support the Clipboard API for images.\n\nIf you are using Firefox, you can try enabling dom.events.asyncClipboard.clipboardItem preferences in about:config at your own risk.');
		}
	} catch (e) {
		callback("Error: " + e);
	}
}
