import { courseList } from "../models/courses.model.js";
import { trainerList } from "../models/trainers.model.js";
import { Course } from "../types/course.type.js";
export const resolvers = {
  Query: {
    courses: () => courseList,
  },
  Course: {
    trainer: (parent:Course) => {
      console.log(parent);
      return trainerList.find(trainer => trainer.id == parent.trainerId);
    },
  },
};
