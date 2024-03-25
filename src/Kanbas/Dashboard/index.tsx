import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import "./index.css";
import { FaArrowRightFromBracket } from "react-icons/fa6";

function Dashboard(

  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
    }
) {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h5>Add Course</h5>
      <input value={course.name} className="form-control" placeholder="Course Name"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control" placeholder="Course Number"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
      <input value={course.section} className="form-control" placeholder="Course Section"
        onChange={(e) => setCourse({ ...course, section: e.target.value })} />
      <button onClick={addNewCourse} className="btn btn-primary">
        Add
      </button>
      <button onClick={updateCourse} className="btn btn-success">
        Update
      </button>

      <h2>Published Courses</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                  style={{ height: 150 }} />
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>{course.number} {course.name} </Link>

                  <p className="card-text">Fall 2024 {course.name} {course.section}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    <FaArrowRightFromBracket className="fs-6" />
                  </Link>
                  <button onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }} className="btn btn-secondary">
                    <FaEdit className="fs-6" />
                  </button>

                  <button onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}
                    className="btn btn-danger">
                    <MdDelete className="fs-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;