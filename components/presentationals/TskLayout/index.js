/**
 * @file components/presentationals/TskLayout/index.js
 * @name Component/Presentational/TskLayout
 * @classdesc Component for Layout context
 * @memberof Component/Presentationals
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 * @example
 * <TskLayout />
 */

//#region dependencies
import Head from "next/head";
//#endregion
//#region components
import { TskNav } from "../";
//#endregion
//#region styles
import { layoutStyle } from "../../../styles";
//#endregion

/**
 * @function
 * @name TskLayout
 * @memberof Component/Presentational/TskLayout
 * @description Functional component for layout
 * @param {OBJECT} children Context for each partial view
 * @return {COMPONENT} layout component context
 */
const TskLayout = ({ children }) => {
  return (
    <div className={layoutStyle.layout}>
      <Head>
        <title>Tsk-Card-Nxt-101</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={layoutStyle.container}>
          <TskNav />
          <div className={layoutStyle.content}>{children}</div>
        </div>
      </main>
    </div>
  );
};

export default TskLayout;
