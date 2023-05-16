import { CourseModel } from "../models/courses.model.js";
import { TrainerModel } from "../models/trainers.model.js";
export const resolvers = {
    Query: {
        trainers: async () => await TrainerModel.find({}),
        trainer: async (_, args) => await TrainerModel.findOne({ id: args.id }),
        courses: async (_, { limit, offset }) => await CourseModel.find({}).skip(offset).limit(limit).sort({ title: 1 }),
        course: async (_, args) => await CourseModel.findOne({ id: args.id }),
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
            }
            catch (error) {
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
        createCourse: async (_, { newcourse }) => {
            // insert a new course in db
            try {
                console.log(newcourse);
                let newCourseToBeAdded = new CourseModel({
                    ...newcourse,
                });
                await newCourseToBeAdded.save();
                return newCourseToBeAdded;
            }
            catch (error) {
                console.log(error);
                let theError = {
                    msg: error.message,
                };
                return theError;
            }
        },
    },
    Course: {
        trainer: async (parent) => await TrainerModel.findOne({ id: parent.trainerId }),
    },
};
// Enhanced Object Literal Syntax
// let title = "Deloitte";
// let city = "Pune";
// // let company = { title: title, city: city };
// let company = { title, city };
