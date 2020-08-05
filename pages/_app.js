/**
 * @name MyApp
 * @file _app.js
 * @class Base Next App file
 * @classdesc Main app.
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */

//#region dependencies
import { config } from "@fortawesome/fontawesome-svg-core";
//#endregion
//#region Components
import { TskLayout } from "../components/presentationals";
//#endregion
//#region styles
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import "../styles/_general.scss";
//#endregion

config.autoAddCss = false;

/**
 * @name MyApp
 * @memberof MyApp
 * @description MyApp component
 * @param {Component} Component - Component rendered
 * @param {Object} pageProps - Component props
 * @return {PROMISE/MODEL} - A promise with The city model just created
 */
function MyApp({ Component, pageProps }) {
  return (
    <TskLayout>
      <Component {...pageProps} />
    </TskLayout>
  );
}

export default MyApp;
