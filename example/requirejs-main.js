requirejs.config({
  baseUrl: "./node_modules/",
  // baseUrl: "https://cdn.jsdelivr.net/npm/",   // or use CDN

  // for `hypermd-katex` development only:
  // paths: { "hypermd-katex": "../..", },

  packages: [
    { name: 'hypermd', main: 'everything.js' },
    { name: 'codemirror', main: 'lib/codemirror.js' },

    // ...

    // add this 2 lines to requirejs config.packages:
    { name: 'hypermd-katex', main: 'index.js' },
    { name: 'katex', main: 'dist/katex.min.js' },
  ]
})

require([
  "hypermd",

  // ...

  // add this to your dependencies:
  "hypermd-katex",
], function (HyperMD) {
  var your_textarea = document.getElementById('input-box')
  var editor = HyperMD.fromTextArea(your_textarea)
})