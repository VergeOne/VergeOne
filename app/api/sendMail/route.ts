import { NextRequest, NextResponse } from "next/server";
import { htmlEscapeJsonString } from "next/dist/server/htmlescape";

export async function POST(req: NextRequest) {
  try {
    const { name, email, options, message } = await req.json();
    return new NextResponse("success", { status: 200 });
  } catch (e: any) {
    return new NextResponse(e.toString(), { status: 403 });
  }
}
