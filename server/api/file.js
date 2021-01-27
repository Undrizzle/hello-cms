const fs = require('fs')

function writeHtmlOrMd(title, content, fg) {
  let path
  if (fg == 'html') {
    path = './dist/' + title + '.html'
  } else {
    path = './public/' + title + '.md'
  }
  fs.writeFile(path, content, { 'flag': 'w+' }, (err) => {
    if (err) throw err
    console.log('write file ok!')
  })
}

function getCorrectFiles(dir, fragment) {
  const res = []
  const files = fs.readdirSync(dir)
  if (fragment && fragment != '') {
    files.forEach((file) => {
      if (file.indexOf(fragment) != -1) {
        res.push(file)
      }
    })
  } else {
    res = files
  }
  return res
}

module.exports = { writeHtmlOrMd, getCorrectFiles }