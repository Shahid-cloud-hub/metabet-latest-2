import styled from "styled-components";

export const GetStatContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

export const StatisticsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: #0f212e;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 975px;
  .rectangle {
    span {
      font-size: 14px;
      text-align: center;
      color: #ffffff;
    }
  }

  .featured-banner-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    .flag_wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 10px;

      span {
        font-weight: 800;
        font-size: ${(props) => props.text};
        color: #ffffff;
      }
      img {
        width: 70px;
      }
    }

    .statistic_rectangle {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: #112533;
      gap: ${(props) => props.textGap};
      padding: 35px 10px;
      min-width: 150px;

      span:nth-child(1) {
        font-weight: 700;
        font-size: 18px;
        color: #ffffff;
      }

      span {
        display: flex;
        flex-direction: column;
        color: #b6b6b6;
        font-weight: 700;
        font-size: 14px;
      }
    }

    .player-VS {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 93px;
      gap: 0px;
      transform: none;

      span:nth-child(1) {
        font-weight: 700;
        font-size: 35px;
        color: #ffffff;
      }
      span {
        display: flex;
        align-items: center;
        text-align: center;
        color: #ffffff;
        font-weight: 700;
        font-size: 12px;
        padding: 10px;
      }
      #val {
        font-size: 14px;
      }
    }

    .time {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #ffffff;

      span:nth-child(1) {
        font-size: 12px;
      }

      span {
        font-size: 16px;
        color: #ffd600;
      }
    }
  }
  @media screen and (max-width: 1080px) {
    max-width: 725px;
    margin: 10px 5px;
    .featured-banner-wrapper {
      gap: 10px;

      .player-VS {
        min-width: 33px;
        gap: 0px;
        span {
          font-size: 9px;
          padding: 5px;
        }

        span:nth-child(1) {
          font-size: 12px; /* font-size: 10px; */
        }
        #demo_1 {
          font-size: 9px;
        }
        #val {
          font-size: 12px;
        }
      }

      .time {
        font-size: 9px;

        span:nth-child(1) {
          font-size: 9px;
        }

        span {
          font-size: 12px;
          color: #ffd600;
        }
      }

      .portfolio {
        /* img {
          max-width: 20px;
        } */

        span {
          font-size: 10px;
        }
      }

      .vs {
        max-width: 30px;
        span:nth-child(1) {
          font-size: 12px;
        }

        .time {
          span:nth-child(1) {
            font-size: 9px;
          }

          span {
            font-size: 9px;
          }
        }
      }

      .rectangle {
        max-width: 25px;

        span:nth-child(1) {
          font-size: 10px;
        }

        span {
          font-size: 9px;
        }
      }

      .statistic_rectangle {
        padding: 25px 5px;
        min-width: 50px;
        gap: 5px;

        span:nth-child(1) {
          font-size: 12px;
          color: #ffffff;
        }

        span {
          font-weight: 500;
          font-size: 9px;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    max-width: 655px;
    margin: 10px 5px;
  }
  @media screen and (max-width: 820px) {
    max-width: 450px;
    margin: 10px 5px;
    .featured-banner-wrapper {
      gap: 10px;
      .flag_wrapper {
        img {
          width: 50px;
        }
        span {
          font-size: 10px;
        }
      }
      .player-VS {
        min-width: 33px;
        gap: 0px;
        span {
          font-size: 7px;
          padding: 5px;
        }

        span:nth-child(1) {
          font-size: 10px; /* font-size: 10px; */
        }
        #demo_1 {
          font-size: 7px;
        }
        #val {
          font-size: 10px;
        }
      }

      .time {
        font-size: 7px;

        span:nth-child(1) {
          font-size: 7px;
        }

        span {
          font-size: 9px;
          color: #ffd600;
        }
      }

      .portfolio {
        img {
          max-width: 20px;
        }

        span {
          font-size: 7px;
        }
      }

      .vs {
        max-width: 30px;
        span:nth-child(1) {
          font-size: 10px;
        }

        .time {
          span:nth-child(1) {
            font-size: 7px;
          }

          span {
            font-size: 7px;
          }
        }
      }

      .rectangle {
        max-width: 25px;

        span:nth-child(1) {
          font-size: 7px;
        }

        span {
          font-size: 6px;
        }
      }

      .statistic_rectangle {
        padding: 25px 5px;
        min-width: 70px;
        gap: 5px;

        span:nth-child(1) {
          font-size: 10px;
          color: #ffffff;
        }

        span {
          font-weight: 500;
          font-size: 7px;
        }
      }
    }
  }

  @media screen and (max-width: 620px) {
    .portfolio {
      img {
        max-width: 95px;
      }

      span {
        font-size: 20px;
      }
    }

    .vs {
      max-width: 90px;
      span:nth-child(1) {
        font-size: 50px;
      }
    }

    .rectangle {
      max-width: 105px;
    }
  }
  @media screen and (max-width: 520px) {
    .portfolio {
      img {
        max-width: 75px;
      }

      span {
        font-size: 16px;
      }
    }

    .vs {
      max-width: 90px;
      span:nth-child(1) {
        font-size: 45px;
      }
    }

    .rectangle {
      max-width: 90px;

      span:nth-child(1) {
        font-size: 10px;
      }

      span {
        font-size: 12px;
      }
    }
  }
  @media screen and (max-width: 420px) {
    max-width: 405px;
    .featured-banner-wrapper {
      gap: 10px;
      .flag_wrapper {
        img {
          width: 50px;
        }
        span {
          font-size: 10px;
        }
      }
      .player-VS {
        min-width: 33px;
        gap: 0px;
        span {
          font-size: 7px;
          padding: 5px;
        }

        span:nth-child(1) {
          font-size: 10px; /* font-size: 10px; */
        }
        #demo_1 {
          font-size: 7px;
        }
        #val {
          font-size: 10px;
        }
      }

      .time {
        font-size: 7px;

        span:nth-child(1) {
          font-size: 7px;
        }

        span {
          font-size: 9px;
          color: #ffd600;
        }
      }

      .portfolio {
        img {
          max-width: 20px;
        }

        span {
          font-size: 7px;
        }
      }

      .vs {
        max-width: 30px;
        span:nth-child(1) {
          font-size: 10px;
        }

        .time {
          span:nth-child(1) {
            font-size: 7px;
          }

          span {
            font-size: 7px;
          }
        }
      }

      .rectangle {
        max-width: 25px;

        span:nth-child(1) {
          font-size: 7px;
        }

        span {
          font-size: 6px;
        }
      }

      .statistic_rectangle {
        padding: 25px 5px;
        min-width: 70px;
        gap: 5px;

        span:nth-child(1) {
          font-size: 10px;
          color: #ffffff;
        }

        span {
          font-weight: 500;
          font-size: 7px;
        }
      }
    }
  }
  @media screen and (max-width: 375px) {
    max-width: 360px;
    .featured-banner-wrapper {
      gap: 10px;
      .flag_wrapper {
        img {
          width: 50px;
        }
        span {
          font-size: 10px;
        }
      }
      .player-VS {
        min-width: 33px;
        gap: 0px;
        span {
          font-size: 7px;
          padding: 5px;
        }

        span:nth-child(1) {
          font-size: 10px; /* font-size: 10px; */
        }
        #demo_1 {
          font-size: 7px;
        }
        #val {
          font-size: 10px;
        }
      }

      .time {
        font-size: 7px;

        span:nth-child(1) {
          font-size: 7px;
        }

        span {
          font-size: 9px;
          color: #ffd600;
        }
      }

      .portfolio {
        img {
          max-width: 20px;
        }

        span {
          font-size: 7px;
        }
      }

      .vs {
        max-width: 30px;
        span:nth-child(1) {
          font-size: 10px;
        }

        .time {
          span:nth-child(1) {
            font-size: 7px;
          }

          span {
            font-size: 7px;
          }
        }
      }

      .rectangle {
        max-width: 25px;

        span:nth-child(1) {
          font-size: 7px;
        }

        span {
          font-size: 6px;
        }
      }

      .statistic_rectangle {
        padding: 25px 5px;
        min-width: 70px;
        gap: 5px;

        span:nth-child(1) {
          font-size: 10px;
          color: #ffffff;
        }

        span {
          font-weight: 500;
          font-size: 7px;
        }
      }
    }
  }
  @media screen and (max-width: 375px) {
    .player-VS {
      min-width: 33px;
      gap: 0px;

      span:nth-child(1) {
        font-weight: 500;
        font-size: 12px;
      }
      span {
        font-weight: 500;
        font-size: 7px;
        padding: 10px;
      }

      .time {
        font-size: 7px;

        span:nth-child(1) {
          font-size: 7px;
        }

        span {
          font-size: 9px;
          color: #ffd600;
        }
      }
    }
    .portfolio {
      img {
        max-width: 35px;
      }

      span {
        font-size: 7px;
      }
    }

    .vs {
      max-width: 30px;
      span:nth-child(1) {
        font-size: 20px;
      }

      .time {
        span:nth-child(1) {
          font-size: 7px;
        }

        span {
          font-size: 7px;
        }
      }
    }

    .rectangle {
      max-width: 25px;

      span:nth-child(1) {
        font-size: 7px;
      }

      span {
        font-size: 6px;
      }
    }
  }
`;

export const Info = styled.div`
  display: ${(props) => props.betType};
  grid-template-columns: ${(props) => props.betDir};
  flex-wrap: ${(props) => props.betWrap};
  align-items: center;
  width: 100%;
  background: #0f212e;
  margin: 10px 0px;
  padding: 10px 0px;
  justify-content: center;
  gap: 16px;
  transform: translate(12px, 0px);
  max-width: ${(props) => props.betMaxWidth};
  margin: ${(props) => props.betMargin};

  .bet-detials-main {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .bet-details-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    width: 100%;
    width: 473px;
    min-height: 203px;
    background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
    border: 1px solid #5f9ea0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    gap: 30px;

    .bet-title {
      color: #1e90ff;
      font-weight: 700;
      font-size: 21px;
      padding-top: 20px;
    }

    hr {
      height: 2px;
      width: 100%;
      background: #1e90ff;
      box-shadow: 0px 0px 0px #ffffff;
      border: none;
    }

    .bet-status-box-wrapper {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      .bet-status-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0px 5px;
        max-width: 120px;
        width: 100%;
        font-family: "mostra-nuova", sans-serif;
        min-height: 72px;
        background: linear-gradient(180deg, #1c1c1c 39.58%, #28516b 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #1e90ff;
        border-radius: 8px;
        gap: 12px;

        .bet-status-title {
          color: #5f9ea0;
          font-weight: 600;
          font-size: 14px;
        }

        .bet-status-count {
          color: #0070c0;
          text-shadow: 0px 0px 30px #000000;
          font-weight: 700;
          font-size: 16px;
        }
      }
    }

    .bet-amount-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 200px;
      gap: 15px;

      .bet-amount {
        display: flex;
        justify-content: space-around;
        padding: 8px;
        background: linear-gradient(180deg, #1c1c1c 39.58%, #28516b 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #1e90ff;
        border-radius: 8px;

        span {
          color: #fff;
        }

        input {
          background: transparent;
          border: none;
          text-align: right;

          &::placeholder {
            color: #ffffff;
            font-weight: 700;
            font-size: 14px;
          }
        }
      }

      button {
        background: linear-gradient(180deg, #fab263 0%, #5f3a12 80.03%);
        border-radius: 8px;
        border: none;
        padding: 8px 15px;
        color: #ffffff;
        font-weight: 700;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }

  .bet-main-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .bet-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      background: #435b6a;
      border-radius: 12px;
      min-width: 473px;
      max-height: 225px;

      iframe {
        border-radius: 12px;
        height: 225px;
      }
    }

    .bet-status-main {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      margin-top: 8px;

      .bet-mini-main {
        display: flex;
        align-items: center;
        justify-content: space-around;
        /* gap: 5px; */
        background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
        border: 1px solid #4682b4;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 12px;
        padding: 2px 5px;
        width: 100%;

        span:nth-child(1) {
          color: #fff;
        }

        span:nth-child(2) {
          color: #87cefa;
        }

        span:nth-child(3) {
          color: #fff;
        }
      }
      .event-mini-main:nth-child(1) {
        border: 1px solid #ffcd4b;
      }
    }
  }

  .win_wrapper {
    display: flex;
    justify-content: center;
    gap: 15px;
    width: 100%;
    /* padding: 0px 12px 0px 40px; */
  }

  .Kardashian {
    margin: 0 auto;
  }

  .betStat {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: #0a1a25;
    border-radius: 10px;
    padding: 10px;
    max-width: 135px;
    width: 100%;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    span {
      font-family: "Inter";
      font-size: 10px;
      color: #ffffff;
      font-weight: 700;
    }
    #clr {
      color: #fc4c1e;
    }
    label {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    input {
      border: none;
      background: none;
      text-align: end;
    }
  }

  @media screen and (max-width: 420px) {
    padding: 10px;
  }

  @media screen and (max-width: 375px) {
    padding: 10px;
  }

  .WIN {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
    border: 1px solid #4682b4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    max-width: 473px;

    .title {
      display: flex;
      gap: 2px;
    }
    .bet-btn {
      background: #fc4c1e;
    }

    p {
      display: flex;
      align-items: center;
      text-align: center;
      font-weight: 700;
      font-size: 16px;
      color: #ffffff;
    }
    button {
      align-items: center;
      /* max-width: 171px; */
      min-height: 38px;
      background: #fc4c1e;
      border-radius: 6px;
      color: #ffffff;
      border: none;
      font-size: 14px;
      cursor: pointer;
      padding: 10px 60px;
      max-width: 207px;
    }
    span {
      font-weight: 500;
      font-size: 10px;
      color: #d6d6d6;
    }
  }

  @media screen and (max-width: 1080px) {
    max-width: 690px;
    margin: 0px 5px;

    .WIN {
      padding: 10px;
      max-width: 145px;

      p {
        font-size: 12px;
      }

      button {
        font-size: 10px;
        padding: 5px 55px;
        min-height: 20px;
      }
    }
  }

  @media screen and (max-width: 820px) {
    max-width: 420px;
    margin: 0px 5px;

    .WIN {
      padding: 5px;
      max-width: 76px;
      gap: 5px;
      border-radius: 3.75px;

      p {
        font-size: 9px;
      }

      button {
        padding: 0px 25px;
        font-size: 7px;
        border-radius: 2.25px;
        min-height: 15px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .WIN {
      padding: 10px;
      max-width: 150px;

      p {
        font-size: 12px;
      }

      button {
        font-size: 10px;
        padding: 5px 45px;
        min-height: 20px;
      }
    }
  }
  @media screen and (max-width: 620px) {
    .WIN {
      padding: 5px 5px;
      max-width: 115px;

      p {
        font-size: 9px;
      }

      button {
        font-size: 8.386px;
        padding: 0px 35px;
        min-height: 20px;
      }
    }
  }
  @media screen and (max-width: 420px) {
    .WIN {
      padding: 5px;
      max-width: 76px;
      gap: 5px;
      border-radius: 3.75px;

      p {
        font-size: 6px;
      }

      button {
        padding: 0px 25px;
        font-size: 5.25px;
        border-radius: 2.25px;
        min-height: 15px;
      }
    }
  }
  @media screen and (max-width: 375px) {
    max-width: 340px;
    margin: 0 auto;

    .WIN {
      padding: 5px;
      max-width: 76px;
      gap: 5px;
      border-radius: 3.75px;

      p {
        font-size: 6px;
      }

      button {
        padding: 0px 25px;
        font-size: 5.25px;
        border-radius: 2.25px;
        min-height: 15px;
      }
    }
  }
`;
