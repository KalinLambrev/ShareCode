const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Snippet = new Schema(
    {
        name: { type: String, required: true },
        tags: { type: [String], required: true },
        likes: { type: Number, required: true },
        code: { type: String, required: true },
        userId: { type: Number, required: true }
    },
    { timestamps: true },
);

module.exports = mongoose.model('snippets', Snippet);