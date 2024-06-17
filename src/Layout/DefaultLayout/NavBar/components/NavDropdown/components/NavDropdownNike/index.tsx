function NavDropdownNike() {
  return (
    <div
      id="ChildNikeShoes"
      className="w-[70%] absolute top-0 left-[372px] px-4 py-3 invisible opacity-0 group-hover/childNike:visible group-hover/childNike:opacity-[1]"
    >
      <ul className="grid grid-cols-3 gap-0">
        <li className="text-[--colorTextSub] text-[16px] font-bold">
          Nike Air
        </li>
        <li className="text-[--colorTextSub] text-[16px] font-bold">
          Jondan mid
        </li>
        <li className="text-[--colorTextSub] text-[16px] font-bold">
          Jodan high
        </li>
      </ul>
    </div>
  );
}

export default NavDropdownNike;
