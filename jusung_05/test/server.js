const express = require('express');
const cors = require("cors");


const PORT = 3000;
const app = express();

app.use(cors());

const router = require('./router/main')(app);


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

const server = app.listen(PORT, function(){
    console.log("Express server has started on port 3000")
});
app.use(express.static('public'));


