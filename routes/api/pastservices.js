// routes/api/pastservices.js

const express = require('express');
const router = express.Router();

// Load pastservices model
const pastservices = require('../../models/PastServices');

// @route   GET api/pastservices/test
// @desc    Tests pastservices route
// @access  Public
router.get('/test', (req, res) => res.send('pastservices route testing!'));

// @route   GET api/pastservices
// @desc    Get all pastservices
// @access  Public
router.get('/', (req, res) => {
    pastservices.find()
        .then(pastservices => res.json(pastservices))
        .catch(err => res.status(404).json({ nopastservicesfound: 'No pastservices found' }));
});

// @route   GET api/pastservices/:id
// @desc    Get single pastservices by id
// @access  Public
router.get('/:id', (req, res) => {
    pastservices.findById(req.params.id)
        .then(pastservices => res.json(pastservices))
        .catch(err => res.status(404).json({ nopastservicesfound: 'No pastservices found' }));
});

// @route   POST api/pastservices
// @desc    Add/save pastservices
// @access  Public
router.post('/', (req, res) => {
    // let time = req.body.date_joined;
    // console.log(time)
    pastservices.create(req.body)
        .then(pastservices => { 
            res.json({ msg: 'pastservices added successfully' })})
        .catch(err => res.status(400).json({ error: 'Unable to add this pastservices' + err }));
});

// @route   PUT api/pastservices/:id
// @desc    Update pastservices by id
// @access  Public
router.put('/:id', (req, res) => {
    pastservices.findByIdAndUpdate(req.params.id, req.body)
        .then(pastservices => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route   DELETE api/pastservices/:id
// @desc    Delete pastservices by id
// @access  Public
router.delete('/:id', (req, res) => {
    pastservices.findByIdAndDelete(req.params.id)
        .then(pastservices => res.json({ mgs: 'pastservices entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a pastservices' }));
});

module.exports = router;