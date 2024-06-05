import { HeadTop } from "../HeadTop";
import NavMenu from ".";

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
