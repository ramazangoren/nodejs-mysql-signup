const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();



router.get('/', (req, res) => {
    res.render('login')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/forgotpassword', (req, res) => {
    res.render('forgotpassword')
})

router.post('/forgotpassword', (req, res) => {
    // console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rmzngrn0404@gmail.com',
            pass: 'Ramo0404'
        }
    });

    const mailOptions = {
        from: 'rmogrn0404@gmail.com',
        to: req.body.email,
        subject: `message from rmogrn0404@gmail.com`,
        text: `<a href="http://localhost:4000/reset"> reset your password </a>`
    }

    transporter.sendMail(mailOptions, (err, info)=> {
        if (err) {
            console.log(err);
        } else {
            console.log(`Email sent:`);
            res.send('success');
        }
    })
})


router.get('/reset', (req, res) => {
    res.render('resetpassword')
})

// router.post('/reset', (req, res) => {
//     res.render('resetpassword')
// })

router.get('*', (req, res) => {
    res.render('404')
})

module.exports = router;