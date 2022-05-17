const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const Article = mongoose.model('Article', articleSchema);

module.exports.Article = Article;
