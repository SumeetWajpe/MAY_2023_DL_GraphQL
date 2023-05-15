import logo from "./logo.svg";
import "./App.css";
import Listofcourses from "./listofcourses/listofcourses.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CourseDetails from "./coursedetails/coursedetails.component";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Listofcourses></Listofcourses>}></Route>
        <Route path="/coursedetails/:cid" element={<CourseDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
