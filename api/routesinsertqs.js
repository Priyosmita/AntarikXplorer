// for inserting questions

import dbConnect from "@/lib/mongoose";
import Quiz from "@/lib/models/quiz";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  await dbConnect();

  try {
    const quiz = await Quiz.create(req.body);
    return res.status(201).json({ success: true, data: quiz });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
}