const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

//ИЗМЕНЕНИЕ ПОЛЬЗОВАТЕЛЯ
router.put('/:id', async (req, res) => {
  // Проверяем сходится ли id пользователя и id параметров
  if (req.body.userId === req.params.id) {
    //   если человек меняет пароль, то хешируем его
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    // Изменяем что то у пользователя
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else {
    res.status(401).json('Вы можете изменять только свой аккаунт');
  }
});


//УДАЛЕНИЕ ПОЛЬЗОВАТЕЛЯ
router.delete('/:id', async (req, res) => {
  // Проверяем сходится ли id пользователя и id параметров
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        //Удаляем посты пользователя
        await Post.deleteMany({ username: user.username });
        // Удаляем пользователя
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('Пользователь был удален');
      } catch (error) {
        res.status(500).json(error.message);
      }
    } catch (error) {
      if (!user) {
        res.status(404).json('Пользователь не найден');
      }
    }
  } else {
    res.status(401).json('Вы можете изменять только свой аккаунт');
  }
});


// ПОЛУЧЕНИЕ ПОЛЬЗОВАТЕЛЯ
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error.message)
    }
});

module.exports = router;
