//#region  dependencies
import { useState, useEffect } from "react";
//#endregion
//#region services
import { all } from "../tasks";
//#endregion

/**
 * @function
 * @name useAllTasks
 * @memberof services/hooks
 * @description Hook to fetch all tasks from Task services
 * @return {OBJECT} structure for store context.
 */
export const useAllTasks = () => {
  const [data, setData] = useState([]);

  //TODO:
  // - implement dispatcher state http handler service
  // - iplement loading bar for calling request
  useEffect(() => {
    try {
      all().then(
        (resp) => {
          setData(resp.data);
        },
        (err) => {
          console.error("error from hhok", err);
        }
      );
    } catch (err) {}
  }, []);
  return [{ allTasks: data }];
};
