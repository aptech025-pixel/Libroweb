// Lesson schema
const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  language: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  quiz: [{ question: String, answer: String }],
});

module.exports = mongoose.model('Lesson', lessonSchema);
