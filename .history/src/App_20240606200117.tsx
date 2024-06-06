import { Header } from "./Layout/Header";
import AddToCart from "./components/button";
import "./styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselContent } from "./Layout/Carousel";

function App() {
  return (
    <>
      <Header />
      <CarouselContent />

      <AddToCart />
    </>
  );
}

export default App;
