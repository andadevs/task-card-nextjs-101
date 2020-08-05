import TskLayout from "../components/presentationals/TskLayout";
function MyApp({ Component, pageProps }) {
  return (
    <TskLayout>
      <Component {...pageProps} />
    </TskLayout>
  );
}

export default MyApp;
