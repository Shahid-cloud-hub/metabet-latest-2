import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import Loading from "../Loading/Loading";
import { StatContainer } from "../Politics/Politics.styles";
import Tabs from "../TabFifa/Tab";
import Times from "../Time/Times";
import { GetStatContainer, Info, StatisticsContainer } from "./Stats.syle";
import clock1 from "../../assets/images/BitcoinPrice/clock1.png";
import clock2 from "../../assets/images/BitcoinPrice/clock2.png";
import BetNowBtns from "../BetNowBtns/BetNowBtns";
import Carousel from "../Politics/Carousel/Carousel";
import { StatContainerCurrencies } from "../BitcoinPrice/BitcoinPrice.styles";

import Polygon from "../../assets/images/Polygon.png";
import clock from "../../assets/images/clock.png";
import banner from "../../assets/images/newBanner.png";

import BetUiImg from "../../assets/images/bet-ui/bet.png";
import StruImg from "../../assets/images/bet-ui/stru.png";
import FreeBetImg from "../../assets/images/bet-ui/betFree.png";
import ReactPlayer from "react-player/youtube";
import CurrencyConvertor from "../CurrencyConvertor/CurrencyConvertor";
import useBreakpoint from "../../hooks/useBreakpoints";

const GetStatistics = () => {
  let { group, title, id } = useParams();
  const { pathname } = useLocation();
  const { fetchData, response, loading } = useAxios();
  const [addStyle, setAddStyle] = useState();
  const { isDesktop, isTablet } = useBreakpoint();

  useEffect(() => {
    getBanners();
    window.scrollTo(0, 0);
  }, [group, title, id]);

  const callback = (id) => {
    setAddStyle(id);
  };

  const getBanners = async () => {
    await fetchData({
      method: "GET",
      url: `https://dull-puce-wildebeest-belt.cyclic.app/getGroup/${group}/${title}/${id}/stats`,
    });
  };

  const item = response?.stats?.data;

  const FormatDate = (dateNumber) => {
    const date = new Date(dateNumber);
    const options = {
      day: "numeric",
      month: "long",
      // hour: "2-digit",
      // minute: "2-digit",
      // hour12: false,
      year: "numeric",
      // timeZoneName: "short",
      // "event_timestamp": "2023-03-01T00:00",
      // 2023-12-25T04:53
    };
    const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
      date
    );
    // formattedDate.split(/[\s,]+/) this is used to add or remove the (-, " ") from particular sentence
    const [day, month] = formattedDate.split(/[\s,]+/);
    console.log(day, month); // Output: "28 Feb 2023"

    return formattedDate;
  };

  const result = item?.verdict_title?.length;

  let screenSize = window?.screen?.availWidth;

  const youTubeCode = item?.prediction_video.slice(17, 35);

  console.log("youTubeCode", youTubeCode);

  const videoSrc = `https://www.youtube.com/embed/${youTubeCode}`;

  return (
    <GetStatContainer>
      {/* // Trending Event // */}
      {loading
        ? item?.stats_title && <Loading />
        : (group === "ufc" ||
            group == "football" ||
            group == "currencies" ||
            group == "trending-event") && (
            <StatContainer increaseFontSize={result > 45 ? "18px" : "26px"}>
              <div className="event-first-item">
                <div className="event-detials-main">
                  <div className="event-details-wrapper">
                    <span className="event-title">{item?.verdict_title}</span>
                    <div className="img-wrapper">
                      <img
                        src={item?.background_img}
                        width="200px"
                        height="100px"
                        alt="event image"
                      />
                      <div className="event-desc">
                        <p>
                          In Q2 2022 Musk disclosed the idea of adding Dogecoin
                          as a payment method for the Twitter subscription
                          service, Blue, triggering a price surge.
                        </p>
                        <div className="event-time">
                          <div>
                            <img src={clock} alt="clock" />
                          </div>
                          <span id="yellow">18:40:20</span>
                        </div>
                      </div>
                    </div>
                    <span>
                      Only 8 previous Championships have recorded as being
                      without rain interuptions since 1922, 1931, 1976, 1977,
                      1993, 1995, 2009, 2010, 2019.
                    </span>
                  </div>
                  {(isDesktop || isTablet) && (
                    <div className="event-status-wrapper">
                      <div className="event-mini-wrapper">
                        <span>Total Pool Size:</span>
                        <span>$0.00</span>
                      </div>
                      <div className="event-mini-wrapper">
                        <span>Total number of Bets:</span>
                        <span>0</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="video-main-wrapper">
                  <div className="video-wrapper">
                    {item?.prediction_video?.length ? (
                      // <ReactPlayer
                      //   url={item?.prediction_video}
                      //   style={
                      //     screenSize < 1380 ||
                      //     screenSize < 1280 ||
                      //     screenSize < 768 ||
                      //     screenSize < 620 ||
                      //     screenSize < 420 ||
                      //     screenSize < 375
                      //       ? {
                      //           maxWidth: "320px",
                      //         }
                      //       : { maxWidth: "420px" }
                      //       ? { maxWidth: "420px" }
                      //       : {}
                      //       ? { maxWidth: "520px" }
                      //       : {}
                      //       ? { minWidth: "650px" }
                      //       : {}
                      //       ? { maxWidth: "355px", maxHeight: "240px" }
                      //       : {}
                      //       ? { maxWidth: "395px", maxHeight: "232px" }
                      //       : {
                      //           maxWidth: "472px",
                      //           maxHeight: "225px",
                      //         }
                      //   }
                      // />
                      <iframe
                        width="560"
                        height="315"
                        src={videoSrc}
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div>
                        <img src={Polygon} alt="video" />
                      </div>
                    )}
                  </div>
                  {screenSize < 768 ||
                    (screenSize < 821 && (
                      <div className="event-status-wrapper">
                        <div className="event-mini-wrapper">
                          <span>Total Pool Size:</span>
                          <span>$0.00</span>
                        </div>
                        <div className="event-mini-wrapper">
                          <span>Total number of Bets:</span>
                          <span>0</span>
                        </div>
                      </div>
                    ))}
                  <div className="event-status-main">
                    <div className="event-mini-main">
                      <img src={BetUiImg} alt="bet" />
                      <span>$0.00</span>
                    </div>
                    <div className="event-mini-main">
                      <img src={StruImg} alt="bet" />
                      <span>$0.00</span>
                    </div>
                    <div className="event-mini-main">
                      <div style={{ display: "flex" }}>
                        <img src={FreeBetImg} alt="bet" />
                      </div>
                      <span>0</span>
                    </div>
                  </div>
                </div>
              </div>
            </StatContainer>
          )}
      {/* // UFC && Football // */}
      {loading ? (
        <Loading />
      ) : (
        (item?.player_Img_1 || item?.flag_Img_1) && (
          <StatisticsContainer text="20px" textGap="12px">
            <div className="featured-banner-wrapper">
              <div className="flag_wrapper">
                {item?.player_Img_1 && (
                  <div>
                    <img src={item?.player_Img_1} alt={item?.player_name_1} />
                  </div>
                )}
                {item?.flag_Img_1 && (
                  <div>
                    <img src={item?.flag_Img_1} alt={item?.flag_name_1} />
                  </div>
                )}
                {item?.player_name_1 && <span>{item?.player_name_1}</span>}
                {item?.flag_name_1 && <span>{item?.flag_name_1}</span>}
              </div>
              <div className="statistic_rectangle">
                <span>Statistics:</span>
                {loading ? (
                  <Loading />
                ) : (
                  item?.coach_1 && (
                    <>
                      <span>Record: {item?.record_1}</span>
                      <span>Home Record: {item?.home_record_1}</span>
                      <span>Away Record: {item?.away_record_1}</span>
                      <span>
                        GF: {item?.gf_ga_gd_1.slice(0, 2)} GA:
                        {item?.gf_ga_gd_1.slice(3, 5)} GD:
                        {item?.gf_ga_gd_1.slice(6, 10)}
                      </span>
                      <span>Coach: {item?.coach_1}</span>
                      <span>LP: {item?.league_position_1}</span>
                      <span>Ranking: {item?.fifa_club_ranking_1}</span>
                    </>
                  )
                )}
                {loading ? (
                  <Loading />
                ) : (
                  item?.height_1 && (
                    <>
                      <span>Record: {item?.record_1}</span>
                      <span>Height: {item?.height_1}</span>
                      <span>Weight: {item?.weight_1}</span>
                      <span>Stance: {item?.stance_1}</span>
                      <span>Reach: {item?.reach_1}</span>
                      <span>Age: {item?.age_1}</span>
                      {/* <span>Ranking:{item?.fifa_club_ranking_1}</span> */}
                    </>
                  )
                )}
              </div>
              <div className="player-VS">
                <span>VS</span>
                <Times
                  date={loading ? <Loading /> : item?.event_date}
                  show={true}
                />
                <span id="val" style={{ color: "yellow" }}>
                  {loading ? <Loading /> : item?.pool_status}
                </span>
              </div>
              <div className="statistic_rectangle">
                <span>Statistics:</span>
                {loading ? (
                  <Loading />
                ) : (
                  item?.coach_2 && (
                    <>
                      {item?.record_2 && <span>Record: {item?.record_2}</span>}
                      <span>Home Record: {item?.home_record_2}</span>
                      <span>Away Record: {item?.away_record_2}</span>
                      <span>
                        GF: {item?.gf_ga_gd_2.slice(0, 2)} GA:
                        {item?.gf_ga_gd_2.slice(3, 5)} GD:
                        {item?.gf_ga_gd_2.slice(6, 10)}
                      </span>
                      <span>Coach: {item?.coach_2}</span>
                      <span>LP: {item?.league_position_2}</span>
                      <span>Ranking: {item?.fifa_club_ranking_2}</span>
                    </>
                  )
                )}
                {loading ? (
                  <Loading />
                ) : (
                  item?.height_2 && (
                    <>
                      <span>Record: {item?.record_2}</span>
                      <span>Height: {item?.height_2}</span>
                      <span>Weight: {item?.weight_2}</span>
                      <span>Stance: {item?.stance_2}</span>
                      <span>Reach: {item?.reach_2}</span>
                      <span>Age: {item?.age_2}</span>
                    </>
                  )
                )}
              </div>
              <div className="flag_wrapper">
                {item?.player_Img_2 && (
                  <div>
                    <img src={item?.player_Img_2} alt={item?.player_name_2} />
                  </div>
                )}
                {item?.flag_Img_2 && (
                  <div>
                    <img src={item?.flag_Img_2} alt={item?.flag_name_2} />
                  </div>
                )}
                {item?.player_name_2 && <span>{item?.player_name_2}</span>}
                {item?.flag_name_2 && <span>{item?.flag_name_2}</span>}
              </div>
            </div>
          </StatisticsContainer>
        )
      )}
      {/* // CryptoCurrencies  */}
      {group === "crypto-currencies" && (
        <StatContainerCurrencies bgImg={item?.background_img}>
          <div className="portfolio">
            <img src={item?.img_1} alt="BtcUp" />
            <span>{item?.title_1}</span>
          </div>
          <div className="vs">
            <div id="live">
              <p>{item?.title}</p>
              <p>POOL LIVE</p>
            </div>
            <div className="close">
              <div className="predict">
                <div className="clock">
                  <p>Predict Price on</p>
                  <div>
                    <img src={clock1} alt="clock1" />
                  </div>
                </div>
                <span>
                  {FormatDate(
                    item?.predict_date ? item?.predict_date : "2023-12-12T00:00"
                  )}
                  <br />
                  00:00 GMT
                </span>
              </div>
              <div className="predict">
                <div className="clock">
                  <p id="color">Pool Closes on</p>
                  <div>
                    {" "}
                    <img src={clock2} alt="clock2" />
                  </div>
                </div>
                <span>
                  {FormatDate(
                    item?.pool_close_date
                      ? item?.pool_close_date
                      : "2023-12-13T00:00"
                  )}
                  <br />
                  12:00 GMT
                </span>
              </div>
            </div>
            <div className="rectangle">
              <div className="stats">
                <p>Trading Volume:</p>
                {/* <span>{formatDollar(result[0]?.total_volume, 5)} </span> */}
                <span>$36,243,475,809</span>
              </div>
              <div className="stats">
                {" "}
                <p>24h Low / 24h High</p>
                {/* <span>
                    {formatDollar(result[0]?.low_24h, 5)}/{" "}
                    {formatDollar(result[0]?.high_24h, 5)}
                  </span> */}
                <span>$16433 / $17097</span>
              </div>
            </div>
          </div>

          <div className="portfolio">
            <div>
              <img src={item?.img_2} alt="BtcDown" />
            </div>
            <span>{item?.title_2}</span>
          </div>
        </StatContainerCurrencies>
      )}
      <BetNowBtns getPath={pathname} callback={callback} />
      <CurrencyConvertor />
      {/* <Tabs
        getId={item?.smart_contract_id}
        winId={addStyle}
        // getName={getName}
        getPrediction={item?.prediction_video || item?.u_prediction_video}
        getReview={item?.review_video || item?.u_preview_video}
        // eventStatus={eventStatus}
      /> */}
      {/* <Carousel /> */}
    </GetStatContainer>
  );
};

export default GetStatistics;
