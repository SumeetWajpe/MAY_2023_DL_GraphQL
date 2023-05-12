import { courseList } from "../models/courses.model.js";
import { trainerList } from "../models/trainers.model.js";
import { Course } from "../types/course.type.js";
import { CourseArgsID } from "../types/courseargs_id.type.js";
import { Trainer } from "../types/trainer.type.js";
import { TrainerArgsID } from "../types/trainerargs_id.type.js";
export const resolvers = {
  Query: {
    courses: (): Course[] => courseList,
    course: (_, args: CourseArgsID) =>
      courseList.find(course => course.id == args.id),
    trainers: () => trainerList,
    trainer: (_, args: TrainerArgsID) =>
      trainerList.find(trainer => trainer.id == args.id),
  },
  Course: {
    trainer: (parent: Course) => {
      return trainerList.find(
        (trainer: Trainer) => trainer.id == parent.trainerId,
      );
    },
  },
};
