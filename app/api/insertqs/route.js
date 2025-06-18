// for inserting questions

import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import schema from "@/models/schema";

export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json();
    const quiz = await schema.create(body);
    return NextResponse.json({ success: true, data: quiz }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}