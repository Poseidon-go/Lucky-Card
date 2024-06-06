import { Header } from "./Layout/Header";
import AddToCart from "./components/button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselContent } from "./Layout/Carousel";
import Footer from "./Layout/Footer";
import "./styles/global.css";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <CarouselContent />

      <AddToCart />
      <Footer />
    </>
  );
}

export default App;
