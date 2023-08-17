import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { UserModel } from '../models/Users.js';

const router = express.Router();

// New User register function
router.post("/register", async(req, res) => {
    const { username, password } = req.body;

    // Checking if the username already available
    const user = await UserModel.findOne({username});

    if (user) {
        return res.json({ message: "User already exists!"});
    }

    // Decrypting the user password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Adding the new user to the database
    const newUser = new UserModel({ username, password: hashedPassword});
    await newUser.save();

    res.json({ message: "User registered sucessfully" });
});


// User login function
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    // Checking if the username already available
    const user = await UserModel.findOne({username});

    if (!user) {
        return res.json({ message: "User doesn't exist!"});
    }

    //Comparing the becrypted user entered password with the database saved password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) {
        return res.json({ message: "Username or Password is Incorrect"});
    }

    

});


export { router as userRouter};