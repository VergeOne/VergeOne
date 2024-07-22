import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req: NextRequest) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.strato.de",
      port: 465,
      secure: true, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "info@verge-one.com",
        pass: "Dominik09@.-",
      },
    });
    const { name, email, options, message } = await req.json();
    const info = await transporter.sendMail({
      from: "Verge-One", // sender address
      to: email, // list of receivers
      subject: "Neue Nachricht von " + name, // Subject line // plain text body
      html: `Optionen:${options
        .map((opt: { name: string; value: string }) => {
          return opt.name + ": " + opt.value;
        })
        .join(", ")} <br/> Nachricht: ${message}`, // html body
    });
    console.log("Message sent: %s", info.messageId);
    return new NextResponse("success", { status: 200 });
  } catch (e: any) {
    return new NextResponse(e.toString(), { status: 403 });
  }
}
