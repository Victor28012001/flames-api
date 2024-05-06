// routes/api/members.js

const express = require('express');
const router = express.Router();

// Load member model
const member = require('../../models/Members');

// @route   GET api/members/test
// @desc    Tests members route
// @access  Public
router.get('/test', (req, res) => res.send('member route testing!'));

// @route   GET api/members
// @desc    Get all members
// @access  Public
router.get('/', (req, res) => {
    member.find()
        .then(members => res.json(members))
        .catch(err => res.status(404).json({ nomembersfound: 'No members found' }));
});

// @route   GET api/members/:id
// @desc    Get single member by id
// @access  Public
router.get('/:id', (req, res) => {
    member.findById(req.params.id)
        .then(member => res.json(member))
        .catch(err => res.status(404).json({ nomemberfound: 'No member found' }));
});

// @route   POST api/members
// @desc    Add/save member
// @access  Public
router.post('/', (req, res) => {
    // let time = req.body.date_joined;
    // console.log(time)
    member.create(req.body)
        .then(member => { 
            res.json({ msg: 'member added successfully' })})
        .catch(err => res.status(400).json({ error: 'Unable to add this member' + err }));
});

// @route   PUT api/members/:id
// @desc    Update member by id
// @access  Public
router.put('/:id', (req, res) => {
    member.findByIdAndUpdate(req.params.id, req.body)
        .then(member => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route   DELETE api/members/:id
// @desc    Delete member by id
// @access  Public
router.delete('/:id', (req, res) => {
    member.findByIdAndDelete(req.params.id)
        .then(member => res.json({ mgs: 'member entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a member' }));
});

module.exports = router;