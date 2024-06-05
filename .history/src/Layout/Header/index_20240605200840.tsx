import { HeadTop } from "./components/HeadTop";

export const Header = () => {
  return (
    <>
      <header className="flex flex-col bg-[--bgHeader] cursor-pointer  ">
        <HeadTop />
      </header>
    </>
  );
};
