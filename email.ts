//npm install nodemailer
//npm install @types/nodemailer
import * as nodemailer from "nodemailer";
import * as fs from "fs";

let emailConfig = {
	host: "smtp.mailersend.net",
	port: 587,
	auth: {
		user: 'MS_p1n9Su@trial-k68zxl2y6d54j905.mlsender.net',
		pass: 'koIC1302myR9Cg8x'
	}
}

let html = fs.readFileSync("email.html");

let mailOptions = {
    from: "email@trial-k68zxl2y6d54j905.mlsender.net",
    to: "chicokoch6@gmail.com",
    subject: "Estou enviando um e-mail pelo node TS",
    html: html
};

let transporter = nodemailer.createTransport(emailConfig);

transporter.sendMail(mailOptions, function(error, info)
{
    if (error) 
    {
        console.log('Erro ao enviar email:' + error);
    } 
    else 
    {
        console.log('Email enviado: ' + info.response);
    }
});