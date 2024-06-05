import { HeadTop } from "./components/HeadTop";
import HeadBot from "./components/NavMenu";

export const Header = () => {
  return (
    <>
      <header className="flex flex-col bg-[--bgHeader] cursor-pointer  ">
        <HeadTop />
        <HeadBot />
      </header>
    </>
  );
};
