const mongoose = require("mongoose");
const { Schema } = mongoose;

const activitySchema= new Schema({
    activity: String,
    "description": "string",
    "activityType": "string",
    "duration": "string",
    "date": "string"
})
const ActivityModel = mongoose.model('Activity', activitySchema);
module.exports = ActivityModel