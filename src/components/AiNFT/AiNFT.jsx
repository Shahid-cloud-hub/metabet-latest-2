import React, { useEffect, useState } from "react";
import AILogoImg from "../../assets/images/Ai-NFT/ai.png";
import stick from "../../assets/images/Ai-NFT/stick.png";
import chainlink from "../../assets/images/Ai-NFT/chainlink.png";
import upload from "../../assets/images/Ai-NFT/upload-icon.png";
import instagram from "../../assets/images/Ai-NFT/Instagram.png";
import twitter from "../../assets/images/Ai-NFT/twitter.png";
import facebook from "../../assets/images/Ai-NFT/facebook.png";
import forbes from "../../assets/images/Ai-NFT/forbes.png";
import trading from "../../assets/images/Ai-NFT/trading.png";
import pencil from "../../assets/images/Ai-NFT/pencil.png";
import dollarYellow from "../../assets/images/Ai-NFT/dollar-yellow.png";
import mainImg1 from "../../assets/images/Ai-NFT/main-img1.svg";
import { AINFTContainer, MarketPlaceContainer } from "./AINFT.Style";
import AiFilter from "./AiFilter";
import { Filter } from "../ActiveBet/ActiveBetData";
import { useAxios } from "../../hooks/useAxios";
import AiDropDownFilter from "./AiDropDownFilter";
import Maintenance from "../Maintenance/Maintenance";

const MyNFTComponent = () => {
  return <Maintenance />;
};

const MarketPlaceComponent = () => {
  return (
    <MarketPlaceContainer>
      <div className="cryptoAi">
        <div className="head">
          <span id="purple">CryptoAi</span>
          <img src={mainImg1} alt="mainImg1" />
          <span id="white">Donald Trump</span>
        </div>
        <div className="stats">
          <div className="cryptoScore">
            <div className="score">
              <span id="purple">CryptoAi Score:</span>
              <span id="white">149</span>
            </div>
            <div className="score">
              <span id="purple">Rank:</span>
              <span id="white">12</span>
            </div>
          </div>
          <div className="Address">
            <div className="cryptoId">
              <span>3BV2...76D723623</span>
              <img src={stick} alt="stick" />
            </div>
            <img src={chainlink} alt="chainlink" />
            <img src={upload} alt="upload" />
          </div>
        </div>
        <div className="Social">
          <div className="list">
            <div className="item">
              <img src={instagram} alt="instagram" />
              <span>Instagram Followers:</span>
            </div>
            <div className="item">
              <img src={twitter} alt="twitter" />
              <span>Twitter Followers:</span>
            </div>
            <div className="item">
              <img src={facebook} alt="facebook" />
              <span>Facebook Followers:</span>
            </div>
            <div className="item">
              <img src={forbes} alt="forbes" />
              <span>Rich List Billions:</span>
            </div>
            <div className="item">
              <img src={trading} alt="trading" />
              <span>Trading Volume $:</span>
            </div>
          </div>
          <div className="list1">
            <span>23m</span>
            <span>87m</span>
            <span>34m</span>
            <span>3b</span>
            <span>22</span>
          </div>
        </div>
        <div className="priceButton">
          <div className="last-price">
            <span>Last Price</span>
            <div>
              <img src={dollarYellow} alt="dollarYellow" />
              <span>12.00</span>
            </div>
          </div>
          <div className="sale-price">
            <span>Sale Price</span>
            <div>
              <img src={dollarYellow} alt="dollarYellow" />
              <span>12.00</span>
              <img src={pencil} alt="pencil" />
            </div>
          </div>
          <div className="next-price">
            <span>Next Price</span>
            <div>
              <img src={dollarYellow} alt="dollarYellow" />
              <span>17.28</span>
            </div>
          </div>
        </div>
        <div className="wallet">
          <div className="wrapper-main-nft">
            <div>
              <div className="wallet-list">
                <span id="wallet">Wallet</span>
                <span id="buy">BUY</span>
                <span>
                  be23x......326bdg2v <img src={stick} alt="icon" />
                </span>
                <span>
                  be23x......326bdg2v <img src={stick} alt="icon" />
                </span>
                <span></span>
              </div>
              <div className="price-list">
                <span id="buy">Price</span>
                <span>
                  <img src={dollarYellow} alt="icon" /> 14.00
                </span>
                <span>
                  <img src={dollarYellow} alt="icon" /> 12.00
                </span>
                <span>
                  <img src={dollarYellow} alt="icon" /> 10.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MarketPlaceContainer>
  );
};

const LeaderboardComponent = () => {
  return <Maintenance />;
};

const AiNFT = () => {
  const [itemData, setItemData] = useState(Filter);
  const [getName, setGetName] = useState("all");
  const { fetchData, response } = useAxios();

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

  if (getName === "all") {
    const getAllEvents = async () => {
      await fetchData({
        method: "GET",
        url: `https://dull-puce-wildebeest-belt.cyclic.app/group`,
      });
    };

    useEffect(() => {
      getAllEvents();
      window.scrollTo(0, 0);
    }, [title]);
  } else {
    const getBanners = async () => {
      await fetchData({
        method: "GET",
        url: `https://dull-puce-wildebeest-belt.cyclic.app/getGroup/group/${title}`,
      });
    };
    useEffect(() => {
      getBanners();
      window.scrollTo(0, 0);
    }, [title]);
  }

  const hightlightData = response?.map(
    (item) => item?.event?.highlights[0]?.stats?.data?.smart_contract_id
  );

  const arrData =
    hightlightData == undefined ? [] : Object.values(hightlightData);

  const [change, setChange] = useState({
    myNFT: false,
    MarketPlace: true,
    Leaderboard: false,
  });

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
              console.log(e.target.value);
            }}
          />
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
              console.log(e.target.value);
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
