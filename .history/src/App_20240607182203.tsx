import Footer from "./Layout/Footer";
import { Header } from "./Layout/Header";
import "./index.css";
import "./styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainContent from "./Layout/MainContent";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
