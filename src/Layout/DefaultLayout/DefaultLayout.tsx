import Footer from './Footer';
import Header from './Header';
import NavBar from './NavBar';

interface DefaultLayout {
  children: JSX.Element;
}
function DefaultLayout({children}: DefaultLayout) {
  return (
    <div id="DefaultLayout">
      <div className="fixed top-0 left-0 w-full z-50 ">
        <Header />
        <NavBar />
      </div>
      <div className="mt-[102px]">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
