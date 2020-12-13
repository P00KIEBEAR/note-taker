const { notes } = require('./db');
const fs = require('fs');
const path = require('path');

const getNotes = (body, notes) => {

  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, './db.json'),
    JSON.stringify({ notes: notes }, null, 2)
  );
  return note;

}

module.exports = getNotes