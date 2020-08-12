const express = require('express')

const SnippetCtrl = require('../controllers/snippet-ctrl')

const router = express.Router()

router.post('/snippet', SnippetCtrl.createSnippet)
router.put('/snippet/:id', SnippetCtrl.updateSnippet)
router.delete('/snippet/:id', SnippetCtrl.deleteSnippet)
router.get('/snippet/:id', SnippetCtrl.getSnippetById)
router.get('/snippets', SnippetCtrl.getSnippets)

module.exports = router