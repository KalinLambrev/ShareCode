const express = require('express');

const SnippetCtrl = require('../controllers/snippet-ctrl');
const UserCtrl = require('../controllers/user.ctrl');
const snippetCtrl = require('../controllers/snippet-ctrl');

const router = express.Router();

// === ENDPOINT CONSTANTS ===

const USER = '/user';
const USER_ID = '/user/:id';
const SNIPPET_ID = '/snippet/:id';
const SNIPPET = '/snippet';
const SNIPPET_BY_USER_ID = '/snippets-byuser/:userId';
const TAG_SNIPPETS = '/tag-snippets';

// === ENDPOINTS ===

router.post(USER, UserCtrl.createUser);
router.get(USER_ID, UserCtrl.getUserById);

router.get(SNIPPET, SnippetCtrl.getSnippets);
router.post(SNIPPET, SnippetCtrl.createSnippet);

router.get(SNIPPET_ID, SnippetCtrl.getSnippetById);
router.put(SNIPPET_ID, SnippetCtrl.updateSnippet);
router.delete(SNIPPET_ID, SnippetCtrl.deleteSnippet);

router.get(SNIPPET_BY_USER_ID, snippetCtrl.getSnippetByUserId);
router.get(TAG_SNIPPETS, snippetCtrl.getSnippetsPerTag);

module.exports = router;