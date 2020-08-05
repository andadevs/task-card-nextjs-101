import Head from "next/head";
import TskNav from "../TskNav";
import TskFooter from "../TskFooter";
import styles from "../../../styles/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Tsk-Card-Nxt-101</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.container}>
          <TskNav />
          <div className={styles.content}>
            <div>{children}</div>
            <TskFooter />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
