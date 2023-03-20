export default function handler(req, res) {
  const message = {
    from: req.body.email,
    to: "kiplangatmike1938@gmail.com",
    subject: req.body.subject,
    text: req.body.message,
    html: `<p>${req.body.message}</p>`,
  };

  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "kiplangatmike1938@gmail.com",
      pass: "posocama@1923",
    },
  });

  if (req.method === "POST") {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        res.status(404).json({
          error: `Connection refused at ${err.address}`,
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}
