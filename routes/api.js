const router = require('express').Router();
const { response } = require('express');
let notes = require('../db/db.json');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');



router.get('/notes', (req, res) => {

  res.json(notes)
});


router.delete('/notes', (req, res) => {
  //db.getNotes(body, notes)
  console.log(res.body, JSON.stringify(res.body))
  // unsure how this is not working I cant find id still needs work
  notes = notes.filter(note => note.id !== res.id);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes, null, 2)
  );

  res.json(notes)
  // .catch((err) => res.status(500).json(err))

})
router.post('/notes', (req, res) => {
  //db.getNotes(body, notes)
  const note = { ...req.body, id: uuidv4() }
  notes.push(note)
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes, null, 2)
  );

  res.json(notes)
  // .catch((err) => res.status(500).json(err))

})


module.exports = router






















