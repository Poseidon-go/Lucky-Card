import { Header } from "./Layout/Header";
import AddToCart from "./components/button";
import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <div id="image" className="p-4">
        <img
          src="https://file.hstatic.net/200000525917/file/slider-2_0521f8e897684645afb606cebb3d0716_master.jpg"
          alt=""
        />
      </div>
      <AddToCart />
    </>
  );
}

export default App;
