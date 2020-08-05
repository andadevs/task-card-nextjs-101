/**
 * @name Pages
 * @file index.js
 * @class Base File
 * @classdesc Main app.
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */
//#region components
import Task from "./Task";
//#endregion

/**
 * @function
 * @name Main
 * @memberof Pages
 * @type {COMPONENT}
 * @description Main component
 * @return {COMPONENTS} - A components context
 */
export default function Main() {
  return <Task />;
}
