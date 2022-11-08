const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Gig = require('../models/gig')


// Get gig list
router.get('/', (req,res) => 
    Gig.findAll()
    .then(gigs => {
        res.render('gigs', {
            gigs
        })
    })
    .catch(err => console.log(err)))

// Add a gig
router.get('/add', (req, res) => {
    const data = {
        title: "Simple wordpress website",
        technologies: 'wordpress,php,html.css',
        budget: '$1000',
        description: 'lorem ipsum hello dolor sit amet consecurut',
        contact_email: "user2@gmail.com"
    }

    let { title, technologies, budget, description, contact_email } = data

    //Insert into table
    Gig.create({
        title,
        technologies,
        description,
        budget,
        contact_email
    })
        .then(gig => res.redirect('/gigs'))
        .catch(err => console.log(err))
})

module.exports = router