const { sendEmail } = require('../functions/emailService');

exports.sendGuestEmail = async (req, res) => {
  const { name, email, message, eventType } = req.body;

  if (!name || !email || !message || !eventype) {
    return res.status(400).json({
      message: "Please input all fields"
    });
  }

  // to auto fill subject with buy day or sell day depending on what button
  const subject = eventType == 'buy' ? "Buy Day" : "Sell Day";
  const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  constOptions = {
    from: email,
    to: process.env.ADMIN_EMAIL, // UserAdmin email
    subject: subject,
    text: emailBody
  };

  await sendEmail(emailOptions);
  res.status(200).json({
    message: "Email sent successfully"
  });
}