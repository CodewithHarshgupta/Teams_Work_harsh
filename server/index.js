// const express = require('express');
// const app = express();
// app.use(express.json());

// require('./db/connection');
// const User = require('./Model/User');

// app.post("/", async(req, res) => {
//     let user = new User(req.body);
//     let result = await user.save();
//     res.send(result);
// })
// app.listen(4000);

// const express = require('express ');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const app = express();
// const port = 4000;
// app.use(cors());
// app.use(express.json({ limit: "25mb" }));
// app.use(express.urlencoded({ limit: "25mb" }));
// app.use((req, res) => {
//     res.setHeader("Access-control-Allow-origin", "+");
//     next();

// });

// function sendEmail() {
//     return new Promise((resolve, reject) => {
//         var transporter = nodemailercreateTransport({
//             service: "gmail",
//             auth: {
//                 user: "madhureeyadav804@gmail.com",
//                 pass: "ccptdcqpgtbghxvo"
//             }
//         });
//         const mail_config = {
//             from: "madhureeyadav804@gmail.com",
//             to: "example@gmail.com",
//             subject: subject,
//             text: message,
//         };

//         transporter.sendMail(mail_configs, function(error, info) {
//             if (error) {
//                 console.log(error);
//                 return reject({ message: 'An error occures' });
//             }
//             return resolve({ message: 'EMail sent successful' });
//         })
//     })
// }

// app.get("/", (req, res) => {
//     sendEmail(res.query)
//         .then((response) => response.send(response.message))
//         .catch((error) => res.status(500).send(error.message));
// })

// app.listen(port, () => {
//     console.log(`modemailer is listening at http://localhost:${port}`)
// })
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./Model/User');
const mongoose = require('./db/connection'); // Import the mongoose connection
const app = express();
const port = 4000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'madhureeyadav804@gmail.com',
        pass: 'ccptdcqpgtbghxvo',
    },
});

// Endpoint to handle contact form submissions
app.post('/', async(req, res) => {
    const { name, email, number, message } = req.body;

    // Save user data to MongoDB
    try {
        const newUser = new User({
            name,
            email,
            number,
            message,
        });

        await newUser.save();
        console.log('User data saved to MongoDB');
    } catch (error) {
        console.error('Error saving user data:', error);
        res.status(500).send('Error saving user data');
        return;
    }

    // Email configuration
    const mailOptions = {
        from: 'madhureeyadav804@gmail.com',
        to: 'recipientl@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});