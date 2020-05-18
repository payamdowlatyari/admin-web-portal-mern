const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const preferenceSchema = new Schema({
    optimization: {
        type: String,
        required: true
    },
    percentage: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,
}
);

const Preference = mongoose.model('preference', preferenceSchema);
module.exports = Preference;