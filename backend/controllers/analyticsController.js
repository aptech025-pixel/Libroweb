// Analytics controller for progress and achievements
exports.getUserAnalytics = (req, res) => {
  // Return user progress, streaks, achievements
  res.send({ streak: 5, achievements: ['Starter', 'Consistent'], progress: 80 });
};
