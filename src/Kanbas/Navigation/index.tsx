import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaTv, FaRegQuestionCircle } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import logo from "./logo.png"

function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2 account" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-3" />},
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox", icon: <FaInbox className="fs-2" />},
    { label: "History", icon: <FaRegClock className="fs-2" />},
    { label: "Studio", icon: <FaTv className="fs-2" />},
    { label: "Commons", icon: <FaArrowUpRightFromSquare className="fs-3"/>}, 
    { label: "Help", icon: <FaRegQuestionCircle className="fs-2" />}
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <img src= {logo} className = "logo"></img>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : "wd-not-active"}>
          <Link to={`/Kanbas/${link.label}`}>
          <div className="link-icon">{link.icon}</div>
          <div className="link-name">{link.label}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;