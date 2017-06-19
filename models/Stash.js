var mongoose = require('mongoose');

var StashSchema = new mongoose.Schema({
    project: String,
    title: String,
    client: String,
    user: String,
    published_date: Date,
    amount: Number,
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Stash', StashSchema);