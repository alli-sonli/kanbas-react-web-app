import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import "./index.css";
import { FaBars, FaChevronRight, FaGlasses } from "react-icons/fa";
import CourseNavigation from "./Navigation";
import { MdOutlineChevronRight } from "react-icons/md";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";


function Courses() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();
    return (
        <div>
            <div className="float-container">
                <div className="float-child-1">
                    <FaBars className="fs-4" />
                </div>
                <div className="float-child-2">
                    {course?._id} {course?.section} FA24<MdOutlineChevronRight className="fs-4" />
                    {pathname.substring((pathname.lastIndexOf("/")) + 1)}
                </div>
                <div className="float-child-3">
                    <button className="button"><FaGlasses className="fs-10" /> Student View</button>
                </div>
            </div>
            <div>
                <CourseNavigation />
            </div>
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{ left: "320px", top: "50px" }} >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>

        </div>
    );
}
export default Courses;