function render(doc) {
  let html = editor.html.getValue()
  let style = editor.css.getValue()
  let script = editor.js.getValue()
  doc.write(`
  <!DOCTYPE html>
  <html lang="zh">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>预览界面</title>
    <style>
    ${style}
    </style>
  </head>
  <body>
  </body>
  ${html}
  <script>${script}</script>
  </html>
  `)  
}