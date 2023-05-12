import { CourseModel } from "../models/courses.model.js";
import { TrainerModel } from "../models/trainers.model.js";
export const resolvers = {
    Query: {
        trainers: async () => await TrainerModel.find({}),
        trainer: async (_, args) => await TrainerModel.findOne({ id: +args.id }),
        courses: async () => await CourseModel.find({}),
        course: async (_, args) => await CourseModel.findOne({ id: +args.id }),
    },
    Course: {
        trainer: async (parent) => await TrainerModel.findOne({ id: +parent.trainerId }),
    },
};
