import PromotionsSection from "./PromotionsSection";
import SalesSection from "./SalesSection";
import { image } from "../../../../assets/Image/Shoes/index";

interface ProList {
  ship: string;
  priceOrder: string;
  price: string;
  code: string;
  date: string;
}
interface ProductDiscountList {
  title: string;
  priceProduct: string;
  discountProduct: string;
  imgA: string;
  imgB: string;
}

const Promotions = () => {
  const proList: ProList[] = [
    {
      ship: "Miễn phí vận chuyển",
      priceOrder: "Đơn hàng từ 300k",
      price: "300k",
      code: "SCOFIELD300K",
      date: "HSD: 10/12/2022",
    },
    {
      ship: "Giảm thêm 100k",
      priceOrder: "Đơn hàng từ 2 triệu",
      price: "100k",
      code: "SCOFIELD100K",
      date: "HSD: 10/12/2022",
    },
    {
      ship: "Giảm thêm 15%",
      priceOrder: "Đơn hàng từ 5 triệu",
      price: "15%",
      code: "SCOFIELD15",
      date: "HSD: 10/12/2022",
    },
    {
      ship: "Giảm thêm 30%",
      priceOrder: "Đơn hàng từ 15 triệu",
      price: "30%",
      code: "SCOFIELD30",
      date: "HSD: 10/12/2022",
    },
  ];

  const productDiscountList: ProductDiscountList[] = [
    {
      title: " Giày Nike Jordan 1 Retro High OG SP 'Utility Stash' DN4336-001 ",
      priceProduct: "7,929,900₫",
      discountProduct: "8,900,000₫",
      imgA: image.s1a,
      imgB: image.s1b,
    },
    {
      title: "  Giày Nike Air Jordan 1 Mid GS 'White Shadow' 554725-073  ",
      priceProduct: "7,573,500₫",
      discountProduct: "8,500,000₫",
      imgA: image.s2a,
      imgB: image.s2b,
    },
    {
      title: "  Giày Nike Jordan 1 Retro Golf 'Starfish' DD9315-800  ",
      priceProduct: "6,147,900₫",
      discountProduct: "6,900,000₫",
      imgA: image.s3a,
      imgB: image.s3b,
    },
    {
      title: "  Giày Nike Jordan 1 High OG 'Denim' DM9036-104  ",
      priceProduct: "6,147,900₫",
      discountProduct: "6,900,000₫",
      imgA: image.s4a,
      imgB: image.s4b,
    },
    {
      title: "  Giày Nike Air Jordan 1 Retro High OG 'Volt' 555088-702  ",
      priceProduct: "6,147,900₫",
      discountProduct: "6,900,000₫",
      imgA: image.s5a,
      imgB: image.s5b,
    },
    {
      title: "  Giày Nike Jordan 1 Mid 'Light Smoke Grey' 554725-078  ",
      priceProduct: "5,524,200₫",
      discountProduct: "6,200,000₫",
      imgA: image.s6a,
      imgB: image.s6b,
    },
    {
      title: " Giày Nike Wmns Air Jordan 1 Mid 'Shadow' BQ6472-007 ",
      priceProduct: "5,256,900₫",
      discountProduct: "5,900,000₫",
      imgA: image.s7a,
      imgB: image.s7b,
    },
    {
      title: "Giày Nike Wmns Air Jordan 1 Mid 'Particle Grey' DO7139-002  ",
      priceProduct: "5,256,900₫",
      discountProduct: "5,900,000₫",
      imgA: image.s8a,
      imgB: image.s8b,
    },
    {
      title: " Giày Nike Wmns Air Jordan 1 Low 'Siren Red' DC0774-060",
      priceProduct: "5,256,900₫",
      discountProduct: "5,900,000₫",
      imgA: image.s9a,
      imgB: image.s9b,
    },
    {
      title: " Giày Nike Wmns Air Jordan 1 Low 'Red Blue' DC0774-604  ",
      priceProduct: "5,256,900₫",
      discountProduct: "5,900,000₫",
      imgA: image.s10a,
      imgB: image.s10b,
    },
  ];

  return (
    <div id="MainPromotions" className="mb-14">
      <PromotionsSection proList={proList} />
      <SalesSection productDiscountList={productDiscountList} />
    </div>
  );
};

export default Promotions;
