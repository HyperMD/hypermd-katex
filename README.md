# hypermd-katex

In HyperMD, Use [KaTeX][] to render TeX formulars.

[Demo](https://hypermd.github.io/hypermd-katex/example/pbe-index.html) | [GitHub](https://github.com/HyperMD/hypermd-katex) | [![NPM version](https://img.shields.io/npm/v/hypermd-katex.svg?style=flat-square)](https://npmjs.org/package/hypermd-katex)

## How to use

1. install `katex` and `hypermd-katex`
2. `import` before creating HyperMD editor
3. create HyperMD editor

### For webpack / parcel

First of all, install the packages: `npm install --save hypermd-katex katex`

```js
import * as HyperMD from "hypermd"
import "hypermd-katex"

const your_textarea = document.getElementById('input-box')
const editor = HyperMD.fromTextArea(your_textarea)
```

### For requirejs (example)

Install the packages: `npm install --save hypermd-katex katex`

In your HTML:

```html
<textarea id="input-box" cols="30" rows="10">I'm using $\KaTeX$ now!</textarea>

<script src="./node_modules/requirejs/require.js"></script>
<script src="./node_modules/hypermd/goods/patch-requirejs.js"></script> <!-- 👈 IMPORTANT -->
<script data-main src="main.js"></script>
```

As for your `main.js`, [here is an example](./example/requirejs-main.js). Note that `./node_modules` can be changed to your CDN services.

### For Plain Browser Env

*Why hurting yourself? The bundlers and module loaders are the future!*

See the source of [example file](./example/pbe-index.html)


## Develop

0. (if needed) update `pbe.manifest.json` and define modules' global var name
1. Go to **example** dir, run `npm i` and modify **requirejs-main.js**
   - Uncomment this line: `paths: { "hypermd-katex": "../..", },`
2. Back to **project dir**, `npm run dev`
3. Meanwhile, open a `http-server` and visit http://127.0.0.1:8080/example/requirejs-index.html
   - *Psst* Use [http-server](https://www.npmjs.com/package/http-server) and do this in one command `hs -c-1`
4. Start test


[KaTeX]: https://khan.github.io/KaTeX/
