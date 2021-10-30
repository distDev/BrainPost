const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoriesRoute = require('./routes/categories');


dotenv.config();
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('Подключился к монго'))
  .catch((err) => console.log(err));



app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoriesRoute);
app.use('/', (req,res) => {
    res.status(200).send('работает')
})


app.listen('5000', () => {
  console.log('Бэкенд запустился');
});
