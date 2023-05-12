import { CourseModel } from "../models/courses.model.js";
import { TrainerModel } from "../models/trainers.model.js";
export const resolvers = {
    Query: {
        trainers: async () => await TrainerModel.find({}),
        trainer: async (_, args) => await TrainerModel.findOne({ id: args.id }),
        courses: async () => await CourseModel.find({}),
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
