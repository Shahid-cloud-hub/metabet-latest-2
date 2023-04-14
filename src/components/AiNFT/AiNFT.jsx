import React, { useEffect, useState } from "react";
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
import foxCircle from "../../assets/images/foxCircle.webp";
import DXY from "../../assets/images/DXY.webp";
import Bitcoin from "../../assets/images/Bitcoin.svg";
import Ethere from "../../assets/images/FeaturedEvent/Ethereum.webp";
import Football from "../../assets/images/PL.png";
import CricketGrey from "../../assets/images/Cricket.png";
import UFCGrey from "../../assets/images/UFC.png";
import trending from "../../assets/images/Politics.png";
import DXYW from "../../assets/images/DXYW.webp";
import BitcoinW from "../../assets/images/BitcoinW.webp";
import EthereW from "../../assets/images/FeaturedEvent/white-Ethereum.webp";
import CricketW from "../../assets/images/CricketW.webp";
import PoliticsW from "../../assets/images/PoliticsW.webp";
import FootballW from "../../assets/images/FootballW.webp";
import UFCW from "../../assets/images/UFCW.webp";
import twitter from "../../assets/images/ActiveBets/twitter.png";
import twitterO from "../../assets/images/ActiveBets/twitterO.png";
import twitterP from "../../assets/images/ActiveBets/twitterP.png";
import twittericon from "../../assets/images/ActiveBets/twittericon.png";
import currency from "../../assets/images/ActiveBets/currency.png";
import currencyicon from "../../assets/images/ActiveBets/currencyicon.png";
import crypto from "../../assets/images/ActiveBets/crypto.png";
import boxing from "../../assets/images/ActiveBets/boxing.png";
import boxingicon from "../../assets/images/boxingicon.png";
import footballicon from "../../assets/images/ActiveBets/footballicon.png";
import CricketNew from "../../assets/images/ActiveBets/cricketnew.png";
import RugbyW from "../../assets/images/RugbyW.png";
import Rugbyicon from "../../assets/images/rugbyicon.png";
import FormulaW from "../../assets/images/FormulaW.png";
import Formulaicon from "../../assets/images/formulaicon.png";
import HorseW from "../../assets/images/HorseW.png";
import Horseicon from "../../assets/images/horseicon.png";
import DartsW from "../../assets/images/DartsW.png";
import Dartsicon from "../../assets/images/darticon.png";
import VolleyballW from "../../assets/images/VolleyballW.webp";
import Volleyballicon from "../../assets/images/volleyballicon.png";
import GolfW from "../../assets/images/GolfW.png";
import golficon from "../../assets/images/golficon.png";
import SnookerW from "../../assets/images/SnookerW.png";
import Snookericon from "../../assets/images/snookericon.png";
import BaseballW from "../../assets/images/BaseballW.webp";
import baseballicon from "../../assets/images/baseballicon.png";
import TennisW from "../../assets/images/TennisW.webp";
import tennisicon from "../../assets/images/tennisicon.png";
import AmericanFootballW from "../../assets/images/AmericanFootballW.webp";
import americanfootballicon from "../../assets/images/americanfootballicon.png";
import BasketballW from "../../assets/images/BasketballW.webp";
import basketballicon from "../../assets/images/basketballicon.png";
import foxsmall from "../../assets/images/foxsmall.png";
import currencyO from "../../assets/images/ActiveBets/currencyO.png";
import currencyP from "../../assets/images/ActiveBets/currencyP.png";
import cryptoO from "../../assets/images/ActiveBets/cryptoO.png";
import cryptoP from "../../assets/images/ActiveBets/cryptoP.png";
import boxingO from "../../assets/images/ActiveBets/boxingO.png";
import boxingP from "../../assets/images/ActiveBets/boxingP.png";
import CricketO from "../../assets/images/ActiveBets/CricketO.png";
import CricketP from "../../assets/images/ActiveBets/CricketP.png";
import FootballO from "../../assets/images/ActiveBets/FootballO.png";
import FootballP from "../../assets/images/ActiveBets/FootballP.png";
import FormulaO from "../../assets/images/ActiveBets/FormulaO.png";
import FormulaP from "../../assets/images/ActiveBets/FormulaP.png";
import BasketballO from "../../assets/images/ActiveBets/BasketballO.png";
import BasketballP from "../../assets/images/ActiveBets/BasketballP.png";
import TennisO from "../../assets/images/ActiveBets/TennisO.png";
import TennisP from "../../assets/images/ActiveBets/TennisP.png";
import AmericanFootballO from "../../assets/images/ActiveBets/AmericanFootballO.png";
import AmericanFootballP from "../../assets/images/ActiveBets/AmericanFootballP.png";
import BaseballO from "../../assets/images/ActiveBets/BaseballO.png";
import BaseballP from "../../assets/images/ActiveBets/BaseballP.png";
import SnookerO from "../../assets/images/ActiveBets/SnookerO.png";
import SnookerP from "../../assets/images/ActiveBets/SnookerP.png";
import GolfO from "../../assets/images/ActiveBets/GolfO.png";
import GolfP from "../../assets/images/ActiveBets/GolfP.png";
import RugbyO from "../../assets/images/ActiveBets/RugbyO.png";
import RugbyP from "../../assets/images/ActiveBets/RugbyP.png";
import DartsO from "../../assets/images/ActiveBets/DartsO.png";
import DartsP from "../../assets/images/ActiveBets/DartsP.png";
import HorseO from "../../assets/images/ActiveBets/HorseO.png";
import HorseP from "../../assets/images/ActiveBets/HorseP.png";
import VolleyballO from "../../assets/images/ActiveBets/VolleyballO.png";
import VolleyballP from "../../assets/images/ActiveBets/VolleyballP.png";
import ufcN from "../../assets/images/ActiveBets/UFC.png";
import ufcP from "../../assets/images/ActiveBets/UFCP.png";

const AiNFT = () => {
  const [itemData, setItemData] = useState(Filter);
  const [getName, setGetName] = useState("all");
  const { fetchData, response } = useAxios();
  const { isDesktop, isSmallDesktop, isTablet } = useBreakpoint();
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

  const hightlightData = response?.map(
    (item) => item?.event?.highlights[0]?.stats?.data?.smart_contract_id
  );

  const arrData =
    hightlightData == undefined ? [] : Object.values(hightlightData);

  const screenSize = window.screen.availWidth;

  return (
    <AINFTContainer>
      <div className="ai-logo">
        <img src={AILogoImg} alt="AI NFT" />
      </div>
      {/* <div className="ai-filter-btn">
        <AiFilter
          filterItem={filterItem}
          setItemData={setItemData}
          menuItems={menuItems}
          callbackName={callbackName}
          activeBet={true}
        />
      </div> */}
      <div className="parent-wrapper-filter">
        <AiDropDownFilterBtn
          options={[
            { name: "All", value: "all", defaultValue: true },
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
