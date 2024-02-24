import { FaFileImport, FaRegBell } from "react-icons/fa";
import ModuleList from "../Modules/List";
import "./index.css";
import { CiShare1 } from "react-icons/ci";
import { BsCrosshair } from "react-icons/bs";
import { IoBarChartSharp } from "react-icons/io5";
import { CiBullhorn } from "react-icons/ci";
import { FaCircleExclamation } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";


function Home() {
    return (
        <div className="float-container">
            <hr />
            <div className="float-child1">
                <ModuleList />
            </div>
            <div className="float-child2">
                <button className="status-button"><FaFileImport className="fs-10" /> Import Existing
                    Content</button>
                <button className="status-button"><CiShare1 className="fs-10" /> Import From
                    Commons</button>
                <button className="status-button"><BsCrosshair className="fs-10" /> Choose
                    Home Page</button>
                <button className="status-button"><IoBarChartSharp className="fs-10" /> View Course
                    Stream</button>
                <button className="status-button"><CiBullhorn className="fs-10" /> New
                    Announcement</button>
                <button className="status-button"><IoBarChartSharp className="fs-10" /> New
                    Analytics</button>
                <button className="status-button"><FaRegBell className="fs-10" /> View Course
                    Notifications</button>

                <br />
                <br/>
                <p className="bold-text">To Do</p>
                <hr className="horizontal" />

                <FaCircleExclamation className="fs-10" color="brown"/> <a className= "assignment">Grade A1 - ENV + HTML</a>

                <span className="float-end"><IoIosClose className="fs-10" color="grey"/></span>
                
                <p className="points">&emsp;100 points <LuDot className="fs-10" color="grey"/> Sep 18 at 11:59pm</p>
                <p className="bold-text">Coming Up</p>
                <hr className="horizontal" />
                <CiCalendar className="fs-10"/> <a className= "assignment">Lecture</a>
                    <p className="points">&emsp;CS4550.12631.202410<br/>&emsp;Sep 11 at 11:45am</p>
                    <CiCalendar className="fs-10"/> <a className= "assignment">CS5610 06 SP23 Lecture</a>
                    <p className="points">&emsp;CS4550.12631.202410<br/>&emsp;Sep 11 at 6pm</p>
            </div>

        </div>
    );
}
export default Home;