const fortune = require('./fortune')

exports.home = (req, res) => {
    res.cookie('monster', 'nom nom')
    res.cookie('signed_monster', 'nom nom', { signed: true })
    res.render('home')
}
exports.about = (req, res) => res.render('about', {fortune: fortune.getFortune()})

exports.sectionTest = (req, res) => res.render('section-test')

exports.vacationPhoto = (req, res) => res.render('contest/vacation-photo')

exports.notFound = (req, res) => res.render('404')

exports.newsletterSignup = (req, res) => {
    res.render('newsletter-signup', { csrf: 'CSRF token goes here' })
}

exports.newsletterSignupProcess = (req, res) => {
    console.log('Form (from querystring): ' + req.query.form)
    console.log('CSRF token (from hidden form field): ' + req.body._csrf)
    console.log('Name (from visible form field): ' + req.body.name)
    console.log('Email (from visible form field): ' + req.body.email)
    res.redirect(303, '/newsletter-signup/thank-you')
}

exports.newsletterSignupThankYou = (req, res) => {
    res.render('newsletter-signup-thank-you')
}

exports.newsletter = (req, res) => {
    res.render('newsletter', { csrf: 'CSRF token goes here' })
}

exports.api = {
    newsletterSignup: (req, res) => {
        console.log('CSRF token (from hidden form field): ' + req.body._csrf)
        console.log('Name (from visible form field): '+ req.body.name)
        console.log('Email (from visible form field): ' + req.body.email)
        res.send({'result': 'success'})
    }
}

exports.vacationPhotoContestProcess = (req, res, fields, files) => {
    console.log('filed data: ', fields)
    console.log('files: ', files)
    res.redirect(303, '/contest/vacation-photo-thank-you')
}

exports.api.vacationPhotoContest = (req, res, fields, files) => {
    console.log('field data: ', fields)
    console.log('files: ', files)
    res.send({ result: 'success' })
}

/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => res.render('500', {'message': err.message})
/* eslint-enable no-unused-vars */