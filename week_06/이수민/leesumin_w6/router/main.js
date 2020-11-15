module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/login',function(req,res){
        res.render('login.html');
    });

    app.get("/posts/:id", function(req, res){
      res.render("post.html");
    });
}