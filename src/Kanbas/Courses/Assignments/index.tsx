import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css"
import { RiNewspaperLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { HiEllipsisVertical } from "react-icons/hi2";


function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
    {<div><input id="assignment-names" placeholder="Search for Assignments" />
    <button className="button1"><GoPlus className="fs-10"/>Group</button>
    <button className="button-red"><GoPlus className="fs-10"/>Assignment</button>
    <button className="button1"><HiEllipsisVertical className="fs-10"/></button></div>}
    <hr/>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
                <button className="percent-button">40% of Total</button>
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <RiNewspaperLine className="fs-7" color="green"/>&nbsp;
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className = "link">{assignment.title}</Link>
                   <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                  <div className="parent">
                   <div className="red-tiny-text"> Multiple Modules</div>
                   <div className="tiny-text">&nbsp;| Due Date | 100 points</div>
                   </div>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;