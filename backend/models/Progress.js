// Progress schema
const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  language: { type: String, required: true },
  currentLesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
  completedLessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
  quizScores: [{ lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }, score: Number }],
});

module.exports = mongoose.model('Progress', progressSchema);
