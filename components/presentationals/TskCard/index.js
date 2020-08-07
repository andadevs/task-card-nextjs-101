/**
 * @file components/presentationals/TskCard/index.js
 * @name Component/Presentational/TskCard
 * @classdesc Component for card context
 * @memberof Component/Presentationals
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 * @example
 * <TskCard />
 */

//#region dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faBell,
  faCircle,
  faCheckCircle,
  faCamera,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
//#endregion
//#region component
import { TskTag } from "../";
//#endregion
//#region styles
import { cardStyle } from "../../../styles";
//#endregion

/**
 * @function
 * @name TskCard
 * @memberof Component/Presentational/TskCard
 * @description Functional component for card
 * @param {-} none -
 * @return {COMPONENT} card component context
 */
const TskCard = () => {
  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.header}>
        <div className={cardStyle.iconContainer}>
          <FontAwesomeIcon className={cardStyle.icon} icon={faLaptop} />
        </div>
        <div className={cardStyle.titleContainer}>
          <h1 className={cardStyle.title}>
            <span className={cardStyle.text}>Write a program</span>
          </h1>
          <TskTag icon={faBell} text="4/8/2019" />
        </div>
        <div className={cardStyle.check}>
          <FontAwesomeIcon className={cardStyle.uncheck} icon={faCircle} />
          <FontAwesomeIcon className={cardStyle.checked} icon={faCheckCircle} />
        </div>
      </div>
      <div className={cardStyle.content}>
        <div className={cardStyle.boxPlaceholder}>
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
