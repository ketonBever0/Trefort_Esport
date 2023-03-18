const nodemailer = require('nodemailer');
const emailValidator = require('deep-email-validator');

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: process.env.SERVICE,
            secure: true,
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }
        });

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text
        });
        console.log("Email elküldve");
    } catch (error) {
        console.log(error);
    }
}

const isEmailValid = async (email) => {
    return emailValidator.validate(email);
}

module.exports = {
    sendEmail,
    isEmailValid
}