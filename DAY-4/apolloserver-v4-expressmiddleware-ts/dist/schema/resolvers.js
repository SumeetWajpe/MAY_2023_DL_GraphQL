import { TrainerModel } from "../models/trainers.model.js";
export const resolvers = {
    Query: {
        trainers: async () => await TrainerModel.find({}), // Select * from Trainer
    },
};
