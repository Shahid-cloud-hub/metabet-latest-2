import styled from "styled-components";
import Banner_2 from "../../assets/images/Event-Banner-Images/HotEvent.webp";
import NextArrow from "../../assets/images/ActiveBets/next.png";
import PreArrow from "../../assets/images/ActiveBets/prev.png";
export const Container = styled.div`
  width: 100%;
  max-width: 989px;
  margin: 0 auto;
  margin-top: 60px;

  .wrapper-main-active {
    position: relative;
    width: 100%;
    height: calc(100vh - 240px);
    padding: 0;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 9;
    top: 6px;

    &::-webkit-scrollbar {
      display: block;
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.35);
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #314552;
      border-right: none;
      border-left: none;
      border-radius: 10px;
    }
  }

  .filter-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    button {
      display: flex !important;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      padding: 12px 0px;
      max-width: 160px;
      width: 100%;
      background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
      border: 2px solid #a8d7ff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
      gap: 4px;
      color: #ffffff;
      margin: 4px;

      span {
        color: #ffffff;
      }
    }
    .betactive {
      border: 1px solid;
      border-image: linear-gradient(45deg, #997860, #ffa133) 1;
      /* position: relative; */
      /* border-image: linear-gradient(90deg, #997860 -8.82%, #ffa133 111.76%); */
    }
    .betactive-pseudo {
      position: relative;
      /* padding: 10px 20px; */
      /* background: #fff; */
      margin: 4px;
      border-radius: 12px;
    }
    .betactive-pseudo::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -4px;
      border-radius: inherit;
      background-image: linear-gradient(45deg, #997860, #ffa133);

      /* border: 1px solid transparent; */
      /* background: linear-gradient(45deg, #997860, #ffa133) 1;
      -webkit-mask:
    linear-gradient(#fff 0 0) padding-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude; */
    }
    .betactive-pseudo-mask {
      position: relative;
      /* padding: 15px 20px; */
    }

    .slick-prev {
      transform: translate(46px, 10.6rem);
      display: none !important;
    }

    .slick-next {
      transform: translate(-46px, 10.6rem);
      display: none !important;
    }

    .betactive-pseudo-mask::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 12px;
      border: 1px solid transparent;
      background: linear-gradient(45deg, #997860, #ffa133) border-box;
      /* -webkit-mask: linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0); */
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
    }
    .gradient-text {
      background: linear-gradient(to right, #997860, #ffa133);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      /* text-fill-color: transparent; */
    }
    .slick-track {
      display: flex;
      gap: 10px;
    }

    .slick-slider {
      .slick-prev,
      .slick-next {
        background: none;
        border: none;
        /* display: none !important; */
      }

      .slick-next:before {
        content: "";
        background-image: url(${NextArrow});
        width: 21px;
        height: 33px;
        position: absolute;
      }
      .slick-prev:before {
        content: "";
        background-image: url(${PreArrow});
        width: 21px;
        height: 33px;
        position: absolute;
      }
    }

    .slick-arrow {
      button {
        display: none;
      }
    }
    .active {
      color: #ffffff;
    }
  }
  .history_span {
    padding: 20px 0px;
    span {
      font-weight: 800;
      font-size: 16px;
      color: #ffffff;
    }
  }
  #history_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 100%;
    max-width: 164px;
    background: #fc4c1e;
    border-radius: 6px;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    margin: 20px auto;
  }
  .Banner_2 {
    background-image: url(${Banner_2});
    min-height: 260px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 270px;
  }
  .bet-container {
    display: flex;
  }

  .Bet {
    display: flex;
    z-index: 1;
    align-items: center;
    transform: translate(0px, 75px);
    background: none;
    grid-gap: 20px;
    padding-left: 20px;
  }

  .player-VS {
    display: flex;
    flex-direction: column;
    color: #fff;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 24px;
    transform: translateY(20px);

    a {
      text-decoration: none;
      color: #fff;
    }
  }

  .Bet .player-VS > button {
    padding: 10px;
    width: 140px;
    border: none;
    color: #fff;
    cursor: pointer;
    background: #fc4c1e;
    border-radius: 6px;
    font-family: "CabinetGroteskBold";
    a {
      text-decoration: none;
      color: white;
    }
  }

  a {
    button {
      padding: 10px;
      width: 140px;
      border: none;
      color: #fff;
      cursor: pointer;
      background: #fc4c1e;
      border-radius: 6px;
      font-family: "CabinetGroteskBold";
    }
  }

  p {
    font-family: "CabinetGroteskBold";
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 140%;
    display: flex;
    align-items: center;
    color: #ffffff;
    background: none;
  }
  .Player > span {
    font-family: "CabinetGroteskBold";
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 140%;
    display: flex;
    align-items: center;
    color: #ffffff;
    justify-content: center;
    background: none;
    padding-top: 82px;
  }
  .Player {
    background: none;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 1024px) {
    .filter-btn {
      .slick-track {
        gap: 20px;
      }
      button {
        min-width: 120px;

        span {
          font-size: 12px;
        }
      }
    }
    .history_span {
      span {
        font-size: 13px;
      }
    }

    #history_btn {
      font-size: 12px;
      max-width: 130px;
    }
  }
  @media screen and (max-width: 920px) {
    .filter-btn {
      .slick-track {
        gap: 20px;
      }
      button {
        min-width: 115px;

        span {
          font-size: 12px;
        }
      }
    }
    .history_span {
      span {
        font-size: 13px;
      }
    }

    #history_btn {
      font-size: 12px;
      max-width: 130px;
    }
  }
  @media screen and (max-width: 820px) {
    .filter-btn {
      .slick-track {
        gap: 10px;
      }
      button {
        min-width: 115px;

        span {
          font-size: 12px;
        }
      }
    }
    .history_span {
      span {
        font-size: 13px;
      }
    }

    #history_btn {
      font-size: 12px;
      max-width: 130px;
    }
  }
  @media screen and (max-width: 600px) {
    .filter-btn {
      .slick-track {
        gap: 35px;
      }
    }
    .history_span {
      span {
        font-size: 13px;
      }
    }

    #history_btn {
      font-size: 12px;
      max-width: 130px;
    }
  }

  @media screen and (max-width: 520px) {
    .filter-btn {
      .slick-track {
        gap: 60px;
      }
      button {
        min-width: 115px;
        padding: 10px 0px;
        span {
          font-size: 12px;
        }
      }
    }
    .history_span {
      span {
        font-size: 13px;
      }
    }

    #history_btn {
      font-size: 12px;
      max-width: 130px;
    }
  }

  @media screen and (max-width: 375px) {
    .history_span {
      span {
        font-size: 12px;
      }
    }
  }
`;
export const UfcContainer = styled.div`
  min-height: 210px;
  background: #223743;
  box-shadow: -3px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  img {
    background: none;
  }
  p {
    font-size: 12px;
    color: #b2bbd2;
    background: #304553;
    padding: 4px 0px 4px 16px;
    margin-bottom: 3px;
  }
  .active-bets-status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }
  .text {
    display: flex;
    grid-gap: 20px;
  }
  .BID {
    display: flex;
    align-items: center;
  }
  .BID > p:nth-child(1) {
    color: #ffffff;
    font-size: 18px;
    font-weight: 800;
  }
  .WIN {
    display: flex;
    align-items: center;
    grid-gap: 10px;
  }
  span {
    font-size: 18px;
    line-height: 140%;
    color: #ffffff;
  }
  #live span {
    color: #ffd600;
  }

  .Time {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0px 5px 0px;
    hr {
      height: 2px;
      width: 100%;
      max-width: 344px;
      margin: 0 auto;
      border: none;
      background: #314552;
    }

    p {
      color: #b2bbd2;
      background: none;
      padding: 0px;
    }
  }

  .Reactanglemini {
    width: 148px;
    height: 68px;
    background: #304553;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 5px;
    grid-gap: 10px;
  }
  .box {
    width: 80px;
    height: 22px;
    background: #0a1a25;
    border-radius: 6px;
    cursor: pointer;

    span {
      color: #ffd600;
      font-size: 12px;
      padding: 5px;
      display: flex;
      justify-content: center;
    }
  }
  .Row {
    display: flex;
    grid-gap: 10px;
  }
  .Bid {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 5px;
    img {
      padding: 0;
    }
    span {
      color: #ffd600;
      font-size: 14px;
    }
  }
  .ScoreBoard {
    display: flex;
    align-items: center;
    background: none;
    justify-content: space-between;
    padding: 5px 25px 5px 15px;
    margin-bottom: 15px;

    p {
      font-weight: 800;
      font-size: 16px;
      color: #ffffff;
      background: none;
      padding: 3px;
    }
  }
  .Board {
    display: flex;
    background: none;
    grid-gap: 10px;
  }
  .Reactangle {
    display: flex;
    flex-direction: column;
    width: 182px;
    height: 68px;
    background: #304553;

    border-radius: 6px;
    p {
      padding-left: 10px;
    }

    .score {
      display: flex;
      justify-content: space-between;
      background: #304553;
      border-radius: 6px;

      p {
        color: #4792e3;
        background: none;
      }
      img {
        padding: 2px;
      }
    }
  }
  .Reactangle1 {
    display: flex;
    flex-direction: column;
    width: 182px;
    height: 68px;
    background: #081824;
    border-radius: 6px;
    p {
      padding-left: 10px;
    }

    .score1 {
      display: flex;
      justify-content: space-between;
      background: #081824;
      border-radius: 6px;

      p {
        color: #4792e3;
        background: none;
      }
      img {
        padding: 2px;
      }
    }
  }

  @media screen and (max-width: 520px) {
    .active-bets-status {
      padding: 10px;

      span {
        font-size: 14px;
      }

      .text {
        gap: 15px;
      }
    }
  }

  @media screen and (max-width: 420px) {
    .active-bets-status {
      padding: 10px;

      span {
        font-size: 12px;
      }

      .text {
        gap: 10px;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .active-bets-status {
      padding: 10px;

      span {
        font-size: 10px;
      }

      .text {
        gap: 5px;
      }
    }
  }
`;
