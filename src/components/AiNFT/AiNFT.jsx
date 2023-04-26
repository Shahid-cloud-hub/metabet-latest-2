import React, { useState } from "react";
import AILogoImg from "../../assets/images/Ai-NFT/ai.png";
import { AINFTContainer } from "./AINFT.Style";
import AiFilter from "./AiFilter";
import { Filter } from "../ActiveBet/ActiveBetData";
import { useAxios } from "../../hooks/useAxios";
import AiDropDownFilter from "./AiDropDownFilter";
import AiDropDownFilterBtn from "./AiDropDownFiterBtn";

// Components //
import MarketPlaceComponent from "./MarketPlaceComponent/MarketPlaceComponent";
import MyNFTComponent from "./MyNFTComponent/MyNFTComponent";
import LeaderboardComponent from "./LeaderboardComponent/LeaderboardComponent";
import useBreakpoint from "../../hooks/useBreakpoints";

// filter images
import FootballW from "../../assets/images/ai-filter/FootballW.webp";
import FootballP from "../../assets/images/ai-filter/FootballP.png";
import twitter from "../../assets/images/ai-filter/twitter.png";
import twitterP from "../../assets/images/ai-filter/twitterP.png";
import currency from "../../assets/images/ai-filter/currency.png";
import currencyP from "../../assets/images/ai-filter/currencyP.png";
import crypto from "../../assets/images/ai-filter/crypto.png";
import cryptoP from "../../assets/images/ai-filter/cryptoP.png";
import CricketNew from "../../assets/images/ai-filter/cricketnew.png";
import CricketP from "../../assets/images/ai-filter/CricketP.png";
import FormulaW from "../../assets/images/FormulaW.png";
import FormulaP from "../../assets/images/ai-filter/FormulaP.png";
import BasketballW from "../../assets/images/ai-filter/basketballW.webp";
import BasketballP from "../../assets/images/ai-filter/BasketballP.png";
import TennisW from "../../assets/images/ai-filter/TennisW.webp";
import TennisP from "../../assets/images/ai-filter/TennisP.png";
import AmericanFootballW from "../../assets/images/ai-filter/AmericanFootballW.webp";
import AmericanFootballP from "../../assets/images/ai-filter/AmericanFootballP.png";
import boxing from "../../assets/images/ai-filter/boxing.png";
import boxingP from "../../assets/images/ai-filter/boxingP.png";
import BaseballW from "../../assets/images/ai-filter/BaseballW.webp";
import BaseballP from "../../assets/images/ai-filter/BaseballP.png";
import SnookerW from "../../assets/images/SnookerW.png";
import SnookerP from "../../assets/images/ai-filter/SnookerP.png";
import GolfW from "../../assets/images/ai-filter/GolfW.png";
import GolfP from "../../assets/images/ai-filter/GolfP.png";
import RugbyW from "../../assets/images/ai-filter/RugbyW.png";
import RugbyP from "../../assets/images/ai-filter/RugbyP.png";
import VolleyballW from "../../assets/images/ai-filter/VolleyballW.webp";
import VolleyballP from "../../assets/images/ai-filter/VolleyballP.png";
import HorseW from "../../assets/images/ai-filter/HorseW.png";
import HorseP from "../../assets/images/ai-filter/HorseP.png";
import DartsW from "../../assets/images/ai-filter/DartsW.png";
import DartsP from "../../assets/images/ai-filter/DartsP.png";

import ufcN from "../../assets/images/ai-filter/UFC.webp";
import ufcP from "../../assets/images/ai-filter/UFCP.png";

const AiNFT = () => {
  const [itemData, setItemData] = useState(Filter);
  const [getName, setGetName] = useState("all");
  const { fetchData, response } = useAxios();
  const { isDesktop, isSmallDesktop, isTablet, isSmallMobile, isMobile } =
    useBreakpoint();
  const [change, setChange] = useState({
    myNFT: false,
    MarketPlace: true,
    Leaderboard: false,
  });

  const uniqueNames = [...new Set(Filter.map((item) => item.name))];
  const menuItems = uniqueNames.map((nameObj) => {
    const filterItem = Filter.find((item) => item.name == nameObj);
    const imgV = filterItem ? filterItem.img : null;
    const imgO = filterItem ? filterItem.imgO : null;
    const imgP = filterItem ? filterItem.imgP : null;

    return { name: nameObj, imgV, imgO, imgP };
  });

  const filterItem = (curcat) => {
    console.log(curcat, "filterItem");
    const newItem = Filter.filter((newVal) => {
      console.log("check", newVal.name === curcat);
      return newVal.name === curcat;
    });
    setItemData(newItem);
  };

  const callbackName = (name) => {
    setGetName(name);
  };

  let title = getName;

  // if (getName === "all") {
  //   const getAllEvents = async () => {
  //     await fetchData({
  //       method: "GET",
  //       url: `https://dull-puce-wildebeest-belt.cyclic.app/group`,
  //     });
  //   };

  //   useEffect(() => {
  //     getAllEvents();
  //     window.scrollTo(0, 0);
  //   }, [title]);
  // } else {
  //   const getBanners = async () => {
  //     await fetchData({
  //       method: "GET",
  //       url: `https://dull-puce-wildebeest-belt.cyclic.app/getGroup/group/${title}`,
  //     });
  //   };
  //   useEffect(() => {
  //     getBanners();
  //     window.scrollTo(0, 0);
  //   }, [title]);
  // }

  return (
    <AINFTContainer>
      <div className="ai-logo">
        <img src={AILogoImg} alt="AI NFT" />
      </div>
      <div className="ai-filter-btn">
        <AiFilter
          filterItem={filterItem}
          setItemData={setItemData}
          menuItems={menuItems}
          callbackName={callbackName}
          activeBet={true}
        />
      </div>
      <div className="parent-wrapper-filter">
        <AiDropDownFilterBtn
          options={[
            { name: "Select Event Category", value: "", defaultValue: true },
            {
              name: "Social Media",
              value: "social-media",
              img: twitter,
              imgp: twitterP,
            },
            {
              name: "Currencies",
              value: "currencies",
              img: currency,
              imgp: currencyP,
            },
            {
              name: "Crypto Currencies",
              value: "crypto-currencies",
              img: crypto,
              imgp: cryptoP,
            },
            { name: "Boxing", value: "boxing", img: boxing, imgp: boxingP },
            {
              name: "Cricket",
              value: "cricket",
              img: CricketNew,
              imgp: CricketP,
            },
            { img: ufcN, imgp: ufcP, value: "ufc" },
            {
              name: "Football",
              value: "football",
              img: FootballW,
              imgp: FootballP,
            },
            {
              name: "Formula One",
              value: "formula-one",
              img: FormulaW,
              imgp: FormulaP,
            },
            {
              name: "Basketball",
              value: "basketball",
              img: BasketballW,
              imgp: BasketballP,
            },
            {
              name: "Tennis",
              value: "tennis",
              img: TennisW,
              imgp: TennisP,
            },
            {
              name: "American Football",
              value: "american-football",
              img: AmericanFootballW,
              imgp: AmericanFootballP,
            },
            {
              name: "Baseball",
              value: "baseball",
              img: BaseballW,
              imgp: BaseballP,
            },
            {
              name: "Snooker",
              value: "snooker",
              img: SnookerW,
              imgp: SnookerP,
            },
            {
              name: "Golf",
              value: "golf",
              img: GolfW,
              imgp: GolfP,
            },
            {
              name: "Rugby",
              value: "rugby",
              img: RugbyW,
              imgp: RugbyP,
            },
            {
              name: "Volleyball",
              value: "volleyball",
              img: VolleyballW,
              imgp: VolleyballP,
            },
            {
              name: "Darts",
              value: "Darts",
              img: DartsW,
              imgp: DartsP,
            },
            {
              name: "Horse Racing",
              value: "horse-racing",
              img: HorseW,
              imgp: HorseP,
            },
          ]}
        />
      </div>
      {isSmallDesktop && (
        <div className="parent-wrapper">
          <AiDropDownFilter
            options={[
              { name: "Sales High/Low", value: "all", defaultValue: true },
              { name: "Size", value: "size" },
              { name: "Live", value: "live" },
              { name: "Ended", value: "ended" },
              { name: "Number Bets", value: "number_bets" },
              { name: "Ending Soon", value: "ending_soon" },
            ]}
            onChange={(e) => {
              // console.log(e.target.value);
            }}
          />
        </div>
      )}

      <div className="market-place-btn">
        <button
          className={change.myNFT ? "myNFT-active" : "myNFT-de-active"}
          onClick={() =>
            setChange((prev) => ({
              ...prev,
              myNFT: true,
              MarketPlace: false,
              Leaderboard: false,
            }))
          }
        >
          My NFTS
        </button>
        <button
          className={change.MarketPlace ? "myNFT-active" : "myNFT-de-active"}
          onClick={() =>
            setChange((prev) => ({
              ...prev,
              myNFT: false,
              MarketPlace: true,
              Leaderboard: false,
            }))
          }
        >
          Marketplace
        </button>
        <button
          className={change.Leaderboard ? "myNFT-active" : "myNFT-de-active"}
          onClick={() =>
            setChange((prev) => ({
              ...prev,
              myNFT: false,
              MarketPlace: false,
              Leaderboard: true,
            }))
          }
        >
          Leaderboard
        </button>
      </div>
      <div className="market-place-filter-btn">
        <div className="parent-wrapper">
          {(change.myNFT || change.MarketPlace) && (
            <AiDropDownFilter
              options={[
                { name: "Sales High/Low", value: "all", defaultValue: true },
                { name: "Size", value: "size" },
                { name: "Live", value: "live" },
                { name: "Ended", value: "ended" },
                { name: "Number Bets", value: "number_bets" },
                { name: "Ending Soon", value: "ending_soon" },
              ]}
              onChange={(e) => {
                // console.log(e.target.value);
              }}
            />
          )}
        </div>
        <div className="parent-wrapper">
          <AiDropDownFilter
            options={[
              { name: "Price High/Low", value: "all", defaultValue: true },
              { name: "Size", value: "size" },
              { name: "Live", value: "live" },
              { name: "Ended", value: "ended" },
              { name: "Number Bets", value: "number_bets" },
              { name: "Ending Soon", value: "ending_soon" },
            ]}
            onChange={(e) => {
              // console.log(e.target.value);
            }}
          />
        </div>
        <div className="parent-wrapper">
          <AiDropDownFilter
            options={[
              { name: "Score High/Low", value: "all", defaultValue: true },
              { name: "Size", value: "size" },
              { name: "Live", value: "live" },
              { name: "Ended", value: "ended" },
              { name: "Number Bets", value: "number_bets" },
              { name: "Ending Soon", value: "ending_soon" },
            ]}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>
      </div>
      {(change.myNFT && <MyNFTComponent />) ||
        (change.MarketPlace && <MarketPlaceComponent />) ||
        (change.Leaderboard && <LeaderboardComponent />)}
    </AINFTContainer>
  );
};

export default AiNFT;
