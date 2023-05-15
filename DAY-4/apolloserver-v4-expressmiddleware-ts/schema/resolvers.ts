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
  Mutation: {
    createTrainer: async (_, { id, name, isMCT, followers, avatarUrl }) => {
      // insert a new trainer in db
      try {
        let newTrainer = new TrainerModel({
          id,
          name,
          isMCT,
          followers,
          avatarUrl,
        });
        await newTrainer.save();
        return newTrainer;
      } catch (error) {
        console.log(error);
        let theError = {
          msg: error.message,
        };
        return theError;
      }
    },
    deleteCourse: async (_, { id }) => {
      await CourseModel.deleteOne({ id });
      return id;
    },
  },
  Course: {
    trainer: async (parent: Course) =>
      await TrainerModel.findOne({ id: parent.trainerId }),
  },
};

// Enhanced Object Literal Syntax
// let title = "Deloitte";
// let city = "Pune";

// // let company = { title: title, city: city };
// let company = { title, city };
