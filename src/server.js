var express        = require('express');
var app            = express();
var port           = 8080;
var helloGetAPI    = '/hello'

// Simple message class
class MessageBuilder {
  getMessage() {
    return "Hello World";
  }
}

var messagebuilder = new MessageBuilder;

// Handle simple request
app.get(helloGetAPI, function(req, res) {
  res.json({ message: messagebuilder.getMessage() });
})

// Start service
app.listen(port, function() {
  console.log('API is running on port #' + port);
  console.log('Try the following API at http://localhost:' + port + helloGetAPI);
});
