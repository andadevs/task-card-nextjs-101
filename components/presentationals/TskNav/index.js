/**
 * @file components/presentationals/TskNav/index.js
 * @name Component/Presentational/TskNav
 * @classdesc Component for Nav context
 * @memberof Component/Presentationals
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 * @example
 * <TskNav />
 */
//#region dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";
//#endregion
//#region styles
import styles from "../../../styles/Nav.module.scss";
//#endregion

/**
 * @function
 * @name TskNav
 * @memberof Component/Presentational/TskNav
 * @description Functional component for Nav
 * @param {-} none
 * @return {COMPONENT} nav component context
 */
const TskNav = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <FontAwesomeIcon className="tsk-icon" icon={faTh} />
        </li>
      </ul>
    </div>
  );
};

export default TskNav;
