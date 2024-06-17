import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md';
import img10a from '../../../../../../assets/Image/Shoes/Adidas/contents/s10a.webp';
import img10b from '../../../../../../assets/Image/Shoes/Adidas/contents/s10b.webp';
import img1a from '../../../../../../assets/Image/Shoes/Adidas/contents/s1a.png';
import img1b from '../../../../../../assets/Image/Shoes/Adidas/contents/s1b.webp';
import img2a from '../../../../../../assets/Image/Shoes/Adidas/contents/s2a.webp';
import img2b from '../../../../../../assets/Image/Shoes/Adidas/contents/s2b.webp';
import img3a from '../../../../../../assets/Image/Shoes/Adidas/contents/s3a.webp';
import img3b from '../../../../../../assets/Image/Shoes/Adidas/contents/s3b.jpg';
import img4a from '../../../../../../assets/Image/Shoes/Adidas/contents/s4a.webp';
import img4b from '../../../../../../assets/Image/Shoes/Adidas/contents/s4b.webp';
import img5a from '../../../../../../assets/Image/Shoes/Adidas/contents/s5a.webp';
import img5b from '../../../../../../assets/Image/Shoes/Adidas/contents/s5b.webp';
import img6a from '../../../../../../assets/Image/Shoes/Adidas/contents/s6a.webp';
import img6b from '../../../../../../assets/Image/Shoes/Adidas/contents/s6b.jpg';
import img7a from '../../../../../../assets/Image/Shoes/Adidas/contents/s7a.webp';
import img7b from '../../../../../../assets/Image/Shoes/Adidas/contents/s7b.webp';
import img8a from '../../../../../../assets/Image/Shoes/Adidas/contents/s8a.webp';
import img8b from '../../../../../../assets/Image/Shoes/Adidas/contents/s8b.webp';
import img9a from '../../../../../../assets/Image/Shoes/Adidas/contents/s9a.webp';
import img9b from '../../../../../../assets/Image/Shoes/Adidas/contents/s9b.webp';
import HomeProduct from './HomeProduct';
import CollectionDefault from './CollectionDefault';

interface productList {
  title: string | 'Not Found Title';
  priceProduct: string | '0';
  discountProduct: string | '';
  imgA: string;
  imgB: string;
}

function Contents() {
  const productList: productList[] = [
    {
      title: " Giày Adidas Forum Exhibit Mid 'Cream Pink' H01922 ",
      priceProduct: '3,900,000₫',
      discountProduct: '4,500,000₫',
      imgA: img1a,
      imgB: img1b,
    },
    {
      title: " Giày Adidas Forum Exhibit Mid 'Green White' H01921 ",
      priceProduct: '390,000,000₫',
      discountProduct: '',
      imgA: img2a,
      imgB: img2b,
    },
    {
      title: " Giày Adidas Forum Exhibit Mid 'White Halo Mint' GZ5388 ",
      priceProduct: '390,000,000₫',
      discountProduct: '',
      imgA: img3a,
      imgB: img3b,
    },
    {
      title: ' Giày Adidas Forum Exhibit Mid GW8921 ',
      priceProduct: '590,000,000₫',
      discountProduct: '',
      imgA: img4a,
      imgB: img4b,
    },
    {
      title: " Giày Adidas Forum High 'Xiangi' H04236 ",
      priceProduct: '390,000,000₫',
      discountProduct: '',
      imgA: img5a,
      imgB: img5b,
    },
    {
      title: ' Giày Adidas Forum Low “Linen” GX3659 ',
      priceProduct: '390,000,000₫',
      discountProduct: '',
      imgA: img6a,
      imgB: img6b,
    },
    {
      title: " Giày Adidas Forum Low 'Brown' GW6230 ",
      priceProduct: '540,000,000₫',
      discountProduct: '',
      imgA: img7a,
      imgB: img7b,
    },
    {
      title: " Giày Adidas Forum Low 'Cloud White Red' H01674 ",
      priceProduct: '490,000,000₫',
      discountProduct: '',
      imgA: img8a,
      imgB: img8b,
    },
    {
      title: "  Giày Adidas Forum Low 'Dark Witch' G55616 ",
      priceProduct: '5,256,900₫',
      discountProduct: '',
      imgA: img9a,
      imgB: img9b,
    },
    {
      title: " Giày Nike Wmns Air Jordan 1 Low 'Red Blue' DC0774-604  ",
      priceProduct: '5,256,900₫',
      discountProduct: '',
      imgA: img10a,
      imgB: img10b,
    },
  ];
  return (
    <div className="mt-5">
      <HomeProduct productList={productList} />
      <CollectionDefault />
    </div>
  );
}

export default Contents;
