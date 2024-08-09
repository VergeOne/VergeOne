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
    await transporter.sendMail({
      from: "Verge-One", // sender address
      to: "info@verge-one.com", // list of receivers
      subject: "Neue Nachricht von " + name, // Subject line // plain text body
      html: `Name: ${name} <br /><br />Email: ${email}<br /><br />Optionen:<br /><br />${options
        .filter((opt: { name: string; value: string }) => {
          return opt.value;
        })
        .map((item: { name: string; value: string }) => {
          return item.name;
        })
        .join(", ")} <br/><br /> Nachricht: ${message}`, // html body
    });
    await transporter.sendMail({
      from: "Verge-One",
      to: email,
      subject: "Vielen Dank für Ihre Nachricht",
      html: `Hallo ${name}, <br /><br /><strong>Vielen Dank für Ihre Nachricht!</strong> <br/>Wir werden uns so bald wie möglich bei Ihnen melden. <br /><br /> Schönen Tag und liebe Grüße,<br />Ihr Verge-One Team <br /><br />`,
    });
    return new NextResponse("success", { status: 200 });
  } catch (e: any) {
    return new NextResponse(e.toString(), { status: 500 });
  }
}
