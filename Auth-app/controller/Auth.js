const bcrypt = require("bcrypt");
const User = require("../models/user");

//signUp route handler

exports.signup = async (req, res) => {
    try {
        //get data

        const { name, email, password, role } = req.body
        //check if user alredy exist
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "user already Existss",

            });

        }
        //secure password
        let hashedPassword;

        try {
            hashedPassword = await bcrypt.hash(password, 10);

        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "error in hashing password",

            });

        }

        //create entry for user
        const user = await User.create({
            name, email, password: hashedPassword, role

        })

        res.status(200).json({
            success: true,
            message: "user create Successfully ",
        });




    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "user cannot be registered, please try again later"

        })


    }
}