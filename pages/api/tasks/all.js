//#region mock data
import { tasksMck } from "../../../mock";
//#endregion

export default (req, res) => {
  res.statusCode = 200;
  res.json(tasksMck);
};
