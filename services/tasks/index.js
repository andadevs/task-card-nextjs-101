/**
 * @name Services/Tasks
 * @memberof Services
 * @type {Object}
 * @return {Object} List of cities services
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */

//#region lib
import httpSvc from "axios";
//#endregion
//#region constant
import { taskEnd } from "../config/urlEndp";
//#endregion

// TODO: convert this file to ES class context, in order to add scalability and other feature benefits
/**
 * @name all
 * @memberof Services/Tasks
 * @type {ARRAY}
 * @description get all taks from moch data
 * @return {ARRAY} - All tasks
 */
export const all = async () => await httpSvc.get(taskEnd.all);
