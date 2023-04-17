import React, { useState } from "react";
import styled from "styled-components";
import { MarketPlaceContainer } from "../AINFT.Style";
import { useSelector } from "react-redux";

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
import ReactPopUpModel from "../../ReactPopUpModel/ReactPopUpModel";

const MarketPlaceComponent = () => {
  const metaMaskAddress = useSelector((state) => state.wallet);
  const [modalOpen, setModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const handleImageClick = (src) => {
    setModalOpen(true);
    setImageSrc(src);
  };

  const closeModal = () => {
    setModalOpen(false);
    setImageSrc("");
  };

  return (
    <MarketPlaceContainer>
      {NftData.map((item, index) => (
        <div className="cryptoAi" key={index}>
          <div className="head">
            <span id="purple">{item.heading}</span>
            <ImageContainer>
              <img
                src={item.main_img}
                onClick={() => handleImageClick(item?.main_img)}
                alt="mainImg1"
              />
            </ImageContainer>
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
            <div
              className={
                !metaMaskAddress.metaMaskAddress
                  ? "wallet-not-connected"
                  : "last-price"
              }
            >
              {!metaMaskAddress.metaMaskAddress ? (
                <span> Connect wallet</span>
              ) : (
                <span> Last Price</span>
              )}
              <div>
                {!metaMaskAddress.metaMaskAddress ? (
                  ""
                ) : (
                  <img src={dollarYellow} alt="dollarYellow" />
                )}
                <span>
                  {!metaMaskAddress.metaMaskAddress ? "" : item.last_price}
                </span>
              </div>
            </div>
            <div
              className={
                !metaMaskAddress.metaMaskAddress
                  ? "wallet-not-connected"
                  : "sale-price"
              }
            >
              {!metaMaskAddress.metaMaskAddress ? (
                <span> Connect wallet</span>
              ) : (
                <span>Sale Price</span>
              )}
              <div>
                {!metaMaskAddress.metaMaskAddress ? (
                  ""
                ) : (
                  <img src={dollarYellow} alt="dollarYellow" />
                )}{" "}
                <span>
                  {!metaMaskAddress.metaMaskAddress ? "" : item.sale_price}
                </span>
                {!metaMaskAddress.metaMaskAddress ? (
                  ""
                ) : (
                  <img src={pencil} alt="pencil" />
                )}
              </div>
            </div>
            <div
              className={
                !metaMaskAddress.metaMaskAddress
                  ? "wallet-not-connected"
                  : "next-price"
              }
            >
              {!metaMaskAddress.metaMaskAddress ? (
                <span> Connect wallet</span>
              ) : (
                <span>Next Price</span>
              )}
              <div>
                {!metaMaskAddress.metaMaskAddress ? (
                  ""
                ) : (
                  <img src={dollarYellow} alt="dollarYellow" />
                )}
                <span>
                  {!metaMaskAddress.metaMaskAddress ? "" : item.next_price}
                </span>
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
      {modalOpen && <ReactPopUpModel src={imageSrc} closeModal={closeModal} />}
    </MarketPlaceContainer>
  );
};

const ImageContainer = styled.div`
  position: relative;
  /* width: 200px; */
  /* height: 200px; */
  &:hover {
    cursor: pointer;
  }
  img {
    /* width: 100%; */
    /* height: 100%; */
    /* object-fit: cover; */
    transition: transform 0.3s ease-out;
  }
  img:hover {
    transform: scale(1.05);
  }
  ${({ isModalOpen }) =>
    isModalOpen &&
    `
      position: fixed;
      top: 40%;
    left: 50%;
    width: 50%;
    height: 50%;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      transform: translate(-50%, -50%);
    `}
`;

export default MarketPlaceComponent;
