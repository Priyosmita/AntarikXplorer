// for fetch questions

import dbConnect from "@/lib/mongoose";
import Quiz from "@/lib/models/quiz";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  await dbConnect();

  const { difficulty } = req.query;

  try {
    const filter = difficulty ? { difficulty } : {};
    const quizzes = await Quiz.find(filter);
    return res.status(200).json({ success: true, data: quizzes });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}