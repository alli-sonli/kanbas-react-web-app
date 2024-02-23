import { courses } from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import "./index.css";
import { FaBars } from "react-icons/fa";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <FaBars className="fa-2"/> {course?._id} {course?.section} FA24
    </div>
  );
}
export default Courses;