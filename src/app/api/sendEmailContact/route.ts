import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const readField = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const name = readField(body.name, 120);
  const email = readField(body.email, 160);
  const phone = readField(body.phone, 30);
  const source = readField(body.source, 60);

  if (!name || !source || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }

  try {
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
      replyTo: email,
      subject: `Contato pelo site - ${name}`,
      html: `
      <ul>
        <li> Nome: ${escapeHtml(name)} </li>
        <li> Email: ${escapeHtml(email)} </li>
        <li> Telefone: ${escapeHtml(phone || "-")} </li>
        <li> Como ficou sabendo: ${escapeHtml(source)} </li>
      </ul>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.log("Erro:", error);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}
