import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "..";
import { GET_ALL_COURSES } from "../graphql/querries";

export default function CourseDetails() {
  let [course, setCourse] = useState({});
  const { cid } = useParams();
  useEffect(() => {
    //fetch data from cache
    const { courses } = client.readQuery({ query: GET_ALL_COURSES }); //any previously executed query
    let currentCourse = courses.find(c => c.id == cid);
    setCourse(currentCourse);
  });
  return <div>Course Details for {course.title}</div>;
}
