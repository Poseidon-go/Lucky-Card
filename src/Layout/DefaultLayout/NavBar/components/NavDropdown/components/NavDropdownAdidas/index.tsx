import './index.css';
function NavDropdownAdidas() {
  return (
    <div
      id="ChildAdidasShoes"
      className="w-[70%] absolute after:absolute after:top-[14px] after:left-[-11px] after:content-[''] after:block  after:w-10 after:h-10  top-0 left-[372px] px-4 py-3 hidden group-hover/childAdidas:block "
    >
      <ul className="grid grid-cols-4 gap-0">
        <li className="text-[--colorTextSub] text-[16px]">
          <span className="font-bold text-inherit hover:text-[--colorshophover]">
            Adidas Original
          </span>
          <ul className="py-3 text-[14px] font-normal">
            <li className="hover:text-[--colorshophover]">Stan Smith</li>
            <li className="hover:text-[--colorshophover]">SuperStar</li>
            <li className="hover:text-[--colorshophover]">Prophere</li>
            <li className="hover:text-[--colorshophover]">Falcon</li>
            <li className="hover:text-[--colorshophover]">Continental 80s</li>
          </ul>
        </li>
        <li className="text-[--colorTextSub] text-[16px]">
          <span className="font-bold text-inherit hover:text-[--colorshophover]">
            Adidas UltraBoost
          </span>
          <ul className="py-3 text-[14px] font-normal">
            <li className="hover:text-[--colorshophover]">Giày Adidas UltraBoost 22</li>
            <li className="hover:text-[--colorshophover]">UltraBoost 2021</li>
            <li className="hover:text-[--colorshophover]">UltraBoost 2020</li>
            <li className="hover:text-[--colorshophover]">UltraBoost 2019</li>
          </ul>
        </li>
        <li className="text-[--colorTextSub] text-[16px]">
          <span className="font-bold text-inherit hover:text-[--colorshophover]">
            Yeezy Boost
          </span>
          <ul className="py-3 text-[14px] font-normal">
            <li className="hover:text-[--colorshophover]">Yeezy Boost</li>
            <li className="hover:text-[--colorshophover]">Yeezy 350</li>
            <li className="hover:text-[--colorshophover]">Yeezy 380</li>
            <li className="hover:text-[--colorshophover]">Yeezy 500</li>
            <li className="hover:text-[--colorshophover]">Yeezy 700</li>
          </ul>
        </li>
        <li className="text-[--colorTextSub] text-[16px]">
          <span className="font-bold text-inherit hover:text-[--colorshophover]">
            Adidas NMD
          </span>
          <ul className="py-3 text-[14px] font-normal">
            <li className="hover:text-[--colorshophover]">NMD R1</li>
            <li className="hover:text-[--colorshophover]">NMD R2</li>
            <li className="hover:text-[--colorshophover]">NMD XR1</li>
            <li className="hover:text-[--colorshophover]">NMD CS1</li>
            <li className="hover:text-[--colorshophover]">NMD CS2</li>
          </ul>
        </li>
        <li className="text-[--colorTextSub] text-[16px]">
          <span className="font-bold text-inherit hover:text-[--colorshophover]">
            Giày chạy Adidas
          </span>
          <ul className="py-3 text-[14px] font-normal">
            <li className="hover:text-[--colorshophover]">Swift Run</li>
            <li className="hover:text-[--colorshophover]">Alphabounce</li>
            <li className="hover:text-[--colorshophover]">AlphaBoost</li>
            <li className="hover:text-[--colorshophover]">XPLR</li>
            <li className="hover:text-[--colorshophover]">Adidas EQT</li>
            <li className="hover:text-[--colorshophover]">Adidas ZX</li>
          </ul>
        </li>
        <li className="text-[--colorTextSub] text-[16px]">
          <span className="font-bold text-inherit hover:text-[--colorshophover]">
            Dép Adidas
          </span>
          <ul className="py-3 text-[14px] font-normal">
            <li className="hover:text-[--colorshophover]">Dép kẹp</li>
            <li className="hover:text-[--colorshophover]">Giép quai ngang</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default NavDropdownAdidas;
