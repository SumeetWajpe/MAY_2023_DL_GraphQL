import { TrainerModel } from "../models/trainers.model.js";
import { Course } from "../types/course.type.js";
import { CourseArgsID } from "../types/courseargs_id.type.js";
import { Trainer } from "../types/trainer.type.js";
import { TrainerArgsID } from "../types/trainerargs_id.type.js";
export const resolvers = {
  Query: {
    trainers: async () => await TrainerModel.find({}), // Select * from Trainer
  },
};
