import { sendConsultation } from "@/lib/sendEmail";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, phone, company, message } = body;

        if (!name || !email || !phone || !company || !message) {
            return NextResponse.json(
                { success: false, message: "All fields are required" },
                { status: 400 }
            );
        }

        await sendConsultation({ name, email, phone, company, message });

        return NextResponse.json({
            success: true,
            message: "Consultation sent successfully",
        });
    } catch (error) {
        console.error("Error sending consultation:", error);
        return NextResponse.json(
            { success: false, message: "Failed to send consultation" },
            { status: 500 }
        );
    }
}
