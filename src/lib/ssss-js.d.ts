declare module 'ssss-js' {
	class SSSS {
		constructor(threshold: number, numberOfKeys: number, inputIsHex: boolean);
		split(buf: string, token: string): string[];
		combine(shares: string[]): string;
	}
}

