import { NextRequest, NextResponse } from "next/server";
import { validateHelpRequest, sanitizeString } from "@/lib/validation";
import { storeHelpRequest } from "@/lib/storage";
import { sendHelpNotificationEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const rawData = await req.json();

    // Server-side validation
    const validation = validateHelpRequest(rawData);
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid input fields",
          details: validation.errors,
        },
        { status: 400 }
      );
    }

    // Sanitize values
    const sanitizedData = {
      name: sanitizeString(rawData.name),
      age: typeof rawData.age === "number" ? rawData.age : parseInt(rawData.age, 10),
      location: sanitizeString(rawData.location),
      email: rawData.email.trim(),
      grievance: sanitizeString(rawData.grievance),
    };

    // Store in Supabase / Local storage
    const storageResult = await storeHelpRequest(sanitizedData);

    // Send automated email notification via Resend directly to the user's email
    const emailResult = await sendHelpNotificationEmail({
      ...sanitizedData,
      id: storageResult.id,
      created_at: storageResult.created_at,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your request has reached the Purrlight.",
        id: storageResult.id,
        created_at: storageResult.created_at,
        storageMode: storageResult.storageMode,
        emailMode: emailResult.mode,
        userEmail: sanitizedData.email,
        emailError: emailResult.error,
        letterPreview: emailResult.letterPreview,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error processing help request:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Something got tangled in the Purrlight.",
        message: "Server encountered an error while handling your request.",
      },
      { status: 500 }
    );
  }
}
