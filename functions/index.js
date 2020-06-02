const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendContactForm = functions.https.onRequest((req, res) => {
  const data = JSON.parse(req.body);
  const {
    firstName,
    lastName,
    organization,
    email,
    phoneNumber,
    comment,
  } = data;

  const msgTemplate = `
    <div>
    <h2>New Contact Form Submission</h2>
    <h4>Information</h4>
    <ul>
      <li>Name: ${firstName} ${lastName}</li>
      <li>Organization: ${organization}</li>
      <li>Email: ${email}</li>
      <li>Phone Number: ${phoneNumber}</li>
    </ul>
    <p>${comment}</p>
    </div>
    `;

  const mailOptions = {
    from: `Contact Form <noreply@brunotorres.dev>`,
    to: `bruno.torres.fabila@gmail.com`,
    subject: `New Contact Submission`,
    html: msgTemplate,
  };

  return cors(req, res, () => {
    mailTransport.sendMail(mailOptions, (err, data) => {
      if (err) {
        return res.send(err.toString());
      }
      return res.send('Message Sent');
    });
  });
});
