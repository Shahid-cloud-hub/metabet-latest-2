import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FeaturedBanners from "../Components/FeaturedBanners/FeaturedBanners";
import AirdropFooterBanner from "../Components/FooterBanners/AirdropFooterBanner";
import Loading from "../Components/Loading/Loading";
import { PoliticsContainer } from "../Components/Politics/Politics.styles";
import { DashContainer } from "../Components/WorldcupLandingPage/WorldcupLandingPage.styles";
import { useAxios } from "../hooks/useAxios";
import useBreakpoint from "../hooks/useBreakpoints";
import { Politics_banner_data } from "../JasonData/FeaturedBannerData";

const Polities = ({ group_type }) => {
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
  // console.log("res", response);

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

export default Polities;
