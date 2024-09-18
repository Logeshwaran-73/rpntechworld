const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

// Add a database connection here if needed
// e.g., const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Mailgun setup (Sensitive information should be stored in environment variables for production)
const MAILGUN_API_KEY = 'bab74c24120740b83d784e9ba7fdc2be-826eddfb-a8f72bfb';  // Use environment variables in production
const MAILGUN_DOMAIN = 'sandboxed8b7b4ddf444ce5b485959c581b04b4.mailgun.org';  // Use environment variables in production
const MAILGUN_URL = `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`;

// Function to send the email via Mailgun
async function sendEmail(to, subject, body) {
    try {
        const response = await axios.post(
            MAILGUN_URL,
            new URLSearchParams({
                from: 'Mailgun Sandbox <postmaster@sandboxed8b7b4ddf444ce5b485959c581b04b4.mailgun.org>',
                to: to,
                subject: subject,
                text: body
            }),
            {
                auth: {
                    username: 'api',
                    password: MAILGUN_API_KEY
                }
            }
        );
        console.log(response.data);  // Log success response
        return { status: "success", message: "Email sent successfully", status_code: response.status };
    } catch (error) {
        console.error('Mailgun error:', error.response?.data || error.message);
        return { status: "error", message: error.response?.data?.message || error.message };
    }
}

// POST endpoint to handle form data and send email
app.post('/send-email', async (req, res) => {
    try {
        const { name, phone, email, service, message } = req.body;

        const emailContent = `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Service: ${service}
        Message: ${message}
        `;

        const recipientEmail = "rpntechworld@gmail.com";  // Replace with the recipient's email
        const subject = "New Inquiry from Website";

        const result = await sendEmail(recipientEmail, subject, emailContent);
        res.json(result);

    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
