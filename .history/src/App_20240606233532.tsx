import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { CarouselContent } from "./Layout/Carousel";
import Footer from "./Layout/Footer";
import { Header } from "./Layout/Header";
import "./index.css";
import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <CarouselContent />

      <Footer />
    </>
  );
}

export default App;
