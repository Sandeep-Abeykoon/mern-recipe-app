import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { UserModel } from '../models/Users.js';

const TOKEN_KEY = process.env.TOKEN_KEY;

const router = express.Router();

// New User register function
router.post("/register", async(req, res) => {
    const { username, password, displayName } = req.body;

    // Checking if the username already available
    const user = await UserModel.findOne({username});

    if (user) {
        return res.json({ message: "User already exists!"});
    }
    // Decrypting the user password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Adding the new user to the database
    const newUser = new UserModel({ username, password: hashedPassword, displayName});
    await newUser.save();

    res.json({ message: "User registered sucessfully" });
});


// User login function
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    // Checking if the username already available
    const user = await UserModel.findOne({username});

    if (!user) {
        return res.status(404).json({ message: "User doesn't exist!"});
    }
    //Comparing the becrypted user entered password with the database saved password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) {
        return res.status(401).json({ message: "Username or Password is Incorrect"});
    }
    //Creating a token
    const token = jwt.sign({ id: user._id }, TOKEN_KEY);
    res.status(200).json({ token, userID: user._id});
});


// To get display-name from userId
router.get("/:userID", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userID).select('displayName');
        res.json(user.displayName)
    } catch (error) {
        console.error(error);
    }
})

export { router as userRouter};

// Middleware to verify user requests by the token
export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, TOKEN_KEY, (err) => {
            if (err) {
                return res.sendStatus(403);
            }
            next();
        });
    } else {
        res.sendStatus(401);
    }
}