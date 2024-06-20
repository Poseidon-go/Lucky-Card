import {FaStar} from 'react-icons/fa';
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md';
import loadingIMG from '../../../../../../../../../assets/Image/Error/Loading.webp';

function CollectionLeft() {
  return (
    <div className="bg-[#fff] mr-3 pt-4 pr-4">
      <div className=" pl-4 flex justify-between">
        <span className="text-[#000] font-bold text-[20px] uppercase inline-block">
          Nike
        </span>
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
            <div className="relative group/nike z-0 cursor-pointer ">
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczPNFptCX6Svs3iREN3hHDRk2pvPtwNpg4odhzrX81SFy4bvjWEskUPNE3mraDwpqCVxUUX4LJbH2NVKcTYA4a0fpBTJ7XyUiSluObvJkD64CMkRZ1-C1h38NAN9eNGROVGcbKA44NO3fxrM-XEK_wzIs1q9qGKBTtBJ_vc7Gho5xEyVBtmGxLdhs7V9auZ_gArMBylO6eSeB5H7pnIuAcRD2ImgFzDbnasG4Rd5KVzXasO4TJDt4EE3qe8wnJLP7hlfpY80suWma7DU_cn0qj162BE-XfWQZSJ4riLSrXSc2GNyBxuACTTLa_uUzLMuEHCMN2D_7NoOoEKpqP1KzaZE9bZWrcjCP0GKtqIXoDIpJ8UFUIgFT-VYktjUfyX4QGRzFE3ASD17TEDtEOFgg4EndMWNhDpdOk9CAVvY2SmvtxJDB_SULPsSxjOJjdEuZfJJJyiDXLAXJYjH3Dq65sctvHsOszM5qtPu8Nh4lClopzjTdxu7FROoJVwDFIIEmc5qOVcG7H-Fgp-pYyQtCIWt9dwXZwfMLr-_vl1NgsfLdwM4VyVyvfWNiFx_FJyc23JqL1C-F5AsP5XrWug3xYNLx0djpsjQ-WAqm3oOzflwSAjldf2OKaFW0N2HAlK2wllWy3Re96BNMxWAaJRVy6NuxovxxTpMv4svj8B65cQKJIHL3BYxWIgfsKW_exRKL2uI4rJAJ4nBXvQRx0xKOzNsdb0WS26YMCE8DDcxpV8Jz8YeSU7L3DWJQHIezmF0ZSS9L0ikoZgyDSNjJduHVfSsGHEGcJMyckIwl7fXgxK1FUUrvkU5jYYQNE___5Bd0sSQ2loBqPvGxsAoF2fP7YHuWUVqPLzYoOynNhatiVxPh0IPxHNwreLxouiuAYJKRrKtuUUyULCGGry-YSh56QVGEyQ=w480-h480-s-no-gm?authuser=0"
                alt=""
                width={179}
                height={179}
              />
              <div className="absolute top-0 left-0 -z-10">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczM5tNFaw_ghrabFZJALR0ysrEIYu8M0B5x-V-_AUQN44Dc67UfIH7v5HP9lKnCYcnyUaaDKsTqBl0_PM3lXXCaVVOzpSwTwCXmHNONkzPXnDp9Kaq1_lWLI8MQRiUKuMD8NHOClRYlv7FUwGAg7w6YVvLa48KuBCvm_8TvhOTV7hkjD8auIpcmZBkOx4GU-bjSAqmfushQJQxwM2S0TCAIA2tGFvpWeUMtM_a8IoatX0wAljFtaTDgTqJTQOnXdhqnuGOZoNEfVIjCYcjMlEWRcZpzY76YUMh9C1MbqBOWnbpFkRmKHYVfJNVUhgJgIxdEUL4kGephFw6ADYUYiBEv8sC2X8nUgj_PFbQOexGNoSHR-pMsMe-sVGR7HvTyzrLMTrDzx2JyXnB2WlpP_XASS1eUiZE34NAXUaQ02sgRZT8tZV7af6P_7UnrvMiMjXluJyJs2DZH355urYgqRvaArQ43QwvUwhss5K1qlffC-VX32F05Bbm4pH3CJFlCDB1uN04rGW9BlHr0HM271lY2J_BwAs_InHkaF8mDgEYrD4awgEvz300SyvBW4n_O8KLsmPcvyO3JDFq7gHCrlooac83JIuOAzd0S0QzZFs-y8e4rZ5U2DNkdFwKpnByGNmAPIYq9vTuopyKODQAEG88otm8ncURbSX6lIgivBPTm933EjxOz7kchGD7MwlzuN-rAxhLh8wdpBH4E0wT_VN2IPUw3aF_PxztMpzirMThEC7_PiA3tq7qDw7GsBNjVVYBASAKWKTl-7qsZeOKGEraJr4o1ouljJO6zEMFr2OisuM4iHg5VOt9Q8HZCYMkO9MbJ-SO8CMQDrAfzDXeTabNLeBJCqZMk2h343FbixyoxJ7ZSJwjk5XhDeH0hJa6IGrAyC4BOMV0jvPGZwrRIgQrXb=w480-h476-s-no-gm?authuser=0"
                  alt=""
                  width={179}
                  height={179}
                  className="group-hover/nike:hidden block"
                />
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczOGGqIdFe9Fbsp3MKJvg07MAzNfE-1e6YRsMeRTpr-MVGp6LzpIThab78oU6NaM_BerDLP_htX8vQ7_xIitCKXqmy4cHh8-AGbXA7MmT5haAeiHeiQf1AOtUr2d19RX1ees6zpsIaZdPWL00I_74S202l31VGiqV-vvgGW1u5k8kyqF9XHmDkjZjLh2hR1qkekoIs1M3IDe7iR3YZ_ADfbsEJz62Txlhu5_kwikfLP6zprKHN9fgViVIiGx5IJW1pilyfDUhGvjq3_sbNJwS0E9n_-11se9O-PB8jf4aZI9rA_9TsRrJbAMtB_rh_h_e1w2Ai27xzDSIPK-zP_q5cj7sBPT7Sq09kGuxgckr6sqYlU8Fdw51RgmphSn1SYCDKWBRZhThYrLSxybQDzUTaA0SsLMtkxyeLGtRPynE01rH4ITqSaQl3Bpac6kZc4fSIWnl2qjWAQVnAk5BnfiyDvRBSWd3s0HMjfUEZYI96zrBJWqwQnbZ82lYCMoA5jKSS7cSWhYpr_MWfsE-_gmRDHl4AO1V59pFfXk05DD2_9p_cFHvazsa2SVXHa6zdTXB07J6msA9d9sIZh3ftjv9jEN8FWyl_vfsJXtr6MzvXB2a6CSKpUlfodSbirCIilsgRuD7MTc3nSL_r_Aop2Xq0dR1Q8-ttMOpWJE98geTueDsxFUyv1ut8Pj8_sohrvIfHwnDwqSnlPEfmiKCKqXmCSdVJAXTBlSzE5V2nI_nqi_C77qMszdj6B-0ld7jchS7tEQCcot1wEV3ja1wS7D8exOuPiD-Nrtm0hGgPxgbtivgH5K9LiJk4N5VdT8V49hzAIL7VSdrHWn2tLh4gbr56BxN1JdpBQkgsArCNllTDwqmtnkWuOd6_ca4fytUryUSH9saHRsTwcIMxDDa3bR08a_=w480-h473-s-no-gm?authuser=0"
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
                  src="https://lh3.googleusercontent.com/pw/AP1GczOBs2V9mK04m8-Oo687cPrzLlV8l3K0uxyqWGP0P-VxuR28Apcafwddh4XJd_ifKTEvxFIaHAlNm8eUQZlwJIdH2cvO888O963-c3jHlmg5V6BASeDnJKTWb-E_GCQzRa1Xfs1KA_MU_NK-2yhV_MhUVmN57iNpHkC7QTtm5R8tEnXD7CnZhHTHmSmU-EQcYL98Pg7umZgMW3GBhrFNOZsBDxpb2bV3xHPxAF9Q03C4ZPcVVOfjFylXX-DuYPINVRSpuPwCZP0ewKabjtb7CXnT9KXXYkiaHwFdgzE0s2rHCQG_6nX1smSsB1WuDXxGiZhcFsDYm9vCLZIm1uSuFMZDKMGImRAFYit8hljqH4gsNQY9A0AVRuvL9KPSgn8EslccxZDTRx1II9m0-tPznwfGe16KanHTrDTQTt5S6AZ5vrbkpDmMqqKnPmarQLcQMznF--3_6Fld3YqiPPzNtT-xSEvE8WqF2Vy-5763sboYkgB7klm7EEXjq4ZwO79e8ymeQ2eMGPwg2WtCs8sqVSK39ibElTVJZVyXVw3wBFNJgS8h7_tEr69RxbgFjjHcvN_FGyq516SpRwY0w97n9W7rk-ouSZ7m0HqadR4DfokVkI5eReOI7Aws2xAtpRfQEL1iodW1Dmx3uy_BSgS6csyXDPhsLYgq9YdBcye-46DuaPnHufxN7yr6QWY2FM2foddPtUOQsNhGhzhbMRO-fy6Zw31YJ9vkYbAp-1kQuWc9wb-ypDsAP_gCdEAm1Kvg1NERT0Lr1UTnAFsl7Mhxokvb4IdAeWJQcGOqOdbt55fErvC00XCUzqrhYPUaZDLMSMDFneEMHFm9--C0_kxda3yLbJo9lY6b4Ig96rmouz3EgfAFhei0Au3HW8trTXX8dW3W1jeTi2prvX9D9Q9nw3PB5-s=w480-h282-s-no-gm?authuser=0"
                  alt=""
                  width={160}
                  height={160}
                  className="group-hover/nike:hidden block object-contain translate-y-8 "
                />
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczOUx_AScoXYy5e-UqD__3HyQIHbpw-dgGCDNOw_VAbAzwqQ1mbTD37DVfin6XIogT2vHKIM35ntlpMW3XzLxwfdKodFrekRn_Mvx_TxgGHtJPMBG6O6fcNTSx4RK64wbfxLI5m7s0PZpPMi1EG4MW-Eiu11M04LFXwf8naWKa7nOezeBhEO4uXf5czQKwr7cB8TZCQ8dLnX5RpsLCAl4OfSHQhEknknsWHhSdx7PJMTA-gAk5s85zoNuXrw7dd0GJZ7S1Stn9rpDOJPvglOjlte1b6w0crLMq8Rn_aCgKM6L3flzfsMNF4-0QD_6wce6t2AKqrMzJHew-uM3xAEtVvyM0U1wkygKKI78_5yC_ht33OBRLDbVrhsUy-fU7LrhpbFLjorEa3zRcPzkzdxWcOv-WKpKGnK8zTMfl6xMgyNcgbxvxywZ_iMNLXJPRFzyKwsKEx3oD18uffLEBKALQSQPyKKfau28ql9bOUzniStppvjigOwi7MydwjvM4FUry0mo_wwfby5pjEGElPdvV7Dnw6brvGb7mfgXSRudAWv2O9HK74VaICuGjcdQqM0xqxyyH1GdveCRl3LkC45OlwBc4RmgKCbXqBRQMaoQBIcCZ75j4qe3yziH65SXPm4Csnhm9eNAsor9nDcDlSUdI6eE_J9mXp_aufbJKDQEjcDRn1W4pq-WnSlQhe8A3Y8hLe1pzSx2742-Y4MoaeqfQwwlcmmljUL3BrY_rdGmSTAoBw4diK7b7ILb_jlb_Q0hmQZdIQJ8wF4kdLPr4WPPxK7kt0jjHPAU7Y60xwc5iFwPeTq1iyJ1cRIn8c1IQdhteFlMKEWcsG9jSEQ0eojt8raFVsxZ9iNa7hbKGsPu5Om9Hw2ISljaJXaBpiAVl72-XkoQT4z8Owf6FFLTSKKjPethMY=w480-h467-s-no-gm?authuser=0"
                  alt=""
                  width={179}
                  height={179}
                  className="group-hover/nike:block hidden object-contain "
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

export default CollectionLeft;
