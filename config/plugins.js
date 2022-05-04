module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'shaun.brown@strapi.io',
          defaultReplyTo: 'shaun.brown@strapi.io',
          testAddress: 'shaun.brown@strapi.io',
        },
      },
    },
    // ...
  });
 /* 
  const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'shaun.brown@strapi.io', // Change to your recipient
  from: 'shaun.brown@strapi.io', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
  */