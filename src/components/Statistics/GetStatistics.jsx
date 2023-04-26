import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import Loading from "../Loading/Loading";
import { StatContainer } from "../Politics/Politics.styles";
import { GetStatContainer } from "./Stats.syle";
import BetNowBtns from "../BetNowBtns/BetNowBtns";

import Polygon from "../../assets/images/Polygon.png";
import clock from "../../assets/images/count_down_clock.svg";

import BetUiImg from "../../assets/images/bet-ui/bet.png";
import StruImg from "../../assets/images/bet-ui/stru.png";
import FreeBetImg from "../../assets/images/bet-ui/betFree.png";
import CurrencyConvertor from "../CurrencyConvertor/CurrencyConvertor";
import useBreakpoint from "../../hooks/useBreakpoints";

const GetStatistics = () => {
  let { group, title, id } = useParams();
  const { pathname } = useLocation();
  const { fetchData, response, loading } = useAxios();
  const [addStyle, setAddStyle] = useState();
  const { isDesktop, isTablet } = useBreakpoint();

  const [firstPart, setFirstPart] = useState("");
  const [secondPart, setSecondPart] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    getBanners();
  }, [group, title, id]);

  const callback = (id) => {
    setAddStyle(id);
  };

  const getBanners = async () => {
    await fetchData({
      method: "GET",
      url: `https://dull-puce-wildebeest-belt.cyclic.app/getEvent/${id}`,
    });
  };

  console.log("first", response);

  const item = response?.event;

  useEffect(() => {
    const middleIndex = Math.floor(item?.pc_banner_title?.length / 1.3);
    setFirstPart(item?.pc_banner_title?.slice(0, middleIndex));
    setSecondPart(item?.pc_banner_title?.slice(middleIndex));
  }, [item?.pc_banner_title]);

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

  const descSize = item?.pc_banner_description?.length;

  const result = item?.verdict_title?.length;

  let screenSize = window?.screen?.availWidth;

  const youTubeCode = item?.youtube_link?.slice(17, 35);

  console.log("youTubeCode", loading);

  const videoSrc = `https://www.youtube.com/embed/${youTubeCode}`;

  return (
    <GetStatContainer>
      {/* // Trending Event // */}
      {loading ? (
        <Loading />
      ) : (
        <StatContainer
          increaseFontSize={result > 45 ? "18px" : "26px"}
          increaseGapSize={descSize > 270 ? "36px" : "21px"}
        >
          <div className="event-first-item">
            <div className="event-detials-main">
              <div className="event-details-wrapper">
                {(group == "currencies" || group == "crypto-currencies") && (
                  <span className="event-title">
                    <span className="blue">{firstPart}</span>
                    <span className="white">{secondPart}</span>
                  </span>
                )}
                <span className="event-title">{item?.pc_banner_title}</span>
                <div className="img-wrapper">
                  <img src={item?.pc_banner} height="100px" alt="event image" />
                  <div className="event-desc">
                    <div className="event-time">
                      <div>
                        <img src={clock} alt="clock" />
                      </div>
                    </div>
                  </div>
                </div>
                <span>{item?.pc_banner_description}</span>
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
                {item?.youtube_link?.length ? (
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
      <BetNowBtns getPath={pathname} callback={callback} />
      <CurrencyConvertor />
    </GetStatContainer>
  );
};

export default GetStatistics;
