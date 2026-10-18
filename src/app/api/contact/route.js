import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { connectToDatabase, Message } from "@/lib/mongodb";

/**
 * POST /api/contact
 * 1. Validates name, email, and message
 * 2. Saves message to MongoDB Atlas ("portfolio_db" -> "messages" collection)
 * 3. Sends an instant email alert to your Gmail via Nodemailer
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // 1. Basic Server-Side Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are all required." },
        { status: 400 }
      );
    }

    // 2. Connect & Save to MongoDB Atlas
    await connectToDatabase();
    const savedMessage = await Message.create({
      name,
      email,
      message,
    });

    // 3. Send Email Notification via Gmail Nodemailer
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS, // 16-character Google App Password
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER, // Sends to your own Gmail inbox
        replyTo: email,             // Clicking "Reply" in Gmail replies directly to the visitor!
        subject: `New Portfolio Message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; background: #0B0D0C; color: #E5E7EB; border: 1px solid #39FF14; border-radius: 12px;">
            <h2 style="color: #39FF14; margin-top: 0;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #39FF14;">${email}</a></p>
            <hr style="border: 0; border-top: 1px solid #1A1F1E; margin: 16px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: #1A1F1E; padding: 14px; border-radius: 8px; color: #ffffff;">${message}</p>
            <p style="font-size: 12px; color: #9CA3AF; margin-top: 16px;">
              Saved to MongoDB Atlas (ID: ${savedMessage._id})
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json(
      { success: true, message: "Message saved and emailed successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}