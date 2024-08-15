import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./Layout";
import "./index.css";
import HomePage from "./pages/HomePage";
import PerfumeHome from "./pages/PerfumeHome";
import "./styles/global.css";
import ShoesHome from "./pages/ShoesPage";
function App() {
  return (
    <div id="app">
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout
              children={
                <>
                  <HomePage />
                </>
              }
            />
          }
        />
        <Route
          path="/sneaker"
          element={
            <DefaultLayout
              children={
                <>
                  <ShoesHome />
                </>
              }
            />
          }
        />
        <Route
          path="/perfume"
          element={
            <DefaultLayout
              children={
                <>
                  <PerfumeHome />
                </>
              }
            />
          }
        />
        <Route
          path="/info"
          element={
            <DefaultLayout
              children={
                <>
                  <PerfumeHome />
                </>
              }
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
