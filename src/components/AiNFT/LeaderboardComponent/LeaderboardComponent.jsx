import React from "react";
import { LeaderboardContainer } from "../AINFT.Style";
import { Leaderboard } from "../AiNFTData";

const LeaderboardComponent = () => {
  return (
    <LeaderboardContainer>
      <div className="head">
        <div className="box">
          <div className="crown">
            <img
              src="https://res.cloudinary.com/dfjmnwwan/image/upload/v1681476875/AI-NFT%27s/leaderboard/crown-silver_qcue8x.svg"
              alt="crown"
            />
            <span>2</span>
          </div>
          <div className="card">
            <img
              src="https://res.cloudinary.com/dfjmnwwan/image/upload/v1681476875/AI-NFT%27s/leaderboard/lionel_acz2pl.svg"
              alt="lionel"
            />
            <div className="title">
              <span>Lionel Messi</span>
              <span id="purple">CryptoAi Score: 560</span>
            </div>
            <div className="id">
              <span>
                3BV2...76D723623
                <img
                  src="https://res.cloudinary.com/dfjmnwwan/image/upload/v1681476862/AI-NFT%27s/leaderboard/stick_wgqnka.svg"
                  alt="stick"
                />
              </span>
              <img
                src="https://res.cloudinary.com/dfjmnwwan/image/upload/v1681476862/AI-NFT%27s/leaderboard/chainlink_uwcile.svg"
                alt="chainlink"
              />
            </div>
            <div className="score">
              <img
                src="https://res.cloudinary.com/dfjmnwwan/image/upload/v1681476862/AI-NFT%27s/leaderboard/dollar-yellow_sgcqpr.svg"
                alt="icon"
              />
              <span>12.00</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="crown">
            <img
              src="https://res.cloudinary.com/dfjmnwwan/image/upload/v1681476872/AI-NFT%27s/leaderboard/gold_yfqhnq.svg"
              alt="crown"
            />
            <span>1</span>
          </div>
          <div className="card1">
            <img
              src="https://res.cloudinary.com/dfjmnwwan/image/upload/v1681476868/AI-NFT%27s/leaderboard/cristiano_q5tgr4.svg"
              alt="cristiano"
            />
            <div className="title">
              <span>Cristiano Ronaldo</span>
              <span id="purple">CryptoAi Score: 833</span>
            </div>
            <div className="id">
              <span>
                cee32...76D723623
                <img
                  src="https://res.cloudinary.com/dfjmnwwan/image/upload/v1681476862/AI-NFT%27s/leaderboard/stick_wgqnka.svg"
                  alt="stick"
                />
              </span>
              <img
                src="https://res.cloudinary.com/dfjmnwwan/image/upload/v1681476862/AI-NFT%27s/leaderboard/chainlink_uwcile.svg"
                alt="chainlink"
              />
            </div>
            <div className="score">
              <img
                src="https://res.cloudinary.com/dfjmnwwan/image/upload/v1681476862/AI-NFT%27s/leaderboard/dollar-yellow_sgcqpr.svg"
                alt="icon"
              />
              <span>12.00</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="crown">
            <img
              src="https://res.cloudinary.com/dfjmnwwan/image/upload/v1681476862/AI-NFT%27s/leaderboard/crown-bronze_nf6q6x.svg"
              alt="crown"
            />
            <span>3</span>
          </div>
          <div className="card">
            <img
              src="https://res.cloudinary.com/dfjmnwwan/image/upload/v1681476873/AI-NFT%27s/leaderboard/kim_bss1kg.svg"
              alt="kim"
            />
            <div className="title">
              <span>Kim Kardashian</span>
              <span id="purple">CryptoAi Score: 461</span>
            </div>
            <div className="id">
              <span>
                3BV2...76D723623
                <img
                  src="https://res.cloudinary.com/dfjmnwwan/image/upload/v1681476862/AI-NFT%27s/leaderboard/stick_wgqnka.svg"
                  alt="stick"
                />
              </span>
              <img
                src="https://res.cloudinary.com/dfjmnwwan/image/upload/v1681476862/AI-NFT%27s/leaderboard/chainlink_uwcile.svg"
                alt="chainlink"
              />
            </div>
            <div className="score">
              <img
                src="https://res.cloudinary.com/dfjmnwwan/image/upload/v1681476862/AI-NFT%27s/leaderboard/dollar-yellow_sgcqpr.svg"
                alt="icon"
              />
              <span>14.40</span>
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
                <img
                  src="https://res.cloudinary.com/dfjmnwwan/image/upload/v1681476862/AI-NFT%27s/leaderboard/dollar-yellow_sgcqpr.svg"
                  alt="icon"
                />
                <span>{item.dollar_price}</span>{" "}
              </div>
            </div>
            <div className="id">
              <span>
                {item.address}
                <img
                  src="https://res.cloudinary.com/dfjmnwwan/image/upload/v1681476862/AI-NFT%27s/leaderboard/stick_wgqnka.svg"
                  alt="stick"
                />
              </span>
              <img
                src="https://res.cloudinary.com/dfjmnwwan/image/upload/v1681476862/AI-NFT%27s/leaderboard/chainlink_uwcile.svg"
                alt="chainlink"
              />
            </div>
          </div>
        ))}
      </div>
    </LeaderboardContainer>
  );
};

export default LeaderboardComponent;
