import TskLayout from "../components/presentationals/TskLayout";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import "../styles/_general.scss";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <TskLayout>
      <Component {...pageProps} />
    </TskLayout>
  );
}

export default MyApp;
