# ssss-made-easy

## Introduction

This is a frontend for [`ssss-js`][2], a JavaScript implementation of [Shamir's Secret Sharing Scheme][1].
It provides some additional convenience features over the sample page provided by `ssss-js` itself.

* Share secret shares via QR Code
* Scan a QR code to enter a share for combination

All of this is performed locally in the browser, no data is sent to the server. It is as safe as your browser is (judge for yourself!).

This project is released under the terms of the GNU GENERAL PUBLIC LICENSE Version 3 (GPLv3), since it's main dependency, `ssss-js` is also released under the terms of this license.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


[1]: https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing
[2]: https://www.npmjs.com/package/ssss-js
