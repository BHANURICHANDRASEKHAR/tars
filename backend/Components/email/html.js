const Htmldata=`<!DOCTYPE html>
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
        <div class="header">
            <img src="logo-placeholder.png" alt="Tars Logo">
        </div>
        <h2>Your OTP Code</h2>
        <p>Enter the OTP code below to verify your account:</p>
        <div class="otp">${otp}</div>
        <div class="extra-content">
            <p>Welcome to Tars!</p>
            <p>If you need assistance, contact our support team <a href="mailto:support@Tars.com" class="contact-link">here</a>.</p>
        </div>
        <div class="footer">
            <a href="#" class="button">Resend OTP</a>
        </div>
    </div>
</body>
</html>
`
export default Htmldata;