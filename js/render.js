function render() {
  let html = editor.html.getValue()
  let css = editor.css.getValue()
  let js = editor.js.getValue()
  localStorage.setItem('code-html', html)
  localStorage.setItem('code-css', css)
  localStorage.setItem('code-js', js)
  // doc.write(`
  // <!DOCTYPE html>
  // <html lang="zh">
  // <head>
  //   <meta charset="UTF-8">
  //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //   <meta http-equiv="X-UA-Compatible" content="ie=edge">
  //   <title>预览界面</title>
  //   <style>
  //   ${style}
  //   </style>
  // </head>
  // <body>
  // ${html}
  // <script>${script}</script>
  // </body>
  // </html>
  // `)  
}