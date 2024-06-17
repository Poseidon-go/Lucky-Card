import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./Layout";
import HomePage from "./pages/HomePage";
import "./index.css";
import "./styles/global.css";
function App() {
  return (
    <>
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
                  <>Skeaer</>
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
                  <>perfume</>
                </>
              }
            />
          }
        />
      </Routes>
      {/* <Header />
      <MainContent />
      <Footer /> */}
    </>
  );
}

export default App;
