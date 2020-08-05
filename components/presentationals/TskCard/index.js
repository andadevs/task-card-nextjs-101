import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faBell,
  faCircle,
  faCheckCircle,
  faCamera,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const TskCard = () => {
  return (
    <div className="tsk-card">
      <div className="tsk-crd-header">
        <div>
          <FontAwesomeIcon icon={faLaptop} />
        </div>
        <div>
          <h1>Write a program</h1>
          <span>
            <FontAwesomeIcon className="tsk-icon" icon={faBell} />
            <span>4/8/2019</span>
          </span>
        </div>
        <div>
          <FontAwesomeIcon className="tsk-icon" icon={faCircle} />
          <FontAwesomeIcon className="tsk-icon" icon={faCheckCircle} />
        </div>
      </div>
      <div className="tsk-crd-content">
        <div className="tsk-box tsk-box--placeholder">
          <FontAwesomeIcon className="tsk-icon" icon={faCamera} />
        </div>
        <div className="tsk-box tsk-box--default">
          <FontAwesomeIcon className="tsk-icon" icon={faTimes} />
        </div>
      </div>
      <div className="tsk-crd-footer"></div>
    </div>
  );
};

export default TskCard;
