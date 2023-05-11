import { courseList } from "../models/courses.model.js";
export const resolvers = {
  Query: {
    courses: () => courseList,
    course: (_, args) => courseList.find(course => course.id == args.id),
  },
};
