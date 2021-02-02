const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const query= require('../api/database')
const { writeHtmlOrMd, getCorrectFiles } = require('../api/file')

const router = express.Router()

const jsonParser = bodyParser.json()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/')
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

const htmlHeader1 = '<!DOCTYPE html><html><head>'
const htmlHeader2 = '<link rel="stylesheet" type="text/css" href="/css/'
const htmlHeader3 = '">'
const htmlHeader4 = '<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.9.0/github-markdown.min.css"></head><body><div class="v-note-wrapper markdown-body"><div class="v-note-read-model scroll-style show"><div class="v-note-read-content">'
const htmlFooter = '</div></div></div></body></html>'

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/editor', (req, res) => {
  res.render('index')
})

router.get('/documents', (req, res) => {
  res.render('index')
})

router.post('/api/publish', jsonParser, (req, res) => {
  const publishInfo = req.body
  let sql = "INSERT INTO publish VALUES(" + "\'" + publishInfo.path + "\'," + "\'" + publishInfo.title + "\'" + ")"
  let htmlPart = htmlHeader1
  try {
    writeHtmlOrMd(publishInfo.path, publishInfo.raw, 'markdown')
    const cssName = getCorrectFiles('./dist/css', 'chunk-vendors')
    cssName.forEach((css) => {
      htmlPart = htmlPart + htmlHeader2 + css + htmlHeader3
    })
    htmlPart += htmlHeader4 + publishInfo.render + htmlFooter
    writeHtmlOrMd(publishInfo.path, htmlPart, 'html')
    query(sql)
    res.status(200).send({ code: 2000 })
  } catch {
    res.status(200).send({ code: 2001 })
  }
})

router.post('/api/imgadd', upload.single('image'), (req, res) => {
  const url = 'http://localhost:3000/' + req.file.originalname

  res.status(200).send({ code: 2000, url: url })
})

router.post('/api/imgdel', jsonParser, (req, res) => {
  const { name } = req.body
  fs.unlink(path.join('public', name), (err) => {
    if (err) {
      console.log(err)
      res.status(200).send({ code: 2001 })
    } else {
      res.status(200).send({ code: 2000 })
    }
  })
})

module.exports = router