var fs = require('fs');
var dbJson = require('../db/db.json');

function Notes() {
    this.title = "",
    this.text = ""
 }
    
Notes.prototype.readDBjson = () => {
    fs.readFile('../db/db.Json', 'utf8', (err, data) => {
         if (err) {
             throw err;
         }
         var notes = JSON.parse(data);
         return notes;
    });
}

Notes.prototype.writeDBjson = () => {


}

module.exports = Notes();