import nodemailer from 'nodemailer';

 export default async function sendMail(to, subject, htmlContent) {
    try {
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, 
            auth: {
                user: process.env.email,
                pass: process.env.passkey,
            },
        });

        let mailOptions = {
            from: `"Tars" <${process.env.email}>`, // Sender address
            to: to, 
            subject: subject, 
            html: htmlContent,
        };

         await transporter.sendMail(mailOptions);
         return true;
        
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

// Usage Example
// sendMail('bhanurichandu@gmail.com', 'Hello', '<h1>Hello World</h1>');
