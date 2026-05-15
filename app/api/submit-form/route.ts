import { NextRequest, NextResponse } from "next/server";
import sheetService from "@/lib/services/sheet.service";
import { format } from "date-fns";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const formattedDate = format(
      new Date(
        new Date().toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
        })
      ),
      "dd LLL yyyy hh:mm aa"
    );

    const dataToSend = {
      Name: fullName,
      Email: email,
      ProjectType: projectType,
      Description: description,

      EntryUrl: entryUrl || "—",
      SourceUrl: sourceUrl || "—",
      ReferrerUrl: referrerUrl || "—",

      IpLocation: ip,
      CreatedAt: formattedDate,
    };

    // Save to Google Sheet
    await sheetService.addContactForm(dataToSend);

    // Send email to admin
    await resend.emails.send({
      from: "Sociesto <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      subject: `New Contact Form Submission - ${fullName}`,

      html: `
        <h2>New Lead Received</h2>

        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Description:</strong> ${description}</p>

        <hr />

        <p><strong>Entry URL:</strong> ${entryUrl || "—"}</p>
        <p><strong>Source URL:</strong> ${sourceUrl || "—"}</p>
        <p><strong>Referrer URL:</strong> ${referrerUrl || "—"}</p>

        <p><strong>IP:</strong> ${ip}</p>
        <p><strong>Submitted At:</strong> ${formattedDate}</p>
      `,
    });

    // Auto reply to client
    await resend.emails.send({
      from: "Sociesto <onboarding@resend.dev>",
      to: email,
      subject: "We received your inquiry",

      html: `
        <h2>Thank you for contacting Sociesto</h2>

        <p>Hi ${fullName},</p>

        <p>
          We’ve received your inquiry regarding
          <strong>${projectType}</strong>.
        </p>

        <p>
          Our team will review your requirements and get back to you shortly.
        </p>

        <br />

        <p><strong>Your Message:</strong></p>

        <blockquote>
          ${description}
        </blockquote>

        <br />

        <p>Best Regards,<br />Sociesto Team</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error: any) {
    console.error("[CONTACT_API_ERROR]", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}