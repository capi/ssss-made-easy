import { SSSS } from "ssss-js";

export function splitSecret(secret: string, token: string, shares: number, threshold: number): string[] {
	const s = new SSSS(threshold, shares, false);
	return s.split(secret, token);
}

export function combineSecret(parts: string[]): string {
	const s = new SSSS(parts.length, 0, false);
	return s.combine(parts);
}
