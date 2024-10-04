import "../styles/globals.css";
import "../index.css";
import "../Styles/Navbar.css";
import "../Styles/Home.css";
import "../Styles/Services.css";
import "../Styles/ServiceCards.css";
import "../Styles/Features.css";

export default function App({ Component, pageProps }) {
  return <Component className="App" {...pageProps} />;
}
