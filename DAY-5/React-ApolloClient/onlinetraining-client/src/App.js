import logo from "./logo.svg";
import "./App.css";
import Listofcourses from "./listofcourses/listofcourses.component";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CourseDetails from "./coursedetails/coursedetails.component";
import NewCourse from "./newcourse/newcourse.component";
function App() {
  return (
    <BrowserRouter>
      <nav className="navbar  navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Online shopping
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/newcourse">
                  New Course
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Listofcourses></Listofcourses>}></Route>
        <Route path="/coursedetails/:cid" element={<CourseDetails />}></Route>
        <Route path="/newcourse" element={<NewCourse />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
