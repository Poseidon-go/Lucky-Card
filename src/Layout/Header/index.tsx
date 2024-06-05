import { HeadTop } from "./components/HeadTop";
import NavMenu from "./components/NavMenu";

export const Header = () => {
  return (
    <>
      <header className="flex flex-col bg-[--bgHeader] cursor-pointer  ">
        <HeadTop />
        <NavMenu />
      </header>
    </>
  );
};
