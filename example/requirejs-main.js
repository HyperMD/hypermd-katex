requirejs.config({
  baseUrl: "https://cdn.jsdelivr.net/npm/",   // use CDN
  // baseUrl: "./node_modules/", // or use local version?

  packages: [
    { name: 'hypermd', main: 'everything.js' },
    { name: 'codemirror', main: 'lib/codemirror.js' },

    // ...

    // add this 2 lines to requirejs config.packages:
    { name: 'hypermd-katex', main: 'index.js' },
    { name: 'katex', main: 'dist/katex.min.js' },
  ]
})

//////////////////////////////////////////////////////////////////
// This part is for development. It's meaningless to you. Please delete it:
// 这一小段代码仅用于开发测试，对你没用。要拷贝代码时，记得删除：
if (location.search.indexOf('_hmd_dev_') !== -1) requirejs.config({ paths: { "hypermd-katex": "/." } })
//////////////////////////////////////////////////////////////////

require([
  "hypermd",

  // ...

  // add this to your dependencies:
  "hypermd-katex",
], function (HyperMD) {
  var your_textarea = document.getElementById('input-box')
  var editor = HyperMD.fromTextArea(your_textarea)
})