var express = require('express');
var app = express();
var http = require('http');



app.use(express.static('./Client'));
app.get('/api/location', function(req, res){
  console.log(req.query.city);
  var city = req.query.city.replace(/\s/g, '');
  var url = {
    host: 'api.openweathermap.org',
    path: "/data/2.5/weather?q=" + city + "&appid=59ec812db281590db55541ce3de26508"
  };
  http.get(url, function(response){
    var bodyChunks = "";
    response.on('data', function(chunk){
      bodyChunks += chunk;
    })
    .on('end', function(){
      res.send(bodyChunks);
    });
  });
});

// let port = process.env.PORT || 4000;
app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), function(){
  console.log("listening on " + app.get('port'));
})
