const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');


//РЕГИСТРАЦИЯ
router.post('/register', async (req, res) => {
  try {
    // Хешируем пароль
    const salt = await bcrypt.genSalt(10);
    const hashPass =  await bcrypt.hash(req.body.password, salt)
    // Создаем нового пользователя
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});


// АВТОРИЗАЦИЯ
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username
    })
    !user && res.status(400).json('Проблема авторизации')


    const validated = await bcrypt.compare(req.body.password, user.password)
    !validated && res.status(400).json('Проблема авторизации');

    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error)
  }
})



module.exports = router;
