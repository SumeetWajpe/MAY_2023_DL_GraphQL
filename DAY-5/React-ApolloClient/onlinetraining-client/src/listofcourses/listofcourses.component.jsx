import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_ALL_COURSES } from "../graphql/querries";

export default function Listofcourses() {
  // query -> useQuery(ourgraphqlquery) -> {error,loading,data}
  // state -> initial state value, method to update the state

  let { error, loading, data } = useQuery(GET_ALL_COURSES);
  let [courses, setCourses] = useState([]);

  useEffect(() => {
    if (!loading) setCourses(data.courses);
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return <div>Total Courses : {courses.length}</div>;
}
