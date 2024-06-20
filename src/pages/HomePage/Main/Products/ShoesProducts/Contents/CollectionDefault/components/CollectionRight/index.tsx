import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md';
import loadingIMG from '../../../../../../../../../assets/Image/Error/Loading.webp';
import {FaStar} from 'react-icons/fa';

function CollectionRight() {
  return (
    <div className="bg-[#fff] ml-3 pt-4 pr-4 ">
      <div className="flex justify-between">
        <div className="border-l-2 border-[#000] pl-4 flex justify-between">
          <span className="text-[#000] font-bold text-[20px] uppercase">Adidas</span>
        </div>
        <div className="flex items-center">
          <span className="text-[14px] text-[#828282]">
            Xem tất cả
            <MdOutlineKeyboardDoubleArrowRight className="inline-block" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="">
          <img
            src={
              'https://file.hstatic.net/200000525917/file/nike-banner_cef5659762e54e219f1d43f3d2ea6ca5.jpg' ||
              loadingIMG
            }
            alt=""
          />
        </div>
        <div className="-ml-10 grid grid-cols-2 gap-2">
          <div id="card1">
            <div className="relative group/nike z-0 cursor-pointer">
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczPNFptCX6Svs3iREN3hHDRk2pvPtwNpg4odhzrX81SFy4bvjWEskUPNE3mraDwpqCVxUUX4LJbH2NVKcTYA4a0fpBTJ7XyUiSluObvJkD64CMkRZ1-C1h38NAN9eNGROVGcbKA44NO3fxrM-XEK_wzIs1q9qGKBTtBJ_vc7Gho5xEyVBtmGxLdhs7V9auZ_gArMBylO6eSeB5H7pnIuAcRD2ImgFzDbnasG4Rd5KVzXasO4TJDt4EE3qe8wnJLP7hlfpY80suWma7DU_cn0qj162BE-XfWQZSJ4riLSrXSc2GNyBxuACTTLa_uUzLMuEHCMN2D_7NoOoEKpqP1KzaZE9bZWrcjCP0GKtqIXoDIpJ8UFUIgFT-VYktjUfyX4QGRzFE3ASD17TEDtEOFgg4EndMWNhDpdOk9CAVvY2SmvtxJDB_SULPsSxjOJjdEuZfJJJyiDXLAXJYjH3Dq65sctvHsOszM5qtPu8Nh4lClopzjTdxu7FROoJVwDFIIEmc5qOVcG7H-Fgp-pYyQtCIWt9dwXZwfMLr-_vl1NgsfLdwM4VyVyvfWNiFx_FJyc23JqL1C-F5AsP5XrWug3xYNLx0djpsjQ-WAqm3oOzflwSAjldf2OKaFW0N2HAlK2wllWy3Re96BNMxWAaJRVy6NuxovxxTpMv4svj8B65cQKJIHL3BYxWIgfsKW_exRKL2uI4rJAJ4nBXvQRx0xKOzNsdb0WS26YMCE8DDcxpV8Jz8YeSU7L3DWJQHIezmF0ZSS9L0ikoZgyDSNjJduHVfSsGHEGcJMyckIwl7fXgxK1FUUrvkU5jYYQNE___5Bd0sSQ2loBqPvGxsAoF2fP7YHuWUVqPLzYoOynNhatiVxPh0IPxHNwreLxouiuAYJKRrKtuUUyULCGGry-YSh56QVGEyQ=w480-h480-s-no-gm?authuser=0"
                alt=""
                width={179}
                height={179}
              />
              <div className="absolute top-0 left-0 -z-10">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczMvvMgiScc_gSqwxuZLS9XWrd7AButIAUNK7z6QdBQ9M-gEcyuXxDrcScfok4xlVnwNZmSkkH4CkpJUKamJ8R-cwFv993Dm34Chy1URARMpKVK9iFPO-wWh-n0xYrd4LhJk9h90BEZhxHeZ5DMlq9dFPxLtjsYE5qbbpfQSZ-xiyIF-_pz98WJ8NpwfqYzt-jgLPXqZInjKO3nXyVtwK_ssDlyERWc6MoWAKF-JIf4iIdBjNTR-F-rWXIBBef_Qi6Kw1bpZmYdueGpVsHqDVMPvfCw73EUow3SfEEJk71SShcKNaM3Jwcshz0BN1ZOQqmf_F11_1GeuFXcQXTKXb1iS-lR3yx-i4-VxOXkzGa65bHnzQcgDpSfE0rGJw1t38hm6Y5d9dTHZp4fW9t3YlvLbj-woRC4pKOrpvUlI6_Zdt0bd1CJS4mYLyO65n_jlhrEm_v-t7S8IYAMup8zEla1312Chu-XlmsZqWv1Au3vGs5FzKx-9_w84catG9ZZpXzpOT1ATkYPhE97CKZ4O4dKRuMuVclj9Tl3Bi9iYmpc4jH-gnhXp9iwkm77h9GRsl7lDDY-s1Z_5qt7gQb2RVvz-PPPLRx7EzHRRLxqkHEdT04erdJh4k_eWv2T-9hHh290W3jdgl2DVqc4oqzNFSSl_5zdFiPSYlR2EzZt7DZa1dMbyjl5rGMPF-lCtIMa8zycx4xVc0U4-3LCWss0aAAaKNVU5PkAHKS4-uptqbrUeDiol2rtwi9zsOTYlddfWvn9BfsYGhTR7AmBYhj4SDxGTdOobr_zDcbnX7T9UdSkSu7J94VQI-xlaLAz5yz6WcUKIwZjxFTGBm6mtXIzDQX0i8J5kXgcct8ZiBKPfogUGaSxUbfhL_nLsHfK8NZabyXKC1mpaZbuwjbNXdrR1MinNcA=w480-h263-s-no-gm?authuser=0"
                  alt=""
                  width={179}
                  height={179}
                  className="group-hover/nike:hidden block translate-y-8"
                />
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczN3wxz7ekymf1tQ-oqhJ_KLz24XNVPEQ15iVAeZTRkrY1ScLAl7MJa1yYdtcae2mQJqTZOLwmndeYkEQxEOL5LVRtdCQXYQSKelsJVrBAXpd2ZICgJSxTk0gTJVd0-Gy7iNMCoPpEOOU2Mgp3OGDUUm885JTOEWnZrVam7rA2agD3VU7aYsRlHu778q0K-k4vc4B_pxkwu-KZsmGNW96XsNhfFFR0-KCUhUdtFrfpHP6ZgL2ETDENIe0naH-l95DVCOZg5ScdbNmk45SUbOYb4tpzLcY-njwmUwk0_nPeYs01e7FFd8oOtg6vnrvifg5TH-h3o0Hl-JVU1uwTa3R-tJGLpJgSa-0FKryWMGQRyEY1ozCCHgopIo6zHLHGUPt_L65p_AVV0bDYW23HLkatALlDX9ySyXi_OIWEELg0vdJFDPtE3eEMBjYDscgjGONzJVUoVJo2beBr5zJNxmqULm-HWMYb4psA7Csysc9fm07k18dr6-YQBFdpxhnzyanVwe81iKzo-9ivxqrg_YfpfMO3HFjWwfXrg1gV4ShyyDiHMXBxhheq1oxKT_DZ41pQRVQRWxjZVs1J1X0oH73YkhJ31P9ZIf6ctqJagvjRx4SE2Qdc9iQ18sGBIbWaKq6vKR5VZMXGV1Ioer4HkmEbcbtq7S6LRUEzxmhOFL14_roEbmC5bGN9FvGg7jTxP9OTG62-xha1vpDIsg4bjXi2KakIe4wpdqHK-2fPULZKgCBG2VVfCWhAIvFgAeYGphbjpCwUundR_4mYXIWUK6uhUNAIYzX0mHU_xjxoMI-qcTqfJiQxOPYDpjJHpXrhXztZZUbaSwaH9nBhHvTpOZTgQj--h_tGX5pGP2z6bgmm2csVChyAi5rtFOHTknIPVy_mIkpJuE7JQ45vZLMF1mwXmbGg=w480-h401-s-no-gm?authuser=0"
                  alt=""
                  width={179}
                  height={179}
                  className="group-hover/nike:block hidden"
                />
              </div>
            </div>
            <div>
              <a className="text-[#000] text-[14px] font-medium line-clamp-2 mb-3">
                {' '}
                Giày Nike Air Jordan 1 High OG GS 'Stage Haze' 575441-108
              </a>
              <div className="text-[#000] text-[12px] font-medium flex items-center">
                Đánh giá
                <div className="flex ml-3">
                  <FaStar className="text-yellow-300 text-[16px]" />
                  <FaStar className="text-yellow-300 text-[16px]" />
                  <FaStar className="text-yellow-300 text-[16px]" />
                  <FaStar className="text-yellow-300 text-[16px]" />
                  <FaStar className="text-yellow-300 text-[16px]" />
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-[--textPrice] text-[14px] font-semibold inline-block">
                  4,900,500₫
                </span>
                <span className="text-[--textDiscount] text-[14px] line-through inline-block">
                  5,500,000₫
                </span>
              </div>
            </div>
          </div>
          <div id="card2">
            <div className="relative group/nike z-0 cursor-pointer">
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczPNFptCX6Svs3iREN3hHDRk2pvPtwNpg4odhzrX81SFy4bvjWEskUPNE3mraDwpqCVxUUX4LJbH2NVKcTYA4a0fpBTJ7XyUiSluObvJkD64CMkRZ1-C1h38NAN9eNGROVGcbKA44NO3fxrM-XEK_wzIs1q9qGKBTtBJ_vc7Gho5xEyVBtmGxLdhs7V9auZ_gArMBylO6eSeB5H7pnIuAcRD2ImgFzDbnasG4Rd5KVzXasO4TJDt4EE3qe8wnJLP7hlfpY80suWma7DU_cn0qj162BE-XfWQZSJ4riLSrXSc2GNyBxuACTTLa_uUzLMuEHCMN2D_7NoOoEKpqP1KzaZE9bZWrcjCP0GKtqIXoDIpJ8UFUIgFT-VYktjUfyX4QGRzFE3ASD17TEDtEOFgg4EndMWNhDpdOk9CAVvY2SmvtxJDB_SULPsSxjOJjdEuZfJJJyiDXLAXJYjH3Dq65sctvHsOszM5qtPu8Nh4lClopzjTdxu7FROoJVwDFIIEmc5qOVcG7H-Fgp-pYyQtCIWt9dwXZwfMLr-_vl1NgsfLdwM4VyVyvfWNiFx_FJyc23JqL1C-F5AsP5XrWug3xYNLx0djpsjQ-WAqm3oOzflwSAjldf2OKaFW0N2HAlK2wllWy3Re96BNMxWAaJRVy6NuxovxxTpMv4svj8B65cQKJIHL3BYxWIgfsKW_exRKL2uI4rJAJ4nBXvQRx0xKOzNsdb0WS26YMCE8DDcxpV8Jz8YeSU7L3DWJQHIezmF0ZSS9L0ikoZgyDSNjJduHVfSsGHEGcJMyckIwl7fXgxK1FUUrvkU5jYYQNE___5Bd0sSQ2loBqPvGxsAoF2fP7YHuWUVqPLzYoOynNhatiVxPh0IPxHNwreLxouiuAYJKRrKtuUUyULCGGry-YSh56QVGEyQ=w480-h480-s-no-gm?authuser=0"
                alt=""
                width={179}
                height={179}
              />
              <div className="absolute top-0 left-0 -z-10">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczP5uhd_95Bba1Djzx9XRTNuH0Bj0CAtzBweQEwFoybPSCGdDcmzfNLzFLUSqqeKGOVv4akgKoxcDaWzFz9SBvsdpF_5mLLLeXeT0S_QqBhLCBTMjdj9xV6IF0fm0GOWYMx6ddUjgJB6vjR4fdMxZI02EpVDs8e-ygo-_dlodesKUkGSouXkXO1YM55xNoJVv65_qlZyX2ifyyGglJ810yYE8DaIZc1SwxUxH5Dpazhliy8_OCx3J2KhTfgtXYH2F5fSpt7Ri32hEd6FqxWkZd9kSid1KuztwvxTVKINzuFWA6rvGxt0Zz75Hy_0T4GQY4qS2_qbr1O8qUjkqB7-JuyJpgpmYyiciXC_bFQmhHkC7pBT4Gmp9IbQsAeYj8xdGxAaBFXkcknLpMosXOIimopiq7677ILOOe25S-rEShL04pdUHt_VY2nGHOkP_l1-4r9vCHyFtWBIBXKve2EqxGUbXPrTSoaGqLqzRWI9DLoFSOBcMVQCd-ccW7EFmUs6TJzN9ysN1st5uzPn1apoThjetYNJ8hSBJ-MjInrA0JZ1a9DunNm5YFW4pTMQci19ZAW7LKdu3T6o6EmcT7PkwgWbyH5CKOdZddG78SswCKCVIFsNi43UJ8LDaHOTyI1iC36KOCnQyWTPmRlAHNHGuhbPGgP8js6v4_UdA0YSDVyL6EeMG9h40lRS8XcuDukY_VBTgRmpES-hDSt9BR8AT8rK049LTkDyr6u8QiRfDUlBkqC5vUFY9PBTk65eU5nLxLe6NICZrPj7-bh6OEhnL0Qnb1pGRIqXf5laDXkf559pz_JXsoEeBDUxts4WCL8OMAdUi86z1kfcyfnAJ6LU28jZAjROYF1a_yaOEMgE44bDfn5AeWZBNVTOaUeH5EAf8ur1-8X4meLBMipIdqpWiIM5wU8=w480-h288-s-no-gm?authuser=0"
                  alt=""
                  width={179}
                  height={179}
                  className="group-hover/nike:hidden block translate-y-8"
                />
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczPPFwqWi3bP-W2Kr8apty7ZalpSoPhsmB_zKRxx90PszUTZdxvKm7A8vw0hjhjRyiWDlIA6A6-N5weYOXd7XyIplT1QzdxdCdWpgHuwPFRoPXhx14fuEPEmEqmLIy9XoRmyoc6j29qHkBPVAWBtwasDMcx_QCmDtJ5-ymEFrMUxUfry66wLYMMLfT1kMDhQTIMs9Teava-PdjNHhkQhk30WYuYy4IvmSd7pS7i6aenlDlPgKyiPri-cHiOcQMMdf0pM_zp1HJWgEmdheJgrzDBueU780FRW-XRovx5HE7D9SWZW1pbXMxNOwYaMmGi1g7UC78Ot0B_pGN0C8RaJPicaRY-VSP4OHpcVZLo6Mz6-uuzf26WeLCplhTMpT_Lxqc3bm210yw8P5dwoVnn2hxNpE_Bnv3WYRzboRUG1ZBb1IMMhxK8EuD0D-1LoEsAmimALUZFVUlo87AsMtVRc1A1lZoykYEVoxeNbf3j-SB2WJ084basznSiJ0Pw6D3G8SzdhB1crjw5ZBjjTSL5QoYydYbU45gvShyJdKxvJmnwYdhvvyYdVj1t4MF_1TVhfLoP0bJnRGNrYa40U1BfJR_N8UeQNBvs-ZHQe7JmRB8hrRagHo0y7YKYekw8SI9V_v5KdDV_eaersx07ilbyXyIhYN9Q3y93-e_I6h5R7GJmFiL8RkbdKi-WOM5Ne3G8iHnzUdHFGiMZuZGZFE10PJ4e79BRjh_E0OjlDgXFn6PuAsuFrXrxE71LvOwcweoQXtqJDzGinEu4IqJLSSChf6tg0NlXOz1HQzBu7o_0eEWQ0yptyA5VHMY0Oo_FpHED7cT0Cu0E03r2g6buG5Np75IHRq3uJgQu_lt5eOHYfxGwURjZD4ZrU3cW3LzsE36wk1h2UfDnYxL_MED2LaUrpnHLNUvs=w480-h480-s-no-gm?authuser=0"
                  alt=""
                  width={179}
                  height={179}
                  className="group-hover/nike:block hidden"
                />
              </div>
            </div>
            <div>
              <a className="text-[#000] text-[14px] font-medium line-clamp-2 mb-3">
                {' '}
                Giày Nike Air Jordan 1 High OG GS 'Stage Haze' 575441-108
              </a>
              <div className="text-[#000] text-[12px] font-medium flex items-center">
                Đánh giá
                <div className="flex ml-3">
                  <FaStar className="text-yellow-300 text-[16px]" />
                  <FaStar className="text-yellow-300 text-[16px]" />
                  <FaStar className="text-yellow-300 text-[16px]" />
                  <FaStar className="text-yellow-300 text-[16px]" />
                  <FaStar className="text-yellow-300 text-[16px]" />
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-[--textPrice] text-[14px] font-semibold inline-block">
                  4,900,500₫
                </span>
                <span className="text-[--textDiscount] text-[14px] line-through inline-block">
                  5,500,000₫
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionRight;
