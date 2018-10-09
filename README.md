# hypermd-katex

In HyperMD, Use [KaTeX][] to render TeX formulars.

[Demo](https://hypermd.github.io/hypermd-katex/docs/pbe-index.html) | [GitHub](https://github.com/HyperMD/hypermd-katex)

## How to use

### For webpack / parcel

First of all, install the packages: `npm install --save hypermd-katex katex`

```js
import * as HyperMD from "hypermd"
import "hypermd-katex"

HyperMD.fromTextArea(your_textarea)
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

As for your `main.js`, [here is an example](./docs/requirejs-main.js). Note that `./node_modules` can be changed to your CDN services.

### For Plain Browser Env

*Why hurting yourself? The bundlers and module loaders are the future!*

See [example file](./docs/pbe-index.html)


## Develop

0. (if needed) update `pbe.manifest.json` and define modules' global var name
1. `cd docs && yarn`
2. Back to project directory, `npm run dev`
3. Meanwhile, open a `http-server` and visit http://127.0.0.1:8080/docs/requirejs-index.html
   - *Psst* Use [http-server](https://www.npmjs.com/package/http-server) and do this in one command `hs -c-1`
4. Start test


[KaTeX]: https://khan.github.io/KaTeX/
