const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

//СОЗДАНИЕ НОВОГО ПОСТА
router.post('/', async (req, res) => {
  const newPost = await new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//ИЗМЕНЕНИЕ ПОСТА
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(500).json(error.message);
      }
    } else {
      res.status(404).json('Вы можете изменять только свои посты');
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// ПОЛУЧЕНИЕ ПОСТА
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// ПОЛУЧЕНИЕ ВСЕХ ПОСТОВ
router.get('/', async (req, res) => {
  // По каким параметрам можно будет осуществлять поиск
  const username = req.query.user;
  const catName = req.query.cat;

  try {
    let posts;
    // если в params будет имя пользователя, то выведет все его посты
    if (username) {
      posts = await Post.find({ username });
    }
    // если в params будет имя категории, то выведет посты категории
    else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    }
    // если в params ничего не будет, то выведет все посты
    else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// УДАЛЕНИЕ ПОСТА
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json('Пост был удален');
      } catch (error) {
        res.status(500).json(error.message);
      }
    } else {
      res.status(404).json('Вы можете изменять только свои посты');
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
