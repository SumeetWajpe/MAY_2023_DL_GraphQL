import { CourseModel } from "../models/courses.model.js";
import { TrainerModel } from "../models/trainers.model.js";
import { Course } from "../types/course.type.js";
import { CourseArgsID } from "../types/courseargs_id.type.js";
import { TrainerArgsID } from "../types/trainerargs_id.type.js";

export const resolvers = {
  Query: {
    trainers: async () => await TrainerModel.find({}), // select * from
    trainer: async (_, args: TrainerArgsID) =>
      await TrainerModel.findOne({ id: args.id }),
    courses: async () => await CourseModel.find({}),
    course: async (_, args: CourseArgsID) =>
      await CourseModel.findOne({ id: args.id }),
  },
  Course: {
    trainer: async (parent: Course) =>
      await TrainerModel.findOne({ id: parent.trainerId }),
  },
};
