const {sendEmail, isEmailValid} = require('../utils/email');
const {User, validate} = require('../models/user');
const crypto = require('crypto');
const {Token} = require('../models/token');
const asyncHandler = require('express-async-handler');

const register = asyncHandler( async (req, res) => {
    try {
        const {error} = validate(req.body);
        if(error) return res.status(400).json({message: error.details[0].message});
    
        let user = await User.findOne({email: req.body.email});
        if(user) return res.status(400).json({message: "Ezen az e-mail címen már létezik felhasználó!"});
        
        /*
        const {valid, reason, validators} = await isEmailValid(req.body.email);
        if(!valid) return res.status(400).json({
            message: "Kérem érvényes email címet adjon meg!",
            reason: validators[reason].reason
        });
        */

        user = await User.create({
            name: req.body.name,
            email: req.body.email
        });
    
        let token = await Token.create({
            userId: user._id,
            token: crypto.randomBytes(32).toString("hex"),
        });
    
        const message = `${process.env.BASE_URL}/user/verify/${user.id}/${token.token}`;
        await sendEmail(user.email, "Verify email", message);
        res.json({message: "Megerősítő emailt küldtünk."});
    } catch (error) {
        console.log(error);
    }
});

const verifyEmail = async (req, res) => {
    try {
        const user = await User.findOne({
            _id: req.params.id
        });
        if(!user) return res.status(400).send("Invalid link");
    
        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token,
        });
        if (!token) return res.status(400).send("Invalid link");
        await User.updateOne({
            _id: user._id,
            verified: true
        });
        await Token.findByIdAndRemove({_id: token._id});
        res.json({message: "Email sikeresen jóváhagyva"});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    register,
    verifyEmail
}
