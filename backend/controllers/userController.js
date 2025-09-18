// User controller logic
exports.register = (req, res) => {
  const { name, email, password, phone, country } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  const User = require('../models/User');
  User.findOne({ email }).then(existing => {
    if (existing) return res.status(409).json({ message: 'Email already exists' });
    const user = new User({ name, email, password, phone, country });
    user.save().then(() => res.json({ message: 'User registered' })).catch(err => res.status(500).json({ message: 'Registration failed', error: err }));
  });
};
exports.login = (req, res) => {
  // Login logic here
  res.send('User logged in');
};
exports.getProfile = (req, res) => {
  const User = require('../models/User');
  User.findById(req.user.id).then(user => {
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ name: user.name, email: user.email, phone: user.phone, country: user.country, apiKey: user.apiKey });
  }).catch(err => res.status(500).json({ message: 'Error fetching profile', error: err }));
};
exports.updateProfile = (req, res) => {
  const User = require('../models/User');
  User.findByIdAndUpdate(req.user.id, req.body, { new: true }).then(user => {
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'Profile updated', user });
  }).catch(err => res.status(500).json({ message: 'Error updating profile', error: err }));
};
exports.saveProgress = (req, res) => {
  // Save progress logic here
  res.send('Progress saved');

// API Key generation
exports.generateApiKey = async (req, res) => {
  const User = require('../models/User');
  const apiKey = 'sk-' + Math.random().toString(36).substring(2, 18);
  try {
    const user = await User.findByIdAndUpdate(req.user.id, { apiKey }, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ apiKey });
  } catch (err) {
    res.status(500).json({ message: 'Error generating API key', error: err });
  }
};
};
