import { gql } from "@apollo/client";

export const DELETE_A_COURSE = gql`
  mutation DeleteACourse($tobeDeletedCourseId: ID!) {
    deleteCourse(id: $tobeDeletedCourseId)
  }
`;
