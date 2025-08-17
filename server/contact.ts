import nodemailer from "nodemailer";
import express from "express";

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      auth: {
        user: "94e812001@smtp-brevo.com",
        pass: "URWXmH4KdrSh2tsz",
      },
    });

    await transporter.sendMail({
      from: 'contact@pranjalkumar.com',
      to: 'contact@pranjalkumar.com',
      subject: `[Portfolio Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ error: "Failed to send email.", details: error?.message || String(error) });
  }
});

export default router;
