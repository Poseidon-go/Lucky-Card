import { SlArrowUp } from "react-icons/sl";

function ScrollButtonTop() {
  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div
        id="scroll-button"
        className="gird place-items-center p-3 border border-[#111]  bg-[#fff] cursor-pointer fixed bottom-14 right-14 animate-bounce"
        onClick={handleScrollTop}
      >
        <SlArrowUp className="text-[#000] font-bold text-[20px]" />
      </div>
    </>
  );
}

export default ScrollButtonTop;
