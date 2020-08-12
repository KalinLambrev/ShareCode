const Snippet = require('../models/snippet-model')

createSnippet = (req, res) => {
    const body = req.body
    console.log(req.body, 'KOKOSHKA');

    if (!body) {
        console.log('not gut', snippet);
        return res.status(400).json({
            success: false,
            error: 'You must provide a snippet',
        })
    }

    const snippet = new Snippet(body)

    if (!snippet) {
        console.log('not gut', snippet);
        return res.status(400).json({ success: false, error: err })
    }

    snippet
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: snippet._id,
                message: 'Code snippet created!',
            })
        })
        .catch(error => {
            console.log('not Put', snippet);
            return res.status(400).json({
                error,
                message: 'Code snippet not created!',
            })
        })
}

updateSnippet = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Snippet.findOne({ _id: req.params.id }, (err, snippet) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Snippet not found!',
            })
        }
        snippet.name = body.name
        snippet.tags = body.tags
        snippet.code = body.code
        snippet.likes = body.likes
        snippet
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: snippet._id,
                    message: 'Snippet updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Snippet not updated!',
                })
            })
    })
}

deleteSnippet = async (req, res) => {
    await Snippet.findOneAndDelete({ _id: req.params.id }, (err, snippet) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!snippet) {
            return res
                .status(404)
                .json({ success: false, error: `Snippet not found` })
        }

        return res.status(200).json({ success: true, data: snippet })
    }).catch(err => console.log(err))
}

getSnippetById = async (req, res) => {
    await Snippet.findOne({ _id: req.params.id }, (err, snippet) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!snippet) {
            return res
                .status(404)
                .json({ success: false, error: `Snippet not found` })
        }
        return res.status(200).json({ success: true, data: snippet })
    }).catch(err => console.log(err))
}

getSnippets = async (req, res) => {
    await Snippet.find({}, (err, snippets) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!snippets.length) {
            return res
                .status(404)
                .json({ success: false, error: `Snippet not found` })
        }
        return res.status(200).json({ success: true, data: snippets })
    }).catch(err => console.log(err))
}

module.exports = {
    createSnippet,
    updateSnippet,
    deleteSnippet,
    getSnippetById,
    getSnippets,
}