import mongoose, { Schema } from "mongoose";

const TrainerSchema = new Schema({
  id: Number,
  name: String,
  isMCT: Boolean,
  followers: Number,
  avatarUrl: String,
});

export let TrainerModel = mongoose.model("trainer", TrainerSchema);
