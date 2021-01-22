import fs from 'fs'

export function writeHtmlToFile(title, html) {
  console.log(title)
  console.log(html)
  const path = './public/' + title + '.html'
  fs.writeFile(path, html, { 'flag': 'w+' }, (err) => {
    if (err) throw err
    console.log('write html ok!')
  })
}