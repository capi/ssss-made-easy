import { writable, derived } from "svelte/store"

export type Level = 'success' | 'warning' | 'error';

export interface ToastInfo {
	id: string;
	level: Level;
	title: string;
	content: string;
}

const _toasts = writable<ToastInfo[]>([])
let _id = 0

function id() {
	return "" + (++_id);
}

export const toasts = derived(
	_toasts,
	$toasts => {
		return [...$toasts]; // defensive copy
	}
);

export function showToast(
	level: Level,
	title: string,
	content: string, timeout: number) {
	_toasts.update(state => {
		const toast: ToastInfo = {
			id: id(),
			level, title, content
		};
		if (timeout > 0) {
			setTimeout(() => _toasts.update(state => state.filter(t => t.id != toast.id)), timeout)
		}
		return [...state, toast]
	});
}

export function successToast(title: string, content: string, timeout: number) {
	showToast("success", title, content, timeout);
}

export function warningToast(title: string, content: string, timeout: number) {
	showToast("warning", title, content, timeout);
}

export function errorToast(title: string, content: string, timeout: number) {
	showToast("error", title, content, timeout);
}
