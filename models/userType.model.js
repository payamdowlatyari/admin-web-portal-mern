const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userTypeSchema = new Schema({
    usertype: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,
}
);

const UserType = mongoose.model('userType', userTypeSchema);
module.exports = UserType;