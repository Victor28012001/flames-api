// routes/api/services.js

const express = require('express');
const router = express.Router();

// Load services model
const services = require('../../models/Services');

// @route   GET api/services/test
// @desc    Tests services route
// @access  Public
router.get('/test', (req, res) => res.send('services route testing!'));

// @route   GET api/services
// @desc    Get all services
// @access  Public
router.get('/', (req, res) => {
    services.find()
        .then(services => res.json(services))
        .catch(err => res.status(404).json({ noservicesfound: 'No services found' }));
});

// @route   GET api/services/:id
// @desc    Get single services by id
// @access  Public
router.get('/:id', (req, res) => {
    services.findById(req.params.id)
        .then(services => res.json(services))
        .catch(err => res.status(404).json({ noservicesfound: 'No services found' }));
});

// @route   POST api/services
// @desc    Add/save services
// @access  Public
router.post('/', (req, res) => {
    // let time = req.body.date_joined;
    // console.log(time)
    services.create(req.body)
        .then(services => { 
            res.json({ msg: 'services added successfully' })})
        .catch(err => res.status(400).json({ error: 'Unable to add this services' + err }));
});

// @route   PUT api/services/:id
// @desc    Update services by id
// @access  Public
router.put('/:id', (req, res) => {
    services.findByIdAndUpdate(req.params.id, req.body)
        .then(services => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route   DELETE api/services/:id
// @desc    Delete services by id
// @access  Public
router.delete('/:id', (req, res) => {
    services.findByIdAndDelete(req.params.id)
        .then(services => res.json({ mgs: 'services entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a services' }));
});

module.exports = router;