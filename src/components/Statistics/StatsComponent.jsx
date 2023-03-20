import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import { betNowData } from "../../JasonData/FeaturedBannerData";
import { StatContainerCurrencies } from "../BitcoinPrice/BitcoinPrice.styles";
import Loading from "../Loading/Loading";
import Tabs from "../TabFifa/Tab";
import Times from "../Time/Times";
import { Info, StatisticsContainer } from "./Stats.syle";
import useBreakpoint from "../../hooks/useBreakpoints";
import BtcUp from "../../assets/images/Bitcoin/BtcUp.webp";
import BtcDown from "../../assets/images/Bitcoin/BtcDown.webp";
import clock1 from "../../assets/images/BitcoinPrice/clock1.png";
import clock2 from "../../assets/images/BitcoinPrice/clock2.png";

const StatsComponent = () => {
  let { group, title, id } = useParams();
  const { fetchData, response, loading } = useAxios();
  const [addStyle, setAddStyle] = useState();

  const getBanners = async () => {
    await fetchData({
      method: "GET",
      url: `https://dull-puce-wildebeest-belt.cyclic.app/getGroup/${group}/${title}/${id}/stats`,
    });
  };
  const item = response?.stats?.data;

  useEffect(() => {
    getBanners();
    window.scrollTo(0, 0);
  }, [group, title, id]);

  console.log("title", item);

  const FormatDate = (dateNumber) => {
    const ev_date = new Date(dateNumber);
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
    const formattedDate = new Intl.DateTimeFormat("en-GB", options)?.format(
      ev_date
    );
    // formattedDate.split(/[\s,]+/) this is used to add or remove the (-, " ") from particular sentence
    const [day, month] = formattedDate.split(/[\s,]+/);
    console.log(day, month); // Output: "28 Feb 2023"

    return formattedDate;
  };

  return (
    <>
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
      {item?.player_Img_1 && (
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
              {loading
                ? item?.coach_1 && <Loading />
                : item?.coach_1 && (
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
              {loading
                ? item?.coach_2 && <Loading />
                : item?.coach_2 && (
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
      )}
      <Info>
        {betNowData.map((item) => (
          <div className="WIN" key={item.id}>
            <p> {item.name}</p>
            <button
              onClick={() => setAddStyle(item.id)}
              style={
                item.id === addStyle
                  ? { background: "#fc4c1e" }
                  : { background: "#7b7b7b" }
              }
            >
              {item.btn}
            </button>
          </div>
        ))}
      </Info>
      <Tabs
        getId={item?.smart_contract_id}
        winId={addStyle}
        // getName={getName}
        getPrediction={item?.prediction_video || item?.u_prediction_video}
        getReview={item?.review_video || item?.u_preview_video}
        // eventStatus={eventStatus}
      />
    </>
  );
};

export default StatsComponent;
