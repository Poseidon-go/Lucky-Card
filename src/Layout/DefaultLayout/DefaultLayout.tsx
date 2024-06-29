import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

interface DefaultLayout {
  children: JSX.Element;
}
function DefaultLayout({ children }: DefaultLayout) {
  return (
    <div id="DefaultLayout">
      <Header />
      <NavBar />
      <div className="mt-1 modal">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
