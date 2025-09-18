// Lesson controller logic
exports.getAllLessons = (req, res) => {
  // Fetch all lessons logic here
  res.send('All lessons');
};
exports.getLessonById = (req, res) => {
  // Fetch lesson by ID logic here
  res.send('Lesson by ID');
};
exports.recommendNextLesson = (req, res) => {
  // Recommend next lesson logic here
  res.send('Recommended next lesson');
};
