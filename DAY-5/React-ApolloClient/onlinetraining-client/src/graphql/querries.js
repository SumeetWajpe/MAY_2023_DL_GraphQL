import { gql } from "@apollo/client";

export const GET_ALL_COURSES = gql`
  query GetAllCourses {
    courses {
      id
      title
      price
      likes
      rating
      imageUrl
      trainer {
        name
        isMCT
        avatarUrl
      }
    }
  }
`;


// 2. GET_COURSE_DETAILS_TRINER_BY_ID