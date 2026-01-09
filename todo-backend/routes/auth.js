import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../db.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email",
      [email, hashedPassword]
    );

    const user = result.rows[0];

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(201).json({
      message: "User created successfully",
      token,
      user,
    });
  } catch (err) {
    if (err.code === "23505") {
      return res.status(400).json({ error: "Email already exists" });
    }

    console.error(err);
    res.status(500).json({ error: "Signup failed" });
  }
});


router.post("/login", async (req, res) => {
    try{
        const {email, password} = req.body;

        //1. Validation
        if(!email || !password) {
            return res.status(400).json({error: "Email Password are Require"});
        }

        //2. Find User
        const result = await pool.query("SELECT * FROM users WHERE email = $1",[email]);

        const user = result.rows[0];

        //3. Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res.status(401).json({error: "Invalid Credentials"});
        }

        //4. Generate JWT
        const token = jwt.sign(
            {userId: user.id, email: user.email},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        )

        //5. Response
        res.json({
            message: "Login Successful",
            token,
            user : {id: user.id, email: user.email}
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "Login failed"});
    }

})

export default router;
