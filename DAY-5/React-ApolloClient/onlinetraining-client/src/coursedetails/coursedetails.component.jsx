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
  return (
    <div className="row m-2">
      <div className="col-md-9">
        <img
          src={course.imageUrl}
          className="card-img-top"
          alt={course.title}
        />
      </div>
      <div className="col-md-3 border-start border-secondary">
        <h2>{course.title}</h2>
        <div className="d-flex gap-1 align-items-center">
          <img
            src={course.trainer?.avatarUrl}
            className="rounded"
            alt={course.title}
            width="50px"
            height="50px"
          />
          <strong>{course.trainer?.name}</strong>
        </div>
        <p className="card-text">₹. {course.price}</p>
      </div>
    </div>
  );
}
