const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  username: { type: String, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  cost: { type: Number, required: true },
  society: { type: Number, required: true },
  environment: { type: Number, required: true },
  device: { type: String, required: true },
  location: { type: String, required: true },
  provider: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },

}, {
  timestamps: true,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;