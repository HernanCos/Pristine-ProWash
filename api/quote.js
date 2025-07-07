import nodemailer from "nodemailer"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" })
  }

  const { name, email, phone, address, service, message, _subject } = req.body

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Missing required fields: name, email, and phone are required" })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "info@pristineprowash.net",
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    const mailOptions = {
      from: "info@pristineprowash.net",
      to: "info@pristineprowash.net",
      subject: _subject || "New Quote Request",
      text: `New Quote Request from Pristine ProWash

Name: ${name}
Email: ${email}
Phone: ${phone}
Address: ${address || "N/A"}
Service: ${service || "N/A"}
Message: ${message || "N/A"}
      `,
    }

    await transporter.sendMail(mailOptions)
    return res.status(200).json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Email send error:", error)
    return res.status(500).json({ error: "Failed to send email" })
  }
}
