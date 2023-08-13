import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

const router = express.Router();

router.post("/register");

router.post("/login")

export { router as userRouter};