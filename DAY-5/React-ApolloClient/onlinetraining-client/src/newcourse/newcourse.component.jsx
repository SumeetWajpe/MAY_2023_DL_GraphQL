import React from "react";
import { useMutation } from "@apollo/client";
import { CREATE_A_COURSE } from "../graphql/mutations";
export default function NewCourse() {
  const [addANewCourse, { error, data, loading }] = useMutation(
    CREATE_A_COURSE,
    {
      variables: {
        newcourse: {
          id: 4,
          title: "Angular",
          price: 5000,
          likes: 200,
          rating: 4,
          imageUrl:
            "https://uploads.toptal.io/blog/image/125395/toptal-blog-image-1518187252525-03f6db7b1c131066061024c236c7e3ff.png",
          trainerId: 1,
        },
      },
    },
  );
  return (
    <div className="row justify-content-md-center">
      <h1>New Course</h1>
      <form className="col-md-4 alert alert-secondary">
        <div className="col">
          {" "}
          <label htmlFor="txtCourseId"> Id :</label>{" "}
          <input type="number" id="txtCourseId" />
        </div>
        <div className="col">
          {" "}
          <label htmlFor="txtCourseTitle"> Title :</label>{" "}
          <input type="text" id="txtCourseTitle" />
        </div>
        <div className="col">
          <label htmlFor="txtCoursePrice"> Price :</label>{" "}
          <input type="number" id="txtCoursePrice" />
        </div>
        <div className="col">
          <label htmlFor="txtCourseLikes"> Likes :</label>{" "}
          <input type="number" id="txtCourseLikes" />
        </div>
        <div className="col">
          <label htmlFor="txtCourseRating"> Rating :</label>{" "}
          <input type="number" id="txtCourseRating" />
        </div>
        <div className="col">
          <label htmlFor="txtCourseImageUrl"> ImageUrl :</label>{" "}
          <input type="text" id="txtCourseImageUrl" />
        </div>
        <div className="col">
          <label htmlFor="txtCourseTrainerId"> TrainerId :</label>{" "}
          <input type="number" id="txtCourseTrainerId" />
        </div>
        <div className="col m-2">
          <button
            className="btn btn-success"
            onClick={e => {
              e.preventDefault();
              addANewCourse();
            }}
          >
            {" "}
            Add New Course
          </button>
        </div>
      </form>
    </div>
  );
}
