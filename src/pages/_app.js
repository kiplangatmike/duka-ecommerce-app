import "@/styles/globals.css";
import Footer from "components/footer";
import Navbar from "components/navbar";
// import '../../components/burger/burger.module.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
