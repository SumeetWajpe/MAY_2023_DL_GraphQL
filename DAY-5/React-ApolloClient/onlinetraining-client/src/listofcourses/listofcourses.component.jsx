import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_ALL_COURSES } from "../graphql/querries";
import Course from "../course/course.component";

export default function Listofcourses() {
  // query -> useQuery(ourgraphqlquery) -> {error,loading,data}
  // state -> initial state value, method to update the state

  const PAGE_SIZE = 4;

  const [page, setPage] = useState(0);

  let { error, loading, data } = useQuery(GET_ALL_COURSES, {
    variables: {
      limit: PAGE_SIZE,
      offset: PAGE_SIZE * page,
    },
  });
  let [courses, setCourses] = useState([]);

  useEffect(() => {
    if (!loading) setCourses(data.courses);
  }, [data]);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div className="row">
      {courses.map(course => (
        <Course course={course} key={course.id}></Course>
      ))}
    </div>
  );
}
