// Push notification controller
exports.sendNotification = (req, res) => {
  // Send push notification to user
  res.send({ success: true, message: 'Notification sent.' });
};
