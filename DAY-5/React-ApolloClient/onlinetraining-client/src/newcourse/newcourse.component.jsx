import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_A_COURSE } from "../graphql/mutations";
import { GET_ALL_COURSES, GET_ALL_TRAINERS } from "../graphql/querries";
export default function NewCourse() {
  const [addANewCourse, { error, data, loading }] = useMutation(
    CREATE_A_COURSE,
    { refetchQueries: [{ query: GET_ALL_COURSES }] },
  );
  let {
    error: error_trainers,
    loading: loading_trainers,
    data: data_trainers,
  } = useQuery(GET_ALL_TRAINERS);
  const navigate = useNavigate();
  const [courseToBeAdded, setcourseToBeAdded] = useState({});
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    if (!loading_trainers) setTrainers(data_trainers);
  }, [data, data_trainers]);
  return (
    <div className="row justify-content-md-center">
      <h1>New Course</h1>
      <form className="col-md-4 alert alert-secondary">
        <div className="col">
          {" "}
          <label htmlFor="txtCourseId"> Id :</label>{" "}
          <input
            type="number"
            id="txtCourseId"
            className="form-control"
            onInput={e =>
              setcourseToBeAdded({ ...courseToBeAdded, id: +e.target.value })
            }
          />
        </div>
        <div className="col">
          {" "}
          <label htmlFor="txtCourseTitle"> Title :</label>{" "}
          <input
            type="text"
            id="txtCourseTitle"
            className="form-control"
            onInput={e =>
              setcourseToBeAdded({ ...courseToBeAdded, title: e.target.value })
            }
          />
        </div>
        <div className="col">
          <label htmlFor="txtCoursePrice"> Price :</label>{" "}
          <input
            type="number"
            id="txtCoursePrice"
            className="form-control"
            onInput={e =>
              setcourseToBeAdded({ ...courseToBeAdded, price: +e.target.value })
            }
          />
        </div>
        <div className="col">
          <label htmlFor="txtCourseLikes"> Likes :</label>{" "}
          <input
            type="number"
            id="txtCourseLikes"
            className="form-control"
            onInput={e =>
              setcourseToBeAdded({ ...courseToBeAdded, likes: +e.target.value })
            }
          />
        </div>
        <div className="col">
          <label htmlFor="txtCourseRating"> Rating :</label>{" "}
          <input
            type="number"
            id="txtCourseRating"
            className="form-control"
            onInput={e =>
              setcourseToBeAdded({
                ...courseToBeAdded,
                rating: +e.target.value,
              })
            }
          />
        </div>
        <div className="col">
          <label htmlFor="txtCourseImageUrl"> ImageUrl :</label>{" "}
          <input
            type="text"
            id="txtCourseImageUrl"
            className="form-control"
            onInput={e =>
              setcourseToBeAdded({
                ...courseToBeAdded,
                imageUrl: e.target.value,
              })
            }
          />
        </div>
        <div className="col">
          {/* <label htmlFor="txtCourseTrainerId"> TrainerId :</label>{" "} */}
          {/* <input
            type="number"
            id="txtCourseTrainerId"
            onInput={e =>
              setcourseToBeAdded({
                ...courseToBeAdded,
                trainerId: +e.target.value,
              })
            }
          /> */}
          <label htmlFor="drpTrainers"> Trainer :</label>{" "}
          <select id="drpTrainers" className="form-control"
          onChange={(e)=>{
            setcourseToBeAdded({...courseToBeAdded,trainerId:+e.target.value})
          }}
          >
            <option>--Select Trainer--</option>
            {loading_trainers === false
              ? data_trainers?.trainers?.map(t => (
                  <option value={t.id} key={t.id}>
                    {t.name}
                  </option>
                ))
              : ""}
          </select>
        </div>
        <div className="col m-2">
          <button
            className="btn btn-success"
            onClick={e => {
              e.preventDefault();
              addANewCourse({
                variables: {
                  newcourse: courseToBeAdded,
                },
              }).then(() => navigate("/"));
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
