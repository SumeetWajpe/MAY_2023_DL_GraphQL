import { courseList } from "../models/courses.model.js";
import { trainerList } from "../models/trainers.model.js";
export const resolvers = {
  Query: {
    courses: () => courseList,
    course: (_, { id }) => courseList.find(course => course.id == id),
    trainers: () => trainerList,
    trainer: (_, args) => trainerList.find(trainer => trainer.id == args.id),
  },
  Course: {
    trainer: parent => {
      console.log(parent);
      return trainerList.find(trainer => trainer.id == parent.trainerId);
    },
  },
};
