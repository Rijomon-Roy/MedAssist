require("dotenv").config();

const transporter = require("./config/email");
console.log("Transporter:", transporter);
console.log("Type:", typeof transporter);
console.log("sendMail:", transporter.sendMail);

async function sendTestEmail() {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sends to yourself
      subject: "✅ MedAssist Test Email",
      text: "Congratulations! Nodemailer is working successfully.",
    });

    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

sendTestEmail();