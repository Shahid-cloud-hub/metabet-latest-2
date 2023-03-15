import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import Loading from "../Loading/Loading";
import { StatContainer } from "../Politics/Politics.styles";
import Tabs from "../TabFifa/Tab";
import Times from "../Time/Times";
import { Info, StatisticsContainer } from "./Stats.syle";
import clock1 from "../../assets/images/BitcoinPrice/clock1.png";
import clock2 from "../../assets/images/BitcoinPrice/clock2.png";
import BetNowBtns from "../BetNowBtns/BetNowBtns";
import Carousel from "../Politics/Carousel/Carousel";

const GetStatistics = () => {
  let { group, title, id } = useParams();
  const { pathname } = useLocation();
  const { fetchData, response, loading } = useAxios();
  const [addStyle, setAddStyle] = useState();

  const callback = (id) => {
    setAddStyle(id);
  };

  console.log("Get Parent ", addStyle);

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

  // const FormatDate = (dateNumber) => {
  //   const date = new Date(dateNumber);
  //   const options = {
  //     // weekday: "long",
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //     // hour: "numeric",
  //     // minute: "numeric",
  //     // second: "numeric",
  //     timeZoneName: "short",
  //   };
  //   const humanReadableDate = date?.toLocaleString("en-US", options);
  //   const noSpacesDate = humanReadableDate?.replace(/\s/g, "");
  //   console.log(noSpacesDate);

  //   const day = noSpacesDate.slice(8, 10);
  //   const month = humanReadableDate.substr(0, 3);
  //   const year = humanReadableDate.substr(13, 4);

  //   const reversedDate = day + month + year;
  //   const SpacesDate = reversedDate?.replace(/\s/g, " ");

  //   // const day = humanReadableDate.substr(0, 3);
  //   console.log(SpacesDate, "date");

  //   return humanReadableDate;
  // };

  const FormatDate = (dateNumber) => {
    const date = new Date(dateNumber);
    const options = {
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      // year: "numeric",
      timeZoneName: "short",
    };
    const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
      date
    );
    // formattedDate.split(/[\s,]+/) this is used to add or remove the (-, " ") from particular sentence
    const [day, month, timeZoneName] = formattedDate.split(/[\s,]+/);
    console.log(day, month, timeZoneName); // Output: "28 Feb 2023"

    return formattedDate;
  };

  return (
    <>
      {/* // Trending Event // */}
      {loading
        ? item?.stats_title && <Loading />
        : item?.stats_title && (
            <StatContainer>
              <div className="rectangle">
                {/* <span>Statistic:</span> */}
                <span>{item?.stats_title}</span>
              </div>
              <div className="vs">
                <div id="live">
                  <span>POOL LIVE</span>
                </div>
                {item?.title && <span>{item?.title}</span>}
                <div className="close">
                  <div className="outcome">
                    <div className="clock">
                      <span>Predict Outcome</span>
                      <div>
                        <img src={clock1} alt="clock1" />
                      </div>
                    </div>
                  </div>
                  <div className="predict">
                    <div className="clock">
                      <span>Pool Closes on</span>
                      <div>
                        <img src={clock2} alt="clock2" />
                      </div>
                    </div>
                    <span>{FormatDate(item?.date)}</span>
                  </div>
                </div>
              </div>
              <div className="portfolio">
                <img
                  src={item?.background_img}
                  width={450}
                  alt="Politics_member"
                />
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
                <Times date={loading ? <Loading /> : item?.event_date} />
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
      {/* // Currencies and Crypto-Currencies // */}
      <Info>
        <BetNowBtns getPath={pathname} callback={callback} />
      </Info>
      <Tabs
        getId={item?.smart_contract_id}
        winId={addStyle}
        // getName={getName}
        getPrediction={item?.prediction_video || item?.u_prediction_video}
        getReview={item?.review_video || item?.u_preview_video}
        // eventStatus={eventStatus}
      />
      <Carousel />
    </>
  );
};

export default GetStatistics;
