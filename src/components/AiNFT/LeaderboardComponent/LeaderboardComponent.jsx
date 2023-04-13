import React from "react";
import Maintenance from "../../Maintenance/Maintenance";
import { LeaderboardContainer } from "../AINFT.Style";
import crown1 from "../../../assets/images/Ai-NFT/Leaderboard/crown-silver.png";
import crown2 from "../../../assets/images/Ai-NFT/Leaderboard/crown-gold.png";
import crown3 from "../../../assets/images/Ai-NFT/Leaderboard/crown-bronze.svg";
import cristiano from "../../../assets/images/Ai-NFT/Leaderboard/Cristiano.svg";
import lionel from "../../../assets/images/Ai-NFT/Leaderboard/lionel.svg";
import kim from "../../../assets/images/Ai-NFT/Leaderboard/kim.png";
import stick from "../../../assets/images/Ai-NFT/Leaderboard/stick.svg";
import chainlink from "../../../assets/images/Ai-NFT/Leaderboard/chainlink.svg";
import dollarYellow from "../../../assets/images/Ai-NFT/Leaderboard/dollar-yellow.svg";
import { Leaderboard } from "../AiNFTData";

const LeaderboardComponent = () => {
  return (
    <LeaderboardContainer>
      <div className="head">
        <div className="box">
          <div className="crown">
            <img src={crown1} alt="crown" />
            <span>2</span>
          </div>
          <div className="card">
            <img src={lionel} alt="lionel" />
            <div className="title">
              <span>Lionel Messi</span>
              <span id="purple">CryptoAi Score: 560</span>
            </div>
            <div className="id">
              <span>
                3BV2...76D723623
                <img src={stick} alt="stick" />
              </span>
              <img src={chainlink} alt="chainlink" />
            </div>
            <div className="score">
              {" "}
              <img src={dollarYellow} alt="icon" />
              <span>12.00</span>{" "}
            </div>
          </div>
        </div>
        <div className="box">
          <div className="crown">
            <img src={crown2} alt="crown" />
            <span>1</span>
          </div>
          <div className="card1">
            <img src={cristiano} alt="cristiano" />
            <div className="title">
              <span>Cristiano Ronaldo</span>
              <span id="purple">CryptoAi Score: 833</span>
            </div>
            <div className="id">
              <span>
                cee32...76D723623
                <img src={stick} alt="stick" />
              </span>
              <img src={chainlink} alt="chainlink" />
            </div>
            <div className="score">
              {" "}
              <img src={dollarYellow} alt="icon" />
              <span>12.00</span>{" "}
            </div>
          </div>
        </div>
        <div className="box">
          <div className="crown">
            <img src={crown3} alt="crown" />
            <span>3</span>
          </div>
          <div className="card">
            <img src={kim} alt="kim" />
            <div className="title">
              <span>Kim Kardashian</span>
              <span id="purple">CryptoAi Score: 461</span>
            </div>
            <div className="id">
              <span>
                3BV2...76D723623
                <img src={stick} alt="stick" />
              </span>
              <img src={chainlink} alt="chainlink" />
            </div>
            <div className="score">
              {" "}
              <img src={dollarYellow} alt="icon" />
              <span>14.40</span>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="main-body">
        {Leaderboard.map((item) => (
          <div className="rectangle">
            <div className="icon">
              <img src={item.img} alt="img" />
              <span>{item.number}</span>
            </div>
            <div className="title">
              <span>{item.name}</span>
              <span id="purple">CryptoAi Score: {item.score}</span>
              <div className="score">
                {" "}
                <img src={dollarYellow} alt="icon" />
                <span>{item.dollar_price}</span>{" "}
              </div>
            </div>
            <div className="id">
              <span>
                {item.address}
                <img src={stick} alt="stick" />
              </span>
              <img src={chainlink} alt="chainlink" />
            </div>
          </div>
        ))}
      </div>
    </LeaderboardContainer>
  );
};

export default LeaderboardComponent;
