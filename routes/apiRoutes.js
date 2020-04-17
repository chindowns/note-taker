const fs = require('fs');

var path = "./db/db.json";

class JsonDb {
    constructor (path, note) {
        this.path = path;
        this.note = note;
    }
}

var jsonDb = new JsonDb();

module.exports = function(app) {

app.get('/api/notes', function(req, res){
    res.json(fs.readFileSync(path));
});

// app.get('/api/notes/:id', function(req, res) {
//     res.send('something here');
// });

app.post('/api/notes', function(req, res) {
    console.log(req.body)
    fs.appendFileSync(path, req.body);
    res.json(true);
});

// app.delete('/api/notes/', function(req, res) {
//     res.send("Here we point to a function to DELETE the specified note");
// });

};