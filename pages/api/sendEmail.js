import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;

      const transporter = nodemailer.createTransport({
        host: 'cpanel', // Replace with your SMTP host
        port: 465, // Replace with your SMTP port
        secure: true, // Set to true if using SSL/TLS
        auth: {
          user: process.env.EMAIL_USER, // Replace with your email address
          pass: process.env.EMAIL_PASS, // Replace with your email password or app password
        },
      });
      try {
        // Send the email
        await transporter.sendMail({
          from: email,
          to: process.env.EMAIL, // Replace with your email address to receive the form submissions
          subject: 'New Form Submission',
          html: `
            <h3>Name: ${name}</h3>
            <h3>Email: ${email}</h3>
            <p>${message}</p>
          `,
        });

        res.status(200).end();
      } catch (error) {
        console.error(error);
        res.status(500).end();
      }
    } else {
      res.status(404).end();
    }

    res.status(200).json({ name: 'John Doe' });
  } else {
    // Handle any other HTTP method
  }
}
