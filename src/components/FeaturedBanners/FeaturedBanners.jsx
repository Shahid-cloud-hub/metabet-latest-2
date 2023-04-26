import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FeaturedBannersContainer } from "./FeaturedBanners.style";
import { useEffect } from "react";
import GoldenBtn from "../../assets/images/Politics/GoldenBtn.png";

const FeaturedBanners = (props) => {
  const pathname = window.location.pathname;
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // console.log("props", props);
  return (
    <>
      {props.football_data && (
        <NavLink to={{ pathname: props.route_path, state: props.innerData }}>
          <FeaturedBannersContainer
            background={props.pc_banner}
            fHeight="37vh"
          ></FeaturedBannersContainer>
        </NavLink>
      )}
      {props.pc_banner && (
        <FeaturedBannersContainer
          background={props.pc_banner}
          pMWidth="320px"
          pMHeight="168px"
        >
          {(props.route_path || props.btn_name) && (
            <div className="featured-banner-wrapper">
              <div
                className={`${
                  pathname === "/truth-2-earn"
                    ? "politics-btn-hide"
                    : "politics-btn"
                }`}
              >
                <a
                  onClick={() =>
                    navigate(props.route_path, { state: props.innerData })
                  }
                >
                  <div className={`button-${props.id}`}>
                    <img src={GoldenBtn} alt="icon" />
                  </div>
                </a>
              </div>
            </div>
          )}
        </FeaturedBannersContainer>
      )}
    </>
  );
};

export default FeaturedBanners;
