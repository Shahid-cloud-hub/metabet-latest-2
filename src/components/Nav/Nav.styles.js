import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* max-width: 1010px; */
  /* background: #1b2c38; */
  background: ${(props) => props.purpleBackground};
  box-shadow: ${(props) =>
    props.removeShadow
      ? "0px 4px 10px rgba(0, 0, 0, 0.5)"
      : " 0px 4px 10px rgba(0, 0, 0, 0.5)"};

  .background {
    display: flex;
    max-width: ${(props) => (props.removeWidth ? "300px" : "0px")};
    width: 100%;
    padding: 10px 20px;
    min-height: 49px;
    background: ${(props) => (props.changeColor ? "#0f212e" : "#1b2c38")};
    box-shadow: ${(props) =>
      props.removeShadow ? "0px 4px 10px rgba(0, 0, 0, 0.5)" : "none"};

    a {
      transform: translate(-6px, 8px);
    }
  }
  .background-purple {
    display: flex;
    max-width: ${(props) => (props.removeWidth ? "300px" : "0px")};
    width: 100%;
    padding: 10px 20px;
    min-height: 49px;
    background: ${(props) => (props.changeColor ? "#130e19" : "#130e19")};
    box-shadow: ${(props) =>
      props.removeShadow ? "0px 4px 10px rgba(0, 0, 0, 0.5)" : "none"};

    a {
      transform: translate(-6px, 8px);
    }
  }

  .dropdown-section {
    display: flex;
    padding: 0px 8px;
    width: 100%;

    #google_element {
      padding: 0px 10px;
    }
  }
  .dropdown-ai {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-left: 40px;
    gap: 15px;
  }
  .openai {
    display: flex;
    align-items: center;
    gap: 10px;

    div {
      display: flex;
      align-items: end;
      span {
        font-size: 16px;
        color: #ffffff;
      }
    }
  }
  @media screen and (max-width: 1080px) {
    .dropdown-section {
      gap: 10px;
    }
    .dropdown-ai {
      justify-content: flex-end;
      gap: 50px;
    }
    .openai {
      display: flex;
      img {
        height: 34px;
        width: 34px;
      }
      div {
        img {
          width: 15px;
          height: 15px;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .dropdown-section {
      gap: 10px;
    }
    .dropdown-ai {
      justify-content: center;
      gap: 50px;
    }
    .openai {
      display: flex;
      img {
        height: 34px;
        width: 34px;
      }
      div {
        img {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
  @media screen and (max-width: 920px) {
    .dropdown-ai {
      justify-content: center;
      // gap: 50px;
    }
    .openai {
      display: flex;
      img {
        height: 34px;
        width: 34px;
      }
      div {
        img {
          width: 15px;
          height: 15px;
        }
      }
    }
  }

  @media screen and (max-width: 880px) {
    .background-purple {
      padding: 10px 0px;

      a {
        transform: translate(10px, 10px);
      }
    }
  }

  @media screen and (max-width: 820px) {
    .dropdown-ai {
      justify-content: center;

      // gap: 5px;
    }
    .openai {
      gap: 5px;
      div {
        gap: 2px;
      }
      img {
        height: 22px;
        width: 22px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .background {
      // min-height: 80px;
      padding: 0;
    }
    .dropdown-ai {
      justify-content: center;
    }
  }
  @media screen and (max-width: 414px) {
    .background-purple {
      padding: 10px 0px;

      a {
        transform: translate(10px, 10px);
        img {
          width: 96px;
        }
      }
    }
    .dropdown-ai {
      justify-content: center;
    }
  }
  @media screen and (max-width: 375px) {
    .openai {
      img {
        height: 22px;
        width: 22px;
      }
      div {
        gap: 5px;
        img {
          margin: 0px;
          width: 15px;
          height: 15px;
        }
      }
    }
  }
  @media screen and (max-width: 360px) {
    .dropdown-ai {
      justify-content: center;
    }
  }
`;

export const BetStatusContainer = styled("div")`
  width: 100%;
  padding: 0px 30px;

  .bet-status-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 100%;

    .bet-status-boxes {
      display: flex;
      gap: 20px;

      label {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        background: #0f212e;
        border-radius: 6px;
        padding: 3px 10px;
        max-width: 200px;

        input {
          background: transparent;
          border: none;
          font-size: 18px;
          color: #fff;
          font-weight: 600;
          width: 100%;

          &::placeholder {
            font-size: 18px;
            color: #fff;
            font-weight: 600;
          }
        }
      }
    }

    button {
      width: 100%;
      max-width: 100px;
      min-height: 39px;
      background: linear-gradient(180deg, #fab263 0%, #5f3a12 80.03%);
      border-radius: 6px;
      cursor: pointer;
      font-family: mostra-nuova, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: #fff;
      border: none;
      padding: 0 23px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (max-width: 940px) {
    .bet-status-container {
      justify-content: flex-end;
      .bet-status-boxes {
        label {
          input {
            font-size: 15px;

            &::placeholder {
              font-size: 16px;
              color: #fff;
              font-weight: 600;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 880px) {
    padding: 0;
    .bet-status-container {
      justify-content: center;
      padding: 20px 0px;
      .main-connect-btn {
        margin-left: 35px;
      }
      .bet-status-boxes {
        label {
          input {
            font-size: 15px;

            &::placeholder {
              font-size: 16px;
              color: #fff;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    .bet-status-container {
      justify-content: center;
      padding: 20px 0px;
      .main-connect-btn {
        margin-left: 50px;
      }
    }
  }
  @media screen and (max-width: 690px) {
    padding: 0;

    .bet-status-container {
      justify-content: center;
      padding: 10px 0px;
      .bet-status-boxes {
        gap: 5px;
        flex-wrap: wrap;
        justify-content: center;
        label {
          max-width: 148px;

          input {
            font-size: 12px;

            &::placeholder {
              font-size: 12px;
              color: #fff;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 375px) {
    padding: 0;
    .bet-status-container {
      justify-content: center;
      padding: 20px 0px;
      .main-connect-btn {
        margin-left: 80px;
      }
    }
  }
  @media screen and (max-width: 350px) {
    padding: 0;
    .bet-status-container {
      justify-content: center;
      padding: 10px 0px;
      .bet-status-boxes {
        gap: 5px;
        flex-wrap: wrap;
        justify-content: center;
        label {
          max-width: 115px;

          input {
            font-size: 12px;

            &::placeholder {
              font-size: 12px;
              color: #fff;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
`;

export const BetAINFTStatusContainer = styled("div")`
  width: 100%;
  padding: 0px 30px;

  .bet-status-ai-nft-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* gap: 20px; */
    width: 100%;
    padding-top: ${(props) => props.paddTop};

    .bet-ai-nft-status-boxes {
      display: flex;
      /* display: ${(props) => props.hideBtns}; */
      gap: 20px;

      label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #1d1625;
        border-radius: 6px;
        padding: 3px 10px;
        max-width: 200px;
        gap: 25px;

        span {
          color: #ffffff;
          font-weight: 500;
          font-size: 18px;
        }

        input {
          background: transparent;
          border: none;
          font-size: 18px;
          color: #fff;
          font-weight: 600;
          max-width: 60px;
          text-align: right;

          &::placeholder {
            font-size: 18px;
            color: #fff;
            font-weight: 600;
          }
        }
      }

      .dollar-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        .dollar-status-text {
          display: flex;
          flex-direction: column;

          input {
            background: transparent;
            border: none;
            font-size: 18px;
            color: #fff;
            font-weight: 600;
            max-width: 58px;
            text-align: right;

            &::placeholder {
              font-size: 18px;
              color: #fff;
              font-weight: 600;
            }
          }

          span {
            font-size: 12px;
            color: #999999;
          }
        }
      }
    }

    .bet-ai-nft-status-boxes-1 {
      display: flex;
      gap: 20px;

      label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #1d1625;
        border-radius: 6px;
        padding: 3px 10px;
        max-width: 200px;
        gap: 25px;

        span {
          color: #ffffff;
          font-weight: 500;
          font-size: 18px;
        }

        input {
          background: transparent;
          border: none;
          font-size: 18px;
          color: #fff;
          font-weight: 600;
          max-width: 60px;
          text-align: right;

          &::placeholder {
            font-size: 18px;
            color: #fff;
            font-weight: 600;
          }
        }
      }

      .dollar-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        .dollar-status-text {
          display: flex;
          flex-direction: column;

          input {
            background: transparent;
            border: none;
            font-size: 18px;
            color: #fff;
            font-weight: 600;
            max-width: 58px;
            text-align: right;

            &::placeholder {
              font-size: 18px;
              color: #fff;
              font-weight: 600;
            }
          }

          span {
            font-size: 12px;
            color: #999999;
          }
        }
      }
    }

    .ai-nft-wallet-connect-btn {
      display: flex;
      gap: 15px;
      align-items: center;
      margin-left: 98px;

      button {
        width: 100%;
        max-width: 100px;
        min-height: 39px;
        background: linear-gradient(90deg, #607099 -8.82%, #a533ff 111.76%);
        border-radius: 6px;
        cursor: pointer;
        font-family: mostra-nuova, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #fff;
        border: none;
        padding: 0 23px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .hide {
    display: none;
  }
  @media screen and (max-width: 1340px) {
    .bet-status-ai-nft-container {
      .bet-ai-nft-status-boxes {
        gap: 10px;
        label {
          max-width: 169px;
          gap: 10px;
          span {
            color: #ffffff;
            font-weight: 500;
            font-size: 14px;
          }
          input {
            font-size: 15px;
            max-width: 47px;

            &::placeholder {
              font-size: 16px;
              color: #fff;
              font-weight: 600;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1180px) {
    .bet-status-ai-nft-container {
      .bet-ai-nft-status-boxes {
        gap: 7px;
        label {
          max-width: 169px;
          gap: 5px;
          span {
            color: #ffffff;
            font-weight: 500;
            font-size: 11px;
          }
          input {
            font-size: 15px;
            max-width: 35px;

            &::placeholder {
              font-size: 12px;
              color: #fff;
              font-weight: 600;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1080px) {
    /* padding: 0px; */
    padding: ${(props) => props.removePadd};
    .bet-status-ai-nft-container {
      /* justify-content: flex-end; */
      justify-content: ${(props) => props.flexStart};
      .bet-ai-nft-status-boxes {
        gap: 10px;
        label {
          max-width: 169px;
          gap: 10px;
          span {
            color: #ffffff;
            font-weight: 500;
            font-size: 14px;
          }
          input {
            font-size: 15px;
            max-width: 47px;

            &::placeholder {
              font-size: 16px;
              color: #fff;
              font-weight: 600;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 0px;
    .bet-status-ai-nft-container {
      max-width: 500px;
      margin: 0 auto;

      .bet-ai-nft-status-boxes {
        flex-wrap: wrap;
        gap: 10px;
        label {
          max-width: 225px;
          width: 100%;
          gap: 10px;
          padding: 11px 8px;

          span {
            color: #ffffff;
            font-weight: 500;
            font-size: 14px;
          }
          input {
            font-size: 15px;
            max-width: 47px;

            &::placeholder {
              font-size: 16px;
              color: #fff;
              font-weight: 600;
            }
          }
        }
        label:nth-child(1) {
          padding: 14px 8px;
        }
      }
    }
  }

  @media screen and (max-width: 880px) {
    padding: 0px;
    .bet-status-ai-nft-container {
      justify-content: center;
      max-width: 700px;
      margin: 0 auto;

      .bet-ai-nft-status-boxes {
        flex-wrap: nowrap;
        gap: 10px;
        width: 100%;

        label {
          max-width: 225px;
          width: 100%;
          gap: 10px;
          padding: 11px 8px;

          span {
            color: #ffffff;
            font-weight: 500;
            font-size: 14px;
          }
          input {
            font-size: 15px;
            max-width: 47px;

            &::placeholder {
              font-size: 16px;
              color: #fff;
              font-weight: 600;
            }
          }
        }
        label:nth-child(1) {
          padding: 14px 8px;
        }

        .dollar-wrapper {
          width: 100%;
          justify-content: flex-start;
        }
      }

      .ai-nft-wallet-connect-btn {
        .shop-img {
          display: none;
        }
      }
    }
  }

  @media screen and (max-width: 940px) {
    padding: 0px;
    .bet-status-ai-nft-container {
      .bet-ai-nft-status-boxes {
        label {
          span {
            color: #ffffff;
            font-weight: 500;
            font-size: 14px;
          }
          input {
            font-size: 15px;

            &::placeholder {
              font-size: 16px;
              color: #fff;
              font-weight: 600;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 680px) {
    .bet-status-ai-nft-container {
      max-width: 500px;
      margin: 0 auto;
      .bet-ai-nft-status-boxes {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        label {
          width: 100%;
          max-width: 227px;
        }
      }
    }
  }

  @media screen and (max-width: 580px) {
    .bet-status-ai-nft-container {
      max-width: 450px;
      margin: 0 auto;
      .bet-ai-nft-status-boxes {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        label {
          width: 100%;
          max-width: 205px;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .bet-status-ai-nft-container {
      max-width: 380px;
      margin: 0 auto;
      .bet-ai-nft-status-boxes {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        label {
          width: 100%;
          max-width: 170px;
        }
      }
    }
  }

  @media screen and (max-width: 395px) {
    .bet-status-ai-nft-container {
      max-width: 330px;
      margin: 0 auto;
      .bet-ai-nft-status-boxes {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        label {
          width: 100%;
          max-width: 140px;
        }
      }
    }
  }
`;
