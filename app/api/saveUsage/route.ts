import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
const _ = require("lodash");

type usageJsonArr = Array<{ id: string; value: number }>;
type usageJson = { id: string; value: number };

export async function POST(req: NextRequest) {
  try {
    const reqjson = await req.json();
    console.log(reqjson);
    const file = fs.readFileSync(
      process.cwd() + "/data/usage_data.json",
      "utf8",
    );
    const filestring = file.toString() || "[]";
    const currjson: usageJsonArr = JSON.parse(filestring);
    reqjson.forEach((item: usageJson) => {
      console.log(item);
      let found = _.find(currjson, { id: item.id });
      if (found) {
        found.value += item.value;
      } else {
        currjson.push(item);
      }
    });
    fs.writeFileSync(
      process.cwd() + "/data/usage_data.json",
      JSON.stringify(currjson, null, 2),
    );
  } catch (e: any) {
    console.error(e);
    return new NextResponse("", { status: 500 });
  }
  return new NextResponse("", { status: 200 });
}
