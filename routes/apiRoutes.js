const fs = require('fs');
var dbJson = "./db/db.json";
var Notes = require('./dbRoutes')

module.exports = (app) => {

app.get('/api/notes', (req, res) => {
    fs.readFile(dbJson, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        var notes = JSON.parse(data).map;
        res.json(notes);
});
});

app.post('/api/notes', function(req, res) {
    if (err){
        throw err;
    }
    console.log(req.body)
    fs.appendFileSync(dbJson, JSON.stringify(req.body));
    res.json(req.body);
});

// app.delete('/api/notes/', function(req, res) {
//     res.send("Here we point to a function to DELETE the specified note");
// });
}
