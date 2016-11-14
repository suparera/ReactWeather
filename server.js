var express = require('express')

// Create App
var app = express();
const PORT = process.env.PORT || 3000;

// Make openweathermap.org work with https, that necessery for Heroku
app.use(function(req, res, next){
  if(req.header['x-forwarded-proto']==='http'){
    next();
  }else {
    res.redirect('http://' + req.hostname + req.url );
  }
});
app.use(express.static('public'));

// Heroku used port from environment variable, localhost use 3000

app.listen(PORT, function(){
  console.log("Express server is up on port "+PORT);
});
