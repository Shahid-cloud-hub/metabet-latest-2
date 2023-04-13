import React from "react";
import { MarketPlaceContainer } from "../AINFT.Style";

// Images //
import stick from "../../../assets/images/Ai-NFT/stick.png";
import chainlink from "../../../assets/images/Ai-NFT/chainlink.png";
import upload from "../../../assets/images/Ai-NFT/upload-icon.png";
import instagram from "../../../assets/images/Ai-NFT/Instagram.png";
import twitter from "../../../assets/images/Ai-NFT/twitter.png";
import facebook from "../../../assets/images/Ai-NFT/facebook.png";
import forbes from "../../../assets/images/Ai-NFT/forbes.png";
import trading from "../../../assets/images/Ai-NFT/trading.png";
import pencil from "../../../assets/images/Ai-NFT/pencil.png";
import dollarYellow from "../../../assets/images/Ai-NFT/dollar-yellow.png";
import { NftData } from "../AiNFTData";

const MarketPlaceComponent = () => {
  return (
    <MarketPlaceContainer>
      {NftData.map((item) => (
        <div className="cryptoAi">
          <div className="head">
            <span id="purple">{item.heading}</span>
            <img src={item.main_img} alt="mainImg1" />
            <span id="white">{item.name}</span>
          </div>
          <div className="stats">
            <div className="cryptoScore">
              <div className="score">
                <span id="purple">CryptoAi Score:</span>
                <span id="white">{item.score}</span>
              </div>
              <div className="score">
                <span id="purple">Rank:</span>
                <span id="white">{item.rank}</span>
              </div>
            </div>
            <div className="Address">
              <div className="cryptoId">
                <span>{item.id}</span>
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
              <span>{item.instagram_followers}</span>
              <span>{item.twitter_followers}</span>
              <span>{item.facebook_followers}</span>
              <span style={{ color: item?.color && item?.color }}>
                {item.forbes}
              </span>
              <span>{item.trading_volume}</span>
            </div>
          </div>
          <div className="priceButton">
            <div className="last-price">
              <span>Last Price</span>
              <div>
                <img src={dollarYellow} alt="dollarYellow" />
                <span>{item.last_price}</span>
              </div>
            </div>
            <div className="sale-price">
              <span>Sale Price</span>
              <div>
                <img src={dollarYellow} alt="dollarYellow" />
                <span>{item.sale_price}</span>
                <img src={pencil} alt="pencil" />
              </div>
            </div>
            <div className="next-price">
              <span>Next Price</span>
              <div>
                <img src={dollarYellow} alt="dollarYellow" />
                <span>{item.next_price}</span>
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
                    {item.wallet_id1} <img src={stick} alt="icon" />
                  </span>
                  <span>
                    {item.wallet_id2} <img src={stick} alt="icon" />
                  </span>
                  <span></span>
                </div>
                <div className="price-list">
                  <span id="buy">Price</span>
                  <span>
                    <img src={dollarYellow} alt="icon" /> {item.price_1}
                  </span>
                  <span>
                    <img src={dollarYellow} alt="icon" /> {item.price_2}
                  </span>
                  <span>
                    <img src={dollarYellow} alt="icon" /> {item.price_3}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </MarketPlaceContainer>
  );
};

export default MarketPlaceComponent;