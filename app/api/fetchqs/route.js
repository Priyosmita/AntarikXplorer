import dbConnect from "@/lib/mongoose";
import schema from "@/models/schema";
import { NextResponse } from "next/server";

export async function GET(req) {
  await dbConnect();

  try {
    const { searchParams } = new URL(req.url);
    const difficulty = searchParams.get("difficulty");

    const filter = difficulty ? { difficulty } : {};
    const quizzes = await schema.find(filter);

    return NextResponse.json({ success: true, data: quizzes }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}