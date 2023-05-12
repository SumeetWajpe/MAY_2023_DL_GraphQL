import mongoose, { Schema } from "mongoose";
const TrainerSchema = new Schema({
    id: String,
    name: String,
    isMCT: Boolean,
    followers: Number,
    avatarUrl: String,
});
export let TrainerModel = mongoose.model("trainer", TrainerSchema);
