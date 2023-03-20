import "@/styles/globals.css";
import Footer from "components/footer";
import Navbar from "components/navbar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
