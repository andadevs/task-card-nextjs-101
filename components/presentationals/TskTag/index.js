/**
 * @file components/presentationals/TskTag/index.js
 * @name Component/Presentational/TskTag
 * @classdesc Component for Tag context
 * @memberof Component/Presentationals
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 * @example
 * <TskTag />
 */

//#region dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//#endregion
//#region styles
import { tagStyle } from "../../../styles";
//#endregion

/**
 * @function
 * @name TskTag
 * @memberof Component/Presentational/TskTag
 * @description Functional component for Tag
 * @param {STRING} icon - tag icon
 * @param {STRING} text - tag text
 * @return {COMPONENT} card component context
 */
const TskTag = ({ icon, text }) => {
  return (
    <span className={tagStyle.tag}>
      <FontAwesomeIcon className={tagStyle.icon} icon={icon} />
      <span className={tagStyle.text}>{text}</span>
    </span>
  );
};

export default TskTag;
