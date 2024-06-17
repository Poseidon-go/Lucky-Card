import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

interface DefaultLayout {
  children: JSX.Element;
}
function DefaultLayout({ children }: DefaultLayout) {
  return (
    <>
      <Header />
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default DefaultLayout;
