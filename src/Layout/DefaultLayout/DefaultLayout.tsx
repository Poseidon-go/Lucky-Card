import ScrollButton from "../../components/ScrollButton";
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
      <div className="mt-1 modal bg-[#F5F5F5]">{children}</div>
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default DefaultLayout;
