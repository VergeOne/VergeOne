import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");
import fs from "fs";
export async function POST(req: NextRequest) {
  try {
    const { name, email, options, message } = await req.json();
    let file = fs.readFileSync(process.cwd() + "/data/Anfragen.json");
    let json = [];
    try {
      json = await JSON.parse(file.toString());
    } catch (e: any) {
      json = [];
    }
    json.push({
      name: name,
      email: email,
      options: options,
      message: message,
      date: new Date().toISOString(),
    });
    fs.writeFileSync(
      process.cwd() + "/data/Anfragen.json",
      JSON.stringify(json, null, 2),
    );

    //TODO: Implement DKIM for Mails on server
    const transporter = nodemailer.createTransport({
      host: "smtp.strato.de",
      port: 465,
      secure: true,
      auth: {
        user: "info@verge-one.com",
        pass: process.env.SMTP_PASS,
      },
    });
    await transporter.sendMail({
      from: "Verge-One",
      to: "info@verge-one.com",
      subject: "Neue Nachricht von " + name,
      html: `Name: ${name} <br /><br />Email: ${email}<br /><br />Optionen:<br /><br />${options
        .filter((opt: { name: string; value: string }) => {
          return opt.value;
        })
        .map((item: { name: string; value: string }) => {
          return item.name;
        })
        .join(", ")} <br/><br /> Nachricht: ${message}`,
    });
    await transporter.sendMail({
      from: "Verge-One",
      to: email,
      subject: "Vielen Dank für Ihre Nachricht",
      html: `<div style="margin-bottom: 120px">Hallo ${name}, <br /><br /><strong>Vielen Dank für Ihre Nachricht!</strong> <br/>Wir werden uns so bald wie möglich bei Ihnen melden. <br /><br /> Schönen Tag und liebe Grüße,<br />Ihr Verge-One Team <br /><br /></div>`,
      text: `Hallo ${name}, \n\nVielen Dank für Ihre Nachricht!\nWir werden uns so bald wie möglich bei Ihnen melden,\n\nSchönen Tag und liebe Grüße,\nIhr Verge-One Team`,
    });
    return new NextResponse("success", { status: 200 });
  } catch (e: any) {
    console.log(e);
    return new NextResponse(e.toString(), { status: 500 });
  }
}
