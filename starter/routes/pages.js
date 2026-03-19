const path = require('path');
const express = require('express');

const router = express.Router();

function sendPage(req, res, fileName) {
  res.sendFile(path.join(req.app.locals.publicDir, fileName));
}

router.get('/', (req, res) => {
  // TODO: Serve public/index.html.
  return sendPage(req, res, 'index.html');
});

router.get('/about', (req, res) => {
  // TODO: Serve public/about.html.
  return sendPage(req, res, 'about.html');
});

router.get('/contact', (req, res) => {
  // TODO: Serve public/contact.html.
  return sendPage(req, res, 'contact.html');
});

router.get('/blog', (req, res) => {
  // TODO: Keep this route working after moving page routes into this router.
  return sendPage(req, res, 'blog.html');
});

module.exports = router;