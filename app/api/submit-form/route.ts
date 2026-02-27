import { NextRequest, NextResponse } from "next/server";
import sheetService from "@/lib/services/sheet.service";
import { format } from "date-fns";

export async function POST(req: NextRequest) {
  try {
    const ip =
      (req.headers.get("x-forwarded-for") ?? "127.0.0.1")
        .split(",")[0]
        .trim();

    const data = await req.json();

    const {
      fullName,
      email,
      projectType,
      description,
      entryUrl,
      sourceUrl,
      referrerUrl,
    } = data;

    if (!fullName || !email || !projectType || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const dataToSend = {
      Name: fullName,
      Email: email,
      ProjectType: projectType,
      Description: description,

      EntryUrl: entryUrl,
      SourceUrl: sourceUrl,
      ReferrerUrl: referrerUrl,

      IpLocation: ip,
      CreatedAt: format(
        new Date(
          new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
        ),
        "dd,LLL yyyy hh:mm aa"
      ),
    };

    await sheetService.addContactForm(dataToSend);

    return NextResponse.json({});
  } catch (error: any) {
    console.error(error);
    return new NextResponse(error.message, { status: 500 });
  }
}
