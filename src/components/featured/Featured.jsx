import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Dropdown from 'react-bootstrap/Dropdown';


const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h5 className="title">Sales Analytics</h5>
        <Dropdown className="dmm">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Monthly
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        <MoreVertIcon fontSize="small" />
      </div>

    </div>
  );
};

export default Featured;