const router = require('express').Router();
const { response } = require('express');
const notes = require('../db/db.json');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
uuidv4();


router.get('/notes', (req, res) => {

  res.json(notes)
});



router.post('/notes', (req, res) => {
  //db.getNotes(body, notes)
  const note = req.body
  notes.push(note)
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes, null, 2)
  );

  res.json(notes)
  // .catch((err) => res.status(500).json(err))

})


module.exports = router






















