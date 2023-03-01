import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FootballLeaguesContainer } from "../components/FootballLeagues/FootballLeagues.style";
import Loading from "../components/Loading/Loading";
import { useAxios } from "../hooks/useAxios";
import BetBTN from "../assets/images/bet-new-btn.png";

const UFC = ({ group_type }) => {
  const { fetchData, response, loading } = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  console.log(pathname);

  const getEvent = async () => {
    await fetchData({
      method: "GET",
      url: `https://dull-puce-wildebeest-belt.cyclic.app/getGroup/group/type/${group_type}`,
    });
  };

  useEffect(() => {
    getEvent();
    window.scrollTo(0, 0);
  }, []);

  const event = response?.map((item) => item?.event?.title);
  const highlightsData = response?.map((item) => item?.event?.highlights[0]);

  console.log("res", event);
  return (
    <FootballLeaguesContainer>
      <div className="football-loading-wrapper">
        <h1>Ultimate Fighting Championship (UFC Events)</h1>
        {loading ? (
          <div className="loading">
            <Loading />
          </div>
        ) : response?.length > 0 ? (
          <div className="football-league-conainer">
            {loading ? (
              <div className="loading">
                <Loading />
              </div>
            ) : (
              highlightsData?.map((item, index) => (
                <>
                  {console.log(item)}
                  <div className="card" key={index}>
                    <div className="card__header">
                      <img src={item?.data?.background_img} alt="" />
                    </div>
                    <div
                      className="card__body"
                      style={{
                        transform: "translate(53px, 48px)",
                        gap: "61px",
                      }}
                    >
                      <div className="card_item">
                        <div className="img_item">
                          <img src={item?.data?.player_Img_1} alt="" />
                        </div>
                        {/* <span>{item?.data?.player_name_1}</span> */}
                      </div>
                      <div className="bet-btn-wrapper">
                        <span>VS</span>
                        <div
                          onClick={() =>
                            navigate(
                              `${pathname}/${event}/stats/${item?._id}`,
                              {
                                state: item?._id,
                              }
                            )
                          }
                        >
                          <img src={BetBTN} alt="Bet Now" />
                        </div>
                      </div>
                      <div className="card_item">
                        <div className="img_item">
                          <img
                            src={item?.data?.player_Img_2}
                            alt={item?.data?.player_name_2}
                          />
                        </div>
                        {/* <span>{item?.data?.player_name_2}</span> */}
                      </div>
                    </div>
                  </div>
                </>
              ))
            )}
          </div>
        ) : (
          <div className="no-blog-founded">
            <h2>No Event Founded</h2>
          </div>
        )}
      </div>
    </FootballLeaguesContainer>
  );
};

export default UFC;
