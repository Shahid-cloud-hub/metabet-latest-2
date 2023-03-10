import React from "react";
import { useEffect } from "react";
import { useAxios } from "../hooks/useAxios";
import Loading from "../components/Loading/Loading";
import { DashContainer } from "../components/WorldcupLandingPage/WorldcupLandingPage.styles";
// import BetBTN from "../../assets/images/bet-new-btn.png";
import { useNavigate } from "react-router-dom";
// import FeaturedBanners from "../Components/FeaturedBanners/FeaturedBanners";
// import AirdropFooterBanner from "../Components/FooterBanners/AirdropFooterBanner";
// import { PoliticsContainer } from "../Components/Politics/Politics.styles";
// import useBreakpoint from "../hooks/useBreakpoints";
// import { Politics_banner_data } from "../JasonData/FeaturedBannerData";

const Polities = ({ group_type }) => {
  const { fetchData, response, loading } = useAxios();
  const navigate = useNavigate();

  const getEvent = async () => {
    await fetchData({
      method: "GET",
      url: `https://dull-puce-wildebeest-belt.cyclic.app/getGroup/group/type/${group_type}`,
      // url: `https://dull-puce-wildebeest-belt.cyclic.app/getGroup/ufc/ufc-fight-night/63fef129dc670b46ffaa1128`,
    });
  };

  useEffect(() => {
    getEvent();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <DashContainer>
        {loading ? (
          <div className="loading">
            <Loading />
          </div>
        ) : (
          <div className="card-parent">
            {Object?.values(response)
              ?.reverse()
              ?.map((item, index) => (
                <>
                  <div className="card" key={index}>
                    <img
                      src={item?.event?.banner}
                      alt={item?.event?.title}
                      style={{ width: "90%" }}
                      onClick={() =>
                        navigate(
                          `${item?.group}/${item?.event?.title}/politics-stats/${item?.event?.highlights[0]?._id}`,
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
    </>
  );
};

export default Polities;
