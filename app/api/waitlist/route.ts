import { db } from "@/lib/firebase"
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore"
import { NextResponse } from "next/server"

function normalizeEmail(email: string) {
  return email.trim().toLowerCase()
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 }
      )
    }

    const normalizedEmail = normalizeEmail(email)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(normalizedEmail)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    const docId = encodeURIComponent(normalizedEmail)
    const waitlistRef = doc(db, "waitlist", docId)
    const existingDoc = await getDoc(waitlistRef)

    if (existingDoc.exists()) {
      return NextResponse.json(
        { success: false, error: "This email is already on the waitlist." },
        { status: 409 }
      )
    }

    await setDoc(waitlistRef, {
      email: normalizedEmail,
      createdAt: serverTimestamp(),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Waitlist API error:", error)
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}