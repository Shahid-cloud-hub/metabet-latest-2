import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { UFCFeaturedBannersContainer } from "./EventInfo.styles";

const EventInfo = () => {
  const { state } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {state.map((item, index) => {
        return (
          <UFCFeaturedBannersContainer
            background={item.background_img}
            key={index}
          >
            {item.status && <h1>{item.status}</h1>}
            <div className="UFC-featured-banner-wrapper">
              <div className="country_wrapper">
                <img src={item.player_Img_1} alt={item.player_name_1} />
                <span>{item.player_name_1}</span>
              </div>
              <div className="player-VS">
                <span>{item.vs}</span>
                {item.inner_route_path && (
                  <NavLink
                    to={{
                      pathname: item.inner_route_path,
                      state: item.innerData_1,
                    }}
                  >
                    <button>{item.btn_name}</button>
                  </NavLink>
                )}
              </div>
              <div className="country_wrapper">
                <img src={item.player_Img_2} alt={item.player_name_2} />
                <span>{item.player_name_2}</span>
              </div>
            </div>
          </UFCFeaturedBannersContainer>
        );
      })}
    </>
  );
};

export default EventInfo;
