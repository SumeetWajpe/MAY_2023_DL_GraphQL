import mongoose, { Schema } from "mongoose";
const CoursesSchema = new Schema({
    id: Number,
    title: String,
    price: Number,
    rating: Number,
    likes: Number,
    imageUrl: String,
    trainerId: String,
});
export let CourseModel = mongoose.model("courses", CoursesSchema);
