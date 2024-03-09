const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({


    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: admin
    },


})
const Team = mongoose.model("Team", teamSchema )
module.exports = Team