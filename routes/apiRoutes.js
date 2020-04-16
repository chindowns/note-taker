

module.exports = function(app) {

app.get('/api/notes', function(req, res){
    res.json("Here we point to a function to sendback a list of all notes");
});

app.post('/api/notes', function(req, res) {
    res.json("Here we point to a function to SAVE/POST a note");
});

app.delete('/api/notes/', function(req, res) {
    res.json("Here we point to a function to DELETE the specified note");
});

}