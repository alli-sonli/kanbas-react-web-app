import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { FaTrash } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();

    return (
        <>
            <div className="parent">
                <div className="child">
                    <input value={module.name}
                        className="form-control"
                        onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
                    }
                    />
                    <textarea value={module.description}
                        className="form-control"
                        onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
                    }
                    />
                    <button className="btn btn-danger" onClick={() => dispatch(addModule({ ...module, course: courseId }))}> <FaPlus className="fs-10" /> Module</button>
                    <button onClick={() => dispatch(updateModule(module))} className="btn btn-success">
                        Update
                    </button>

                </div>
                <div className="child">
                    {<span className="float-end">
                        <button className="button">Collapse All</button>
                        <button className="button">View Progress</button>
                        <button className="button"><i className="fa fa-check-circle text-success"></i> Publish All</button>
                        <button className="button"><HiMiniEllipsisVertical className="fs-10" />&nbsp;</button>
                    </span>}
                </div>
            </div>
            <hr />
            <ul className="list-group wd-modules">
                {moduleList.filter((module) => module.course === courseId).map((module, index) => (
                    <li key={index}
                        className="list-group-item">
                        <div>
                            <FaEllipsisV className="me-2" />
                            {module.name}
                            <span className="float-end">
                                <button
                                    onClick={() => dispatch(setModule(module))}>
                                    <MdEdit className="fs-10"/>
                                </button>
                                &nbsp;
                                <button
                                    onClick={() => dispatch(deleteModule(module._id))}>
                                    <FaTrash className="fs-10" />
                                </button>
                                &nbsp;
                                <FaCheckCircle className="text-success" />
                                <FaPlusCircle className="ms-2" />
                                <FaEllipsisV className="ms-2" />
                            </span>
                        </div>
                        <div className="description">
                            &nbsp;{module.description}
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ModuleList;