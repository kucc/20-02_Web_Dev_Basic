/*
const express = require('express');

const PORT = 3000;
const app = express();

const router = require('./router/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

const server = app.listen(PORT, function(){
    console.log("Express server has started on port 3000")
});
app.use(express.static('public'));
*/

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;
const db = require("./db.js");

app.use(cors());

app.get("/posts", function (req, res) {
  res.json(db.posts);
});

// 이 곳에 코드를 작성하세요
app.get("/posts/:id", function (req, res) {
  let post = db.posts.find(u => u.id === parseInt(req.params.id))
  res.json(post);
})

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});