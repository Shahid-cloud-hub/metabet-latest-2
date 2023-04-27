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
export const ContainerBet = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 30px;
  margin-left: 10px;

  .betHistory-container {
    display: flex;
    justify-content: space-between;
    position: relative;

    hr {
      position: absolute;
      max-width: 835px;
      right: 1%;
      top: 48%;
      border: none;
      width: 100%;
      height: 2px;
      background: #282c34;
      border-radius: 5px;
    }

    .bet-item-1 {
      display: flex;
      align-items: center;
      justify-content: inherit;
      gap: 30px;
      width: 100%;
      max-width: 940px;
      padding: 15px;
      background: #081824;
      border-radius: 10px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      .right-pannel {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding-bottom: 22px;

        div {
          display: flex;
          gap: 5px;
        }

        button {
          border: none;
          background: #122939;
          border-radius: 7px;
          font-size: 12px;
          color: #fff;
          cursor: pointer;
          max-width: 47px;
          min-height: 33px;
          padding: 10px;
        }
      }

      .table-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .bet-th {
          display: flex;
          gap: 69px;
          font-weight: 700;
          font-size: 12px;
          color: #f4cd68;
        }

        .bet-td {
          display: flex;

          gap: 30px;
          font-weight: 700;
          font-size: 14px;
          color: #fff;
        }

        .bet-td1 {
          display: flex;
          gap: 120px;
          font-weight: 700;
          font-size: 14px;
          color: #fff;
        }
      }
    }

    .bet-item-2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      margin-top: 4px;
      max-width: 100px;

      .table-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 100%;

        .bet-th {
          display: flex;
          gap: 15px;
          font-weight: 700;
          font-size: 12px;
          color: #f4cd68;

          span {
            width: 100%;
          }
        }

        .bet-td {
          display: flex;
          gap: 15px;
          font-weight: 700;
          font-size: 16px;
          color: #fff;

          span {
            width: 100%;
          }
        }
      }
    }

    .status-btn {
      display: flex;
      flex-direction: column;
      gap: 20px;
      div {
        display: flex;
        justify-content: center;
        gap: 10px;
      }
      button {
        width: 100%;
        max-width: 90px;
        min-height: 27px;
        padding: 10px;
        background: #52b143;
        border-radius: 6px;
        border: none;
        color: #fff;
        cursor: pointer;
      }
      .sell {
        background: #de4b4b;
      }
    }
  }
  .betHistory-container-banner {
    display: flex;
    justify-content: center;
    position: relative;

    hr {
      position: absolute;
      max-width: 373px;
      right: 1%;
      top: 52%;
      border: none;
      width: 100%;
      height: 2px;
      background: #282c34;
      border-radius: 5px;
    }

    .bet-item-1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: inherit;
      gap: 30px;
      width: 100%;
      max-width: 343px;
      min-height: 243px;
      padding: 15px;
      background: #081824;
      border-radius: 10px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      .icon-type {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }
      .right-pannel {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding-bottom: 22px;

        div {
          display: flex;
          gap: 5px;
        }

        button {
          border: none;
          background: #122939;
          border-radius: 7px;
          font-size: 12px;
          color: #fff;
          cursor: pointer;
          max-width: 47px;
          min-height: 33px;
          padding: 10px;
        }
      }

      .table-wrapper {
        display: flex;
        flex-direction: column;
        gap: 6px;

        .bet-th {
          display: flex;
          gap: 69px;
          font-weight: 700;
          font-size: 12px;
          color: #f4cd68;
          border-bottom: 1px solid #282c34;
          span {
            margin-bottom: 6px;
          }
        }

        .bet-td {
          display: flex;
          gap: 30px;
          font-weight: 700;
          font-size: 14px;
          color: #fff;
          margin-bottom: 20px;
        }

        .bet-td1 {
          display: flex;
          gap: 120px;
          font-weight: 700;
          font-size: 14px;
          color: #fff;
        }
      }
    }

    .bet-item-2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      margin-top: 4px;
      max-width: 100px;

      .table-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 100%;

        .bet-th {
          display: flex;
          gap: 15px;
          font-weight: 700;
          font-size: 12px;
          color: #f4cd68;

          span {
            width: 100%;
          }
        }

        .bet-td {
          display: flex;
          gap: 15px;
          font-weight: 700;
          font-size: 16px;
          color: #fff;

          span {
            width: 100%;
          }
        }
      }
    }

    .status-btn {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      div {
        display: flex;
        justify-content: end;
        gap: 15px;
      }
      button {
        width: 100%;
        max-width: 90px;
        min-height: 27px;
        padding: 10px;
        background: #52b143;
        border-radius: 6px;
        border: none;
        color: #fff;
        cursor: pointer;
      }
      .sell {
        background: #de4b4b;
      }
    }
  }
  @media screen and (max-width: 1280px) {
    .betHistory-container {
      hr {
        max-width: 790px;
        top: 48%;
      }
    }
  }

  @media screen and (max-width: 1080px) {
    .betHistory-container {
      .bet-item-1 {
        gap: 5px;
        .table-wrapper {
          span {
            font-size: 12px;
          }
          .bet-th {
            gap: 35px;
          }
          .bet-td1 {
            gap: 70px;
          }
          .bet-td {
            gap: 8px;
          }
        }
        .right-pannel {
          padding-bottom: 25px;
          button {
            font-size: 8px;
            max-width: 30px;
            min-height: 30px;
          }
        }
      }
      hr {
        max-width: 524px;
        right: 2%;
        top: 48%;
      }
    }
  }

  @media screen and (max-width: 912px) {
    .betHistory-container {
      .bet-item-1 {
        .table-wrapper {
          .bet-th {
            span {
              font-size: 10px;
            }
          }
          .bet-td {
            font-size: 10px;
            span {
              font-size: 10px;
            }
          }
          .bet-td1 {
            align-items: center;

            font-size: 10px;
            span {
              font-size: 10px;
            }
          }
        }
        .right-pannel {
          padding-bottom: 0px;
          button {
            font-size: 8px;
            max-width: 30px;
            min-height: 30px;
          }
        }
      }
      .status-btn {
        max-width: 67px;
        min-height: 19px;
        padding: 5px;
        button {
          padding: 5px 10px;
        }
      }

      hr {
        max-width: 430px;
        top: 49%;
      }
    }
  }

  @media screen and (max-width: 820px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .betHistory-container {
      hr {
        max-width: 692px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    .betHistory-container {
      hr {
        max-width: 651px;
      }
    }
  }

  @media screen and (max-width: 620px) {
    grid-template-columns: 1fr;
    .betHistory-container {
      hr {
        max-width: 432px;
      }
    }
  }

  @media screen and (max-width: 520px) {
    padding: 10px;

    .betHistory-container {
      .bet-item-1 {
        gap: 15px;
        img {
          max-width: 25px;
        }

        .table-wrapper {
          .bet-th,
          .bet-td {
            gap: 0px;
            span {
              font-size: 11px;
            }
          }
        }
      }
      .bet-item-2 {
        max-width: 54px;
        .table-wrapper {
          .bet-th,
          .bet-td {
            img {
              max-width: 15px;
            }
            span {
              font-size: 9px;
            }
          }
        }
      }
      hr {
        max-width: 382px;
      }
    }
  }

  @media screen and (max-width: 420px) {
    padding: 10px;

    .betHistory-container {
      .bet-item-1 {
        gap: 15px;
        img {
          max-width: 25px;
        }

        .table-wrapper {
          .bet-th,
          .bet-td {
            gap: 0px;
            span {
              font-size: 11px;
            }
          }
        }
      }
      .bet-item-2 {
        max-width: 54px;
        .table-wrapper {
          .bet-th,
          .bet-td {
            img {
              max-width: 15px;
            }
            span {
              font-size: 9px;
            }
          }
        }
      }

      hr {
        max-width: 355px;
      }
    }
  }

  @media screen and (max-width: 375px) {
    padding: 10px;
    .betHistory-container {
      .bet-item-1 {
        gap: 15px;
        img {
          max-width: 25px;
        }

        .table-wrapper {
          .bet-td {
            gap: 0px;
            span {
              font-size: 9px;
            }
          }
          .bet-th {
            gap: 0px;
            span {
              font-size: 9px;
            }
          }
        }
      }
      .bet-item-2 {
        max-width: 54px;
        .table-wrapper {
          .bet-th,
          .bet-td {
            img {
              max-width: 15px;
            }
            span {
              font-size: 9px;
            }
          }
        }
      }
      hr {
        max-width: 311px;
        height: 1px;
      }
    }
  }
`;
