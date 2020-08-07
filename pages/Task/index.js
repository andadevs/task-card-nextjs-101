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

//#region dependencies
import { useEffect } from "react";
//#endregion
//#region component
import { TskCard } from "../../components/presentationals";
//#endregion
//#region services/hooks
import { taskHks } from "../../services/hooks";
import { taskSvc } from "../../services";
//#endregion

const { useAllTasks } = taskHks;

/**
 * @function
 * @name Task
 * @memberof Pages/Task
 * @description Functional component for Task
 * @return {COMPONENT} Task component context
 */
const Task = () => {
  const [{ allTasks }] = useAllTasks();
  return (
    <div className="pd--t--2 flex-container flex-container--wrap">
      {allTasks.map((task) => (
        <TskCard key={task.id} data={task} />
      ))}
    </div>
  );
};

export default Task;
