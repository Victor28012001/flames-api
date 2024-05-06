// routes/api/contacted.js

const express = require('express');
const router = express.Router();

// Load contacted model
const contacted = require('../../models/Contacted');

// @route   GET api/contacted/test
// @desc    Tests contacted route
// @access  Public
router.get('/test', (req, res) => res.send('contacted route testing!'));

// @route   GET api/contacted
// @desc    Get all contacted
// @access  Public
router.get('/', (req, res) => {
    contacted.find()
        .then(contacted => res.json(contacted))
        .catch(err => res.status(404).json({ nocontactedfound: 'No contacted found' }));
});

// @route   GET api/contacted/:id
// @desc    Get single contacted by id
// @access  Public
router.get('/:id', (req, res) => {
    contacted.findById(req.params.id)
        .then(contacted => res.json(contacted))
        .catch(err => res.status(404).json({ nocontactedfound: 'No contacted found' }));
});

// @route   POST api/contacted
// @desc    Add/save contacted
// @access  Public
router.post('/', (req, res) => {
    // let time = req.body.date_joined;
    // console.log(time)
    contacted.create(req.body)
        .then(contacted => { 
            res.json({ msg: 'contacted added successfully' })})
        .catch(err => res.status(400).json({ error: 'Unable to add this contacted' + err }));
});

// @route   PUT api/contacted/:id
// @desc    Update contacted by id
// @access  Public
router.put('/:id', (req, res) => {
    contacted.findByIdAndUpdate(req.params.id, req.body)
        .then(contacted => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route   DELETE api/contacted/:id
// @desc    Delete contacted by id
// @access  Public
router.delete('/:id', (req, res) => {
    contacted.findByIdAndDelete(req.params.id)
        .then(contacted => res.json({ mgs: 'contacted entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a contacted' }));
});

module.exports = router;