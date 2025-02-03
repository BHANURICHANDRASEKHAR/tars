import express from "express";
import Users from "../../Database_Models/User.js";
import sendMail from "./MailConnection.js";
import crypto from "crypto";

const router = express.Router();

router.post("/forgotPassword", async (req, res) => {
   console.log("Forgot Password'",req.body);
    const { email } = req.body;
    console.log(email)
    try {
        const user = await Users.findOne({ email });
        if (user) {
            const otp = generateOTP();
             console.log(otp)
            const emailTemplate = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>OTP Card - Tars</title>
                    <style>
                       body {
            font-family: 'Arial', sans-serif;
            background-color: #f5f5f5;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .card {
            background: #ffffff;
            border-radius: 15px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            width: 90%;
            max-width: 400px;
            padding: 30px;
            text-align: center;
            position: relative;
        }
        .header {
            margin-bottom: 20px;
            border-bottom: 2px solid #e0e0e0;
            padding-bottom: 10px;
        }
        .header img {
            width: 80px;
            height: auto;
        }
        .otp {
            font-size: 40px;
            font-weight: 700;
            color: #ffffff;
            background: #4caf50;
            padding: 15px 25px;
            border-radius: 10px;
            margin: 20px 0;
            display: inline-block;
        }
        .card h2 {
            color: #333;
            margin: 0;
            font-size: 22px;
            font-weight: 500;
        }
        .card p {
            color: #666;
            margin: 10px 0 20px;
            font-size: 15px;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #999;
        }
        .button {
            background-color: #4caf50;
            color: #ffffff;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 500;
            display: inline-block;
            transition: background-color 0.3s;
        }
        .button:hover {
            background-color: #388e3c;
        }
        .extra-content {
            margin-top: 20px;
        }
        .extra-content p {
            font-size: 13px;
            color: #333;
        }
        .contact-link {
            color: #4caf50;
            text-decoration: none;
            font-weight: 500;
        }
        .contact-link:hover {
            text-decoration: underline;
        }
        @media (max-width: 600px) {
            .card {
                padding: 20px;
            }
            .otp {
                font-size: 32px;
            }
            .button {
                padding: 10px 20px;
            }
        }
                    </style>
                </head>
                <body>
                    <div class="card">
                        <h2>Your OTP Code</h2>
                        <p>Enter the OTP code below to verify your account:</p>
                        <div class="otp">${otp}</div>
                        <p>If you need assistance, contact our support team at <a href="mailto:support@Tars.com">support@Tars.com</a>.</p>
                    </div>
                </body>
                </html>
            `;

            const status = await sendMail(email, "Change Password", emailTemplate);
            if (status) {
                return res.status(200).send({ msg: "OTP sent successfully", status: true,otp:otp });
            } else {
                return res.status(500).send({ msg: "Failed to send OTP", status: false });
            }
        } else {
            return res.status(201).send({ msg: "User not found", status: false });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send({ msg: "Error in processing request. Try again later.", status: false });
    }
});

function generateOTP(length = 4) {
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
    return crypto.randomInt(min, max + 1).toString();
}

export default router;
