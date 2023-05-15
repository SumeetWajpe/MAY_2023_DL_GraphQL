import React from "react";

export default function Course(props) {
  let rating = [];
  for (let index = 0; index < props.course.rating; index++) {
    rating.push(
      <i className="fa-solid fa-star" style={{ color: "orange" }}></i>,
    );
  }
  return (
    <div className="col-md-4">
      <div className="card p-2" style={{ width: "18rem" }}>
        <img
          src={props.course.imageUrl}
          classclassName="card-img-top"
          alt={props.course.title}
          height="150px"
        />

        <div classclassName="card-body">
          <p classclassName="card-text">{rating}</p>
          <h5 classclassName="card-title">{props.course.title}</h5>
          <p classclassName="card-text">₹. {props.course.price}</p>
          <button className="btn btn-danger">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      <img />
    </div>
  );
}
