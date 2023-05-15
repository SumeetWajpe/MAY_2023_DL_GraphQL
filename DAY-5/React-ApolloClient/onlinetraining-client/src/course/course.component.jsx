import { useMutation } from "@apollo/client";
import React from "react";
import { DELETE_A_COURSE } from "../graphql/mutations";
import { GET_ALL_COURSES } from "../graphql/querries";
import { Link } from "react-router-dom";

export default function Course(props) {
  const [deleteACourse, { error, data, loading }] = useMutation(
    DELETE_A_COURSE,
    {
      variables: { tobeDeletedCourseId: props.course.id },
      refetchQueries: [{ query: GET_ALL_COURSES }],
    },
  );
  // For displaying rating (icons)
  let rating = [];
  for (let index = 0; index < props.course.rating; index++) {
    rating.push(
      <i
        className="fa-solid fa-star"
        style={{ color: "orange" }}
        key={index}
      ></i>,
    );
  }
  return (
    <div className="col-md-4">
      <div className="card p-2" style={{ width: "18rem" }}>
        <Link to={`/coursedetails/${props.course.id}`}>
          <img
            src={props.course.imageUrl}
            className="card-img-top"
            alt={props.course.title}
            height="150px"
          />
        </Link>

        <div className="card-body">
          <p className="card-text">{rating}</p>
          <h5 className="card-title">{props.course.title}</h5>
          <p className="card-text">₹. {props.course.price}</p>
          <button className="btn btn-danger" onClick={() => deleteACourse()}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      <img />
    </div>
  );
}
