var express = require('express');
var app = express();


app.use(express.static('./Client'));
app.get('/api/location', function(req, res){
  console.log("we hit api use");
  res.send("we can get")
})

app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), function(){
  console.log("We are listening");
})
