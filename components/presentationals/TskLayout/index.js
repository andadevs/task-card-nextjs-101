import Head from "next/head";
import TskHeader from "../TskHeader";
import TskFooter from "../TskFooter";
const Layout = ({ children }) => {
  return (
    <div className="tsk-layout">
      <Head>
        <title>Tsk-Card-Nxt-101</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TskHeader />
        <div>{children}</div>
        <TskFooter />
      </main>
    </div>
  );
};

export default Layout;
