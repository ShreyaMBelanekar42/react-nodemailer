// const dotenv = require('dotenv');
// dotenv.config();
const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

router.post("/subscribe", (req, res) => {
  const { email } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: '',
        password: '',
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Sending Email With Nodemailer",
      html: "<h3>Welcome to YC Foundation, thank you so much for subscribing!</h3> <br> <p>We will notify you with our upcoming events.</p>",
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error", error);
      } else {
        console.log("Email sent" + info.response);
        res.status(201).json({ status: 201, info });
      }
    });
  } catch (error) {
    res.status(201).json({ status: 401, error });
  }
});

module.exports = router;
