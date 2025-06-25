import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { email, mensage } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.OUTLOOK_EMAIL,
        pass: process.env.OUTLOOK_PASSWORD,
      },
    });

    const mailOptions = {
      from: "anascimento@actai.ai",
      to: "alexandre.sfi@hotmail.com",
      subject: `Contact E-commerce exclusive`,
      html: `
      <ul> 
        <li> Email: ${email} </li> 
        <li> Conteudo: ${mensage} </li> 
      </ul>
      `,
    };

    const responseSendEmail = await transporter.sendMail(mailOptions);
    return NextResponse.json({ status: 200, data: responseSendEmail });
  } catch (error) {
    console.log("Erro:", error);
    return NextResponse.json(error);
  }
}
