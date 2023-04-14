var postmark = require("postmark");

// Send an email:
var client = new postmark.ServerClient("4497ec25-ef47-4733-8668-fe41f32291d7");

const sender_email = process.env.APP_EMAIL
const sender_pass = process.env.APP_PASS

module.exports.sendVerificationEmail = (user_name, email, token) =>{
    client.sendEmail({
    "From": "24100144@lums.edu.pk",
    "To": email,
    "Subject": "Verify your Makret Place email",
    "HtmlBody": `<h1>Email Confirmation</h1>
            <h2>Hello ${user_name}</h2>
            <p>Thank you for registering. Please confirm your email by clicking on the following link</p>
            <a href=https://good-tan-woodpecker-wrap.cyclic.app/api/goals/verify${token}> Click here</a>
            </div>`,
    "TextBody": "Verify your email",
    "MessageStream": "outbound"
    });
}
// const nodemailer = require("nodemailer")



// const transport = nodemailer.createTransport({
//     service :"Gmail",
//     secure:true,
//     auth:{
//         user: sender_email,
//         pass: sender_pass
//     }
// })

// module.exports.sendVerificationEmail = (user_name, email, token) =>{
//     console.log("bhai bhej rha email", sender_email, email)
//     transport.sendMail({
//         from: sender_email,
//         to: email,
//         subject: "LUMS Market Place email verification",
//         html: `<h1>Email Confirmation</h1>
//         <h2>Hello ${user_name}</h2>
//         <p>Thank you for registering. Please confirm your email by clicking on the following link</p>
//         <a href=https://good-tan-woodpecker-wrap.cyclic.app/api/goals/verify${token}> Click here</a>
//         </div>`
//     }, function(error, info){
//         if(error){
//             console.log(error);
//         }else{
//             console.log('Email sent: ' + info.response);
//         }
//     });
    
// }
