const fs = require('fs');
var dbJson = "./db/db.json";

module.exports = (app) => {
let notes = [];

app.get('/api/notes', (req, res) => {
    fs.readFile(dbJson, 'utf8', (err, data) => {
        if (err) throw err;

        let note={};
        notes = [];
        let notesParsed = JSON.parse(data);

        for (let i = 0 ; i < notesParsed.length; i++) {
            note = notesParsed[i];
            note.id = i;
            notes.push(note);
        };
     
        res.json(notes);
        });    
});

app.post('/api/notes', function(req, res) {

    notes.push(req.body);
    // console.log(notes)
    fs.writeFileSync(dbJson, JSON.stringify(notes));
    res.json(notes);
    
});

app.delete('/api/notes/:id', function(req, res) {
    notes.splice(req.params.id,1);
    fs.writeFileSync(dbJson, JSON.stringify(notes));
    res.json(notes);
});

}
