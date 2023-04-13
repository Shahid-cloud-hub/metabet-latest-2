import styled from "styled-components";

export const AINFTContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px 9px 20px 47px;

  .ai-filter-btn {
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
      cursor: pointer;

      span {
        color: #ffffff;
      }
    }
    .betactive {
      border: 1px solid;
      /* border-image: linear-gradient(45deg, #997860, #ffa133) 1; */
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
      /* background-image: linear-gradient(45deg, #997860, #ffa133); */
      background: linear-gradient(
        118.51deg,
        #e1f5fe -4.48%,
        #ff67f9 56.27%,
        #e1f5fe 107.68%
      );

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
    .slick-slider {
      width: 100%;
      max-width: 900px;
      margin: -4px auto;
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
      /* background: linear-gradient(45deg, #997860, #ffa133) border-box; */
      /* -webkit-mask: linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0); */
      /* -webkit-mask-composite: destination-out; */
      /* mask-composite: exclude; */
    }
    .gradient-text {
      /* background: linear-gradient(to right, #997860, #ffa133); */
      background: linear-gradient(
        118.51deg,
        #e1f5fe -4.48%,
        #ff67f9 56.27%,
        #e1f5fe 107.68%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      /* text-fill-color: transparent; */
    }
    .slick-track {
      display: flex;
      gap: 10px;
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

  .market-place-btn {
    display: flex;
    gap: 20px;
    button {
      font-size: 16px;
      padding: 15px 0px;
      max-width: 160px;
      width: 100%;
      background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
      border: 2px solid #a8d7ff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
      gap: 4px;
      color: #87cefa;
      cursor: pointer;
    }
    .myNFT-active {
      color: #ffffff;
    }
  }

  .market-place-filter-btn {
    display: flex;
    justify-content: flex-end;
    gap: 20px;

    .parent-wrapper {
      /* display: flex; */
      /* flex-direction: column; */
      /* justify-content: flex-end; */
      /* width: 100%; */
      /* gap: 20px; */
      padding-top: 10px;

      /* padding: 10px 20px; */

      .react-dropdown {
        position: relative;
        display: inline-block;
        padding: 15px 10px;
        min-width: 10em;
        cursor: pointer;
        user-select: none;
        border-radius: 0.4em;
        box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45);
        outline: none;
        box-sizing: border-box;
        background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
        border: 1px solid #4682b4;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 12px;
        color: #fff;

        &:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #ed6f1e;
        }
        &::before {
          content: "";
          position: absolute;
          z-index: 10;
          top: 0;
          right: 0;
          box-sizing: border-box;
          height: 100%;
          /* width: 3em; */
          padding-top: 0.6em;
          /* border-left: 0.2em solid #1c1c1c; */
          border-radius: 0 0.4em 0.4em 0;
          /* background-color: #5f9ea0; */
          background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
        }
        &::after {
          content: ""; /* If not empty make sure to set a charset meta tag */
          position: absolute;
          z-index: 10;
          box-sizing: border-box;
          width: 0.6rem;
          height: 0.6rem;
          border-radius: initial;
          background: white;
          top: 50%;
          right: 0;
          transform: translate(-90%, -50%);
          transition: clip-path 330ms ease;
          clip-path: polygon(0 0, 100% 0, 50% 100%, 50% 100%);
        }
        .optList {
          position: absolute;
          top: 100%;
          left: 0;
          list-style: none;
          /* !important will affect the rest of your CSS despite being in a layer */
          margin: 0 !important;
          padding: 0 !important;
          box-sizing: border-box;
          min-width: 100%;
          max-height: 20em;
          overflow-y: auto;
          overflow-x: hidden;
          border: 0.2em solid #5f9ea0;
          border-top-width: 0.1em;
          border-radius: 0 0 0.4em 0.4em;
          box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);
          /* background: #5f9ea0; */
          background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);

          transition: transform 330ms ease, opacity 330ms ease;
          transform: translateY(1px);
          z-index: 5;
          text-align: center;

          &.hidden {
            max-height: 0;
            visibility: hidden;
          }
        }
        .value {
          display: inline-block;
          font-size: 14px;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          vertical-align: top;
          text-align: center;
          font-family: "mostra-nuova", sans-serif;
        }
        .option {
          padding: 10px;
          font-size: 14px;
          opacity: 0;
          animation-delay: calc(40ms * var(--index)) !important;
          font-family: "mostra-nuova", sans-serif;

          hr {
            border-top: 1px solid #fff;
            max-width: 100px;
            margin: 0 auto;
          }
        }
        &.active {
          &::after {
            clip-path: polygon(50% 0, 50% 0, 100% 100%, 0 100%);
          }
          .option {
            animation: drop 220ms ease forwards;
          }
        }
        .highlight {
          background-color: #5f9ea0;
          color: white;
          font-weight: bold;
        }
        select {
          visibility: hidden;
          max-height: 0;
          position: absolute;
          padding: 0;
          margin: 0;
        }
      }

      @keyframes drop {
        from {
          transform: translateY(-5px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }

      button {
        width: 108px;
        background: #5f9ea0;
        border-radius: 8px;
        border: none;
        color: #ffffff;
        font-size: 14px;
        font-family: "mostra-nuova", sans-serif;
        padding: 10px 0px;
        cursor: pointer;
        margin-right: 5%;
      }
    }
  }
`;

export const MarketPlaceContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  padding: 30px 0px;
  /* center items */

  .cryptoAi {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 0px;
    gap: 24px;
    background: linear-gradient(180.07deg, #422347 -1.92%, #18021c 98.15%);
    border-radius: 12px;
    width: 100%;
    max-width: 322px;
    border: 1px solid #ff33f7;

    #white {
      font-family: "mostra-nuova";
      font-weight: 800;
      font-size: 16px;
      line-height: 95%;
      color: #e1f5fe;
    }
    span {
      font-family: "mostra-nuova";
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 95%;
      color: #b1b1b1;
    }
    #purple {
      background: linear-gradient(90deg, #986099 -8.82%, #ff33f7 111.76%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-family: "mostra-nuova";
      font-style: normal;
      font-weight: 900;
      font-size: 14px;
    }
    .head {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    .stats {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .cryptoScore {
        display: flex;
        gap: 10px;
        .score {
          display: flex;
          align-items: center;
          gap: 7px;
        }
      }
      .Address {
        display: flex;
        align-items: center;
        gap: 10px;
        .cryptoId {
          display: flex;
          align-items: center;
          gap: 5px;
          span {
            text-decoration-line: underline;
          }
        }
      }
    }
    .Social {
      display: flex;
      align-items: center;
      gap: 50px;

      .list {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 11px;

        .item {
          display: flex;
          align-items: center;
          gap: 5px;
        }
      }
      .list1 {
        display: flex;
        flex-direction: column;
        gap: 18px;
      }
    }
    .priceButton {
      display: flex;
      gap: 10px;

      .last-price {
        width: 100%;
        max-width: 90px;
        min-height: 42px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(180deg, #1c1c1c 39.58%, #62286b 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #d036ae;
        border-radius: 34px;
        padding: 5px 21px;

        span {
          font-weight: 500;
          font-size: 10px;
          line-height: 12px;
          font-family: "mostra-nuova";
          color: #9c67ae;
        }
        div {
          display: flex;
          gap: 5px;
          align-items: center;
          span {
            font-family: "mostra-nuova";
            font-weight: 700;
            font-size: 14px;
            line-height: 143.7%;
            color: #ec9eff;
            text-shadow: 0px 0px 30px #000000;
          }
        }
      }
      .sale-price {
        width: 100%;
        max-width: 90px;
        min-height: 42px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(180deg, #0f120f 39.58%, #225321 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #50ff6c;
        border-radius: 34px;
        padding: 5px 21px;

        span {
          font-weight: 500;
          font-size: 10px;
          line-height: 12px;
          font-family: "mostra-nuova";
          color: #5f9ea0;
        }
        div {
          display: flex;
          gap: 5px;
          align-items: center;
          span {
            font-family: "mostra-nuova";
            font-weight: 700;
            font-size: 14px;
            line-height: 143.7%;
            color: #89ffa3;
            text-shadow: 0px 0px 30px #000000;
          }
        }
      }
      .next-price {
        width: 100%;
        max-width: 90px;
        min-height: 42px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #1e90ff;
        border-radius: 34px;
        padding: 5px 21px;

        span {
          font-weight: 500;
          font-size: 10px;
          line-height: 12px;
          font-family: "mostra-nuova";
          color: #70a1bc;
        }
        div {
          display: flex;
          gap: 5px;
          align-items: center;
          span {
            font-family: "mostra-nuova";
            font-weight: 700;
            font-size: 14px;
            line-height: 143.7%;
            color: #64baff;
            text-shadow: 0px 0px 30px #000000;
          }
        }
      }
    }

    .wallet {
      display: flex;
      gap: 110px;
      width: 100%;
      margin-bottom: 10px;

      #buy {
        font-family: "mostra-nuova";
        font-weight: 700;
        font-size: 16px;
        line-height: 95%;
        color: #89ffa3;
        text-decoration-line: none;
      }
      .wallet-list {
        display: flex;
        flex-direction: column;
        gap: 10px;

        span {
          text-decoration-line: underline;
          display: flex;
          gap: 7px;
        }
      }
      #wallet {
        font-family: "mostra-nuova";
        font-weight: 700;
        font-size: 16px;
        line-height: 95%;
        background: linear-gradient(
          118.51deg,
          #e1f5fe -4.48%,
          #ff67f9 56.27%,
          #e1f5fe 107.68%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-decoration-line: none;
      }

      .price-list {
        display: flex;
        flex-direction: column;
        gap: 10px;

        span {
          display: flex;
          gap: 5px;
        }
      }
      .wrapper-main-nft {
        position: relative;
        width: 100%;
        height: calc(10vh - 4px);
        padding: 0;
        overflow-y: auto;
        overflow-x: hidden;
        z-index: 9;
        top: 6px;
        padding: 0px 20px;
        margin-right: 10px;

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
        div {
          display: flex;
          gap: 7px;
          justify-content: space-between;
        }
      }
    }
  }
`;
