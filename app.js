const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/posts');
require('dotenv/config');

const app = express();

//MongoDB config
mongoose.connect(
  process.env.DB_CONN,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log('Connected to DB!');
  }
);

//Express config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/', routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}!`);
});
