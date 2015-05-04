var express = require('express');
var app = express();

app.use(express.static('ui'));

app.get('/', function(req, res){
  res.sendfile('ui/index.html');
});

app.get('/data', function(req, res){

  var data = [
    {
      title: "test 1",
      summary: "This is a test"
    },
    {
      title: "test 2",
      summary: "this is the second test"
    }
  ];
  
  res.send(data);
});

var server = app.listen(3000, function() {
  console.log('Running...');
});
