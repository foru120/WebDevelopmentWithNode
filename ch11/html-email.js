const nodemailer = require('nodemailer')
const credentials = require('./credentials')
const mailTransport = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    auth: {
        user: credentials.sendgrid.user,
        pass: credentials.sendgrid.password
    }
})

async function go() {
    try {
        const result = await mailTransport.sendMail({
            from: '"meadowlark Travel" <info@meadowlarktravel.com>',
            to: 'joe@gmail.com, "Jane Customer" <jane@yahoo.com>, fred@hotmail.com',
            subject: 'Your Meadowlark Travel Tour',
            text: 'Thank you for booking your trip with Meadowlark Travel. ' + 'We look forward to your visit!',
            html: '<h1>Meadowlark Travel</h1>\n<p>Thanks for book your trip with ' + 
                'Meadowlark Travel.  <b>We look forward to your visit!</b>'
        })
        console.log('mail sent successfully: ', result)
    } catch(err) {
        console.log('could not send mail: ', err.message)
    }
}

go()