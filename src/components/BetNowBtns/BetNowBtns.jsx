import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import {
  andrew,
  bData,
  betNowData,
  China,
  crap,
  crufts,
  Cryptocurrency,
  Currency,
  Dana,
  DCG,
  DXY,
  ethereum,
  FED,
  Genesis,
  Grayscale,
  Kardashian,
  rain,
  Richest,
  SBF,
  Silvergate,
  TruscData,
  Twitter,
  US,
  Volodymyr,
  Win,
} from "../../JasonData/FeaturedBannerData";
import { Info } from "../Statistics/Stats.syle";

const BetNowBtns = ({ getPath, callback }) => {
  const [addStyle, setAddStyle] = useState();
  let { title, id } = useParams();
  const callStyle = (bet_btn_id) => {
    callback(bet_btn_id);
    setAddStyle(bet_btn_id);
  };

  const getBetBowData = (type) => {
    let betNowData;
    switch (type) {
      case `/trending-event/andrew-tate/statistics/${id}`:
        betNowData = andrew;
        break;
      case `/trending-event/kardashian-sis/statistics/${id}`:
        betNowData = Kardashian;
        break;
      case `/trending-event/fed-raise/statistics/${id}`:
        betNowData = FED;
        break;
      case `/trending-event/crufts/statistics/${id}`:
        betNowData = crufts;
        break;
      case `/trending-event/dxy/statistics/${id}`:
        betNowData = DXY;
        break;
      case `/trending-event/sam-bankman-fried/statistics/${id}`:
        betNowData = SBF;
        break;
      case `/trending-event/cryptocurrency/statistics/${id}`:
        betNowData = Cryptocurrency;
        break;
      case `/trending-event/grayscale/statistics/${id}`:
        betNowData = Grayscale;
        break;
      case `/trending-event/twitter-ceo/statistics/${id}`:
        betNowData = Twitter;
        break;
      case `/trending-event/ethereum-market/statistics/${id}`:
        betNowData = ethereum;
        break;
      case `/trending-event/genesis-file/statistics/${id}`:
        betNowData = Genesis;
        break;
      case `/trending-event/dcg-file/statistics/${id}`:
        betNowData = DCG;
        break;
      case `/trending-event/silvergate-bank/statistics/${id}`:
        betNowData = Silvergate;
        break;
      case `/trending-event/flights-from-china/statistics/${id}`:
        betNowData = China;
        break;
      case `/trending-event/worlds-richest-man/statistics/${id}`:
        betNowData = Richest;
        break;
      case `/trending-event/dana-white/statistics/${id}`:
        betNowData = Dana;
        break;
      case `/trending-event/united-states-default/statistics/${id}`:
        betNowData = US;
        break;
      case `/trending-event/volodymyr-zelensky/statistics/${id}`:
        betNowData = Volodymyr;
        break;
      case `/trending-event/who-will-win/statistics/${id}`:
        betNowData = Win;
        break;
      case `/trending-event/wimbledon/statistics/${id}`:
        betNowData = rain;
        break;
      case `/trending-event/crap-fishing/statistics/${id}`:
        betNowData = crap;
        break;
      case `/crypto-currencies/${title}/statistics/${id}`:
        betNowData = bData;
        break;
      case `/crypto-currencies/${title}/stats/${id}`:
        betNowData = bData;
        break;
      case `/currencies/${title}/statistics/${id}`:
        betNowData = Currency;
        break;
      case `/currencies/${title}/stats/${id}`:
        betNowData = Currency;
        break;
    }
    return {
      betNowData,
    };
  };

  const { betNowData } = getBetBowData(getPath);

  const size = betNowData?.length;

  const screenSize = window?.screen?.availWidth;

  return (
    <Info
      betType={size > 2 || size >= 3 ? "flex" : "" ? "grid" : "flex"}
      betWrap={size >= 3 ? "wrap" : ""}
      betDir={size > 2 || size >= 3 ? "1fr 1fr" : ""}
      betMaxWidth={size > 2 || size >= 3 ? "1080px" : "" ? "971px" : ""}
      betMargin={size > 2 || size >= 3 ? "0 auto" : ""}
    >
      {betNowData?.map((item) => (
        <>
          <div
            className="bet-details-wrapper"
            // style={
            //   screenSize < 1380 ||
            //   screenSize < 1280 ||
            //   screenSize < 768 ||
            //   screenSize > 1380 ||
            //   screenSize < 825
            //     ? { width: "100%" }
            //     : {}
            //     ? { width: item?.width && item?.width }
            //     : {}
            //     ? { width: "100%" }
            //     : {}
            //     ? { width: "340px" }
            //     : {}
            //     ? { width: "380px" }
            //     : { width: item?.width && item?.width }
            // }
          >
            <span className="bet-title">{item.name}</span>
            <hr />
            <div className="bet-status-box-wrapper">
              {TruscData?.map((item) => (
                <div className="bet-status-box">
                  <span className="bet-status-title">{item.title}</span>
                  <span className="bet-status-count">{item.placeholder}</span>
                </div>
              ))}
            </div>
            <div className="bet-amount-wrapper">
              <div className="bet-amount">
                <span>Amount</span>
                <input type="text" placeholder="$0.00" disabled />
              </div>
              <button>Bet</button>
            </div>
          </div>
          {/* <div className="liquidity-pool">
            <span>Yes</span>
            <hr />

            <div className="fox-stats">
              {TruscData?.map((item) => (
                <div className="text">
                  <span id="title">{item.title}</span>
                  <input type="text" placeholder={item.placeholder} disabled />
                </div>
              ))}
            </div>
            <div className="amount">
              <div className="amountText">
                <span>Amount</span>
                <input type="text" placeholder="$0.00" disabled />
              </div>
              <button>Bet</button>
            </div>
          </div> */}
          {/* <div className="win_wrapper" style={{ gap: item?.gap }}>
            {item?.img && (
              <div className="Kardashian">
                <img src={item?.img} alt="img" />
              </div>
            )}
            <div
              className="WIN"
              key={item.id}
              // style={{ width: item?.width, height: item?.height }}
            >
              <p>
                {" "}
                {item.name}
                {item?.icon && <img src={item.icon} alt="icon" />}
              </p>
              <button
                onClick={() => callStyle(item.id)}
                style={
                  item.id === addStyle
                    ? { background: "#fc4c1e" }
                    : { background: "#7b7b7b" }
                }
              >
                {item.btn}
              </button>
            </div>
            {item?.Pool_size && (
              <div>
                <div className="betStat">
                  <div>
                    <span>{item?.Pool_size}</span>
                    <span id="clr">$873782</span>
                  </div>
                  <div>
                    <span>{item?.bet_number}</span>
                    <span id="clr">36262</span>
                  </div>
                  <div>
                    <span>{item?.odds}</span>
                    <span id="clr">1.2</span>
                  </div>
                </div>
              </div>
            )}
          </div> */}
        </>
      ))}
    </Info>
  );
};

export default BetNowBtns;
