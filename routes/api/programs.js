// routes/api/programs.js

const express = require('express');
const router = express.Router();

// Load program model
const program = require('../../models/Programs');

// @route   GET api/programs/test
// @desc    Tests programs route
// @access  Public
router.get('/test', (req, res) => res.send('program route testing!'));

// @route   GET api/programs
// @desc    Get all programs
// @access  Public
router.get('/', (req, res) => {
    program.find()
        .then(programs => res.json(programs))
        .catch(err => res.status(404).json({ noprogramsfound: 'No programs found' }));
});

// @route   GET api/programs/:id
// @desc    Get single program by id
// @access  Public
router.get('/:id', (req, res) => {
    program.findById(req.params.id)
        .then(program => res.json(program))
        .catch(err => res.status(404).json({ noprogramfound: 'No program found' }));
});

// @route   POST api/programs
// @desc    Add/save program
// @access  Public
router.post('/', (req, res) => {
    // let time = req.body.date_joined;
    // console.log(time)
    program.create(req.body)
        .then(program => { 
            res.json({ msg: 'program added successfully' })})
        .catch(err => res.status(400).json({ error: 'Unable to add this program' + err }));
});

// @route   PUT api/programs/:id
// @desc    Update program by id
// @access  Public
router.put('/:id', (req, res) => {
    program.findByIdAndUpdate(req.params.id, req.body)
        .then(program => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route   DELETE api/programs/:id
// @desc    Delete program by id
// @access  Public
router.delete('/:id', (req, res) => {
    program.findByIdAndDelete(req.params.id)
        .then(program => res.json({ mgs: 'program entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a program' }));
});

module.exports = router;