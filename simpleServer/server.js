const express = require('express');
const { Article } = require('./models/articles.model');
require('./database');

const app = express();
app.use(express.json());

app.get('/test', async (req, res) => {
  res.json({ message: 'success' });
});

app.get('/articles/:id', async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.json({ article });
});

app.get('/articles', async (req, res) => {
  const articles = await Article.find();
  res.json({ articles });
});

app.post('/articles', async (req, res) => {
  const newArticle = new Article();

  newArticle.name = req.body.name;
  newArticle.price = req.body.price;

  await newArticle.save();

  res.json({ newArticle });
});

app.patch('/articles/:id', async (req, res) => {
  const article = await Article.findByIdAndUpdate(
    req.params.id,
    { ...req.body },
    { new: true }
  );
  res.json({ article });
});

app.delete('/articles/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.json({ message: 'success' });
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Serveur lancé avec succès');
});

// GET ARTICLE (par id)
// GET ARTICLES
// AJOUTER ARTICLE
// UPDATE ARTICLE (par id)
// DELETE ARTICLE (par id)
