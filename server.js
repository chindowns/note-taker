var express = require('express');
var path = require('path');
var app = express();

var PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true }));
app.use(express.json());

require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);
// require('./route/dbRoutes.js')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  