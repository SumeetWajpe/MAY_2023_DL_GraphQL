import { courseList } from "../models/courses.model.js";
import { trainerList } from "../models/trainers.model.js";
export const resolvers = {
    Query: {
        courses: () => courseList,
    },
    Course: {
        trainer: (parent) => {
            console.log(parent);
            return trainerList.find(trainer => trainer.id == parent.trainerId);
        },
    },
};
