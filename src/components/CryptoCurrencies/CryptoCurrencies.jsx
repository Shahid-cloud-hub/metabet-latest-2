import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import FeaturedBanners from "../Components/FeaturedBanners/FeaturedBanners";
// import AirdropFooterBanner from "../Components/FooterBanners/AirdropFooterBanner";
import Loading from "../Loading/Loading";
// import { PoliticsContainer } from "../Components/Politics/Politics.styles";
import { DashContainer } from "../WorldcupLandingPage/WorldcupLandingPage.styles";
import { useAxios } from "../../hooks/useAxios";
import Maintenance from "../Maintenance/Maintenance";
// import useBreakpoint from "../hooks/useBreakpoints";
// import { Politics_banner_data } from "../JasonData/FeaturedBannerData";

import AtomImg from "../../assets/images/CryptoCurrencies/Atom.webp";
import BitcoinCardImg from "../../assets/images/CryptoCurrencies/bitcoinCard.webp";
import BNBImg from "../../assets/images/CryptoCurrencies/BNB.webp";
import DotImg from "../../assets/images/CryptoCurrencies/Dot.webp";
import EthereumImg from "../../assets/images/CryptoCurrencies/Ethereum.webp";
import LinkImg from "../../assets/images/CryptoCurrencies/Link.webp";
import MaticImg from "../../assets/images/CryptoCurrencies/Matic.webp";
import ShibImg from "../../assets/images/CryptoCurrencies/Shib.webp";
import SolanaImg from "../../assets/images/CryptoCurrencies/Solana.webp";

const CryptoCurrencies = ({ group_type }) => {
  const cryptoImg = [
    {
      id: 1,
      img: AtomImg,
    },
    {
      id: 2,
      img: BitcoinCardImg,
    },
    {
      id: 3,
      img: BNBImg,
    },
    {
      id: 4,
      img: DotImg,
    },
    {
      id: 5,
      img: EthereumImg,
    },
    {
      id: 6,
      img: LinkImg,
    },
    {
      id: 7,
      img: MaticImg,
    },
    {
      id: 8,
      img: ShibImg,
    },
    {
      id: 9,
      img: SolanaImg,
    },
  ];
  const { fetchData, response, loading } = useAxios();
  const navigate = useNavigate();

  const getEvent = async () => {
    await fetchData({
      method: "GET",
      url: `https://dull-puce-wildebeest-belt.cyclic.app/getGroup/group/type/${group_type}`,
    });
  };

  useEffect(() => {
    getEvent();
  }, []);

  const res = response ? response : [];
  console.log("cryto-currencies", response);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DashContainer>
      {loading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : (
        <div className="card-parent">
          {Object?.values(res)
            .reverse()
            .slice(0, 21)
            ?.map((item, index) => (
              <>
                <div className="card" key={index}>
                  <img
                    src={item?.event?.banner}
                    alt={item?.event?.title}
                    style={{ width: "90%" }}
                    onClick={() =>
                      navigate(
                        `${item?.event?.title}/statistics/${item?.event?.highlights[0]?._id}`,
                        {
                          state: item?.event?.highlights[0]?._id,
                        }
                      )
                    }
                  />
                </div>
              </>
            ))}
        </div>
      )}
    </DashContainer>
  );
};

export default CryptoCurrencies;
