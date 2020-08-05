/**
 * @file pages/Task/index.js
 * @name Pages/Task
 * @classdesc Component for Card context
 * @memberof Pages
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 * @example
 * <Task />
 */
//#region component
import { TskCard } from "../../components/presentationals";
//#endregion

/**
 * @function
 * @name Task
 * @memberof Pages/Task
 * @description Functional component for Task
 * @return {COMPONENT} Task component context
 */
const Task = () => {
  return (
    <div>
      <h1>Task Page</h1>;
      <TskCard />
    </div>
  );
};

export default Task;
