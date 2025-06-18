// difficulty, questions, answers, options

// lib/models/quiz.js

import mongoose from "mongoose";

// Avoid re-declaring model during hot reloads in dev
const QuizSchema = new mongoose.Schema({
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: true,
  },
  question: {
    type: String,
    required: true,
    trim: true,
  },
  options: {
    type: [String],
    validate: {
      validator: function (val) {
        return val.length === 4;
      },
      message: "Exactly 4 options are required.",
    },
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
    validate: {
      validator: function (val) {
        return this.options.includes(val);
      },
      message: "Correct answer must be one of the options.",
    },
  },
}, { timestamps: true });

export default mongoose.models.Quiz || mongoose.model("Quiz", QuizSchema);