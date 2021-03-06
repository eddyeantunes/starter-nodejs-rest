var nodemailer = require('nodemailer'),
    config = require('../config/default');

module.exports = sendEmail;

function sendEmail(emailInfo) {
    nodemailer.createTransport(config.email).sendMail(emailInfo, function(error) {
        if(error){
            console.log(error.response);
            process.exit(1);
        }
    })
}