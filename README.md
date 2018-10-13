# hypermd-katex

In HyperMD, Use [KaTeX][] to render TeX formulars.

[Demo](https://hypermd.github.io/hypermd-katex/example/) | [GitHub](https://github.com/HyperMD/hypermd-katex) | [![NPM version](https://img.shields.io/npm/v/hypermd-katex.svg?style=flat-square)](https://npmjs.org/package/hypermd-katex)

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

In your HTML:

```html
<textarea id="input-box" cols="30" rows="10">I'm using $\KaTeX$ now!</textarea>

<script src="https://cdn.jsdelivr.net/npm/requirejs/require.js"></script> <!-- 👈 RequireJS -->
<script src="https://cdn.jsdelivr.net/npm/hypermd/goods/patch-requirejs.js"></script> <!-- 👈 IMPORTANT -->
<script data-main src="main.js"></script>
```

In your main.js

```js
// before defining your main entry, don't forget :
requirejs.config({
  packages: [
    { name: 'hypermd-katex', main: 'index.js' },
    { name: 'katex', main: 'dist/katex.min.js' },
  ]
})

// then, add "hypermd-katex" to your main-entry's dependency list.
```

Finally, here is [an example of `main.js`](./example/requirejs-main.js) and [a live demo](https://hypermd.github.io/hypermd-katex/example/).

### For Plain Browser Env

*Why hurting yourself? The bundlers and module loaders are the future!*

See the source of [example file](./example/pbe-index.html)


## Develop

0. (if needed) update `pbe.manifest.json` and define modules' global var name
1. `npm run dev`
2. Start dev, reload page and test


[KaTeX]: https://khan.github.io/KaTeX/
