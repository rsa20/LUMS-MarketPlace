const nodemailer = require("nodemailer");

const sender_email = process.env.APP_EMAIL;
const sender_pass = process.env.APP_PASS;

const transport = nodemailer.createTransport({
  service: "Gmail",
  secure: true,
  auth: {
    user: sender_email,
    pass: sender_pass,
  },
});

module.exports.sendVerificationEmail = (user_name, email, token) => {
  console.log("bhai bhej rha email", sender_email, email);
  new Promise((resolve, reject) => {
    transport.sendMail(
      {
        from: sender_email,
        to: email,
        subject: "LUMS Market Place email verification",
        html: `<h1>Email Confirmation</h1>
        <h2>Hello ${user_name}</h2>
        <p>Thank you for registering. Please confirm your email by clicking on the following link</p>
        <a href=https://good-tan-woodpecker-wrap.cyclic.app/api/goals/verify${token}> Click here</a>
        </div>`,
      },
      function (error, info) {
        if (error) {
          reject(error);
        } else {
          resolve("Email sent: " + info.response);
          console.log("Email sent: " + info.response)
        }
      }
    );
  })
};
