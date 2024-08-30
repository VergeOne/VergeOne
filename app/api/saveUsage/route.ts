import { NextRequest, NextResponse } from "next/server";
import { cachedDataVersionTag } from "node:v8";
import fs from "fs";
const _ = require("lodash");
type usageJsonArr = Array<{ id: string; value: number }>;
type usageJson = { id: string; value: number };
export async function POST(req: NextRequest) {
  try {
    const usage_json: usageJsonArr = await req.json();
    const file =
      fs.readFileSync(process.cwd() + "/data/usage_data.json", "utf8") || "[]";
    let file_json: usageJsonArr = await JSON.parse(file.toString());
    for (let elem of usage_json) {
      let found = _.find(file_json, { id: elem.id });
      if (found) found.value += elem.value;
      else file_json.push({ id: elem.id, value: elem.value });
    }
    fs.writeFileSync(
      process.cwd() + "/data/usage_data.json",
      JSON.stringify(file_json, null, 2),
    );
    return new NextResponse("", { status: 200 });
  } catch (e) {
    console.error(e);
    return new NextResponse("failed", { status: 500 });
  }
}
