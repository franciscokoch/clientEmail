import * as nodemailer from "nodemailer";
import * as fs from "fs";
import express from 'express';
import { Router, Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json())

app.get('/', (req: Request, res: Response) => 
{
  res.json(
    { message: 'hello world with Typescript' }
    )
});

app.get('/email', async (req: Request, res: Response) => 
{
    res.json(await enviarEmail("chicokoch6@gmail.com"));
});

async function enviarEmail(destinatario:string)
{
    let emailConfig = {
        host: "smtp.mailersend.net",
        port: 587,
        auth: {
            user: 'MS_9TWvnC@trial-3z0vklo2vj747qrx.mlsender.net',
            pass: 'v0PEwbfIWreXxG6V'
        }
    }

    let mailOptions = {
        from: "email@trial-3z0vklo2vj747qrx.mlsender.net",
        to: destinatario,
        subject: "Estou enviando um e-mail pelo node TS",
        html: "Teste"
    };

    let transporter = nodemailer.createTransport(emailConfig);

    return await transporter.sendMail(mailOptions,);
}

app.listen(3000, () => console.log('server running on port 3000'));