import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .img_free_bets {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    max-width: 996px;
    padding: 20px 0px;
  }

  a {
    .img_1 {
      max-width: 250px;
    }
    img {
      max-width: 150px;
    }
  }

  .middle {
    display: flex;
    align-items: center;
    gap: 50px;

    a:nth-child(1) {
      transform: translate(-36px, -60px);
    }
    a:nth-child(3) {
      transform: translate(36px, -60px);
    }
  }
  .end {
    display: flex;
    align-items: center;
    gap: 120px;

    a:nth-child(1) {
      transform: translate(36px, -60px);
    }
    a:nth-child(3) {
      transform: translate(-36px, -60px);
    }
  }

  @media screen and (max-width: 1080px) {
    height: 100%;
  }

  @media screen and (max-width: 1024px) {
    height: 100%;
    .img_free_bets {
      max-width: 630px;
    }
    .end {
      gap: 110px;
    }
  }
  @media screen and (max-width: 912px) {
    justify-content: flex-start;
    height: 100%;
    a {
      .img_1 {
        max-width: 70px;
      }
      img {
        max-width: 90px;
      }

      div {
        img {
          max-width: 90px;
        }
      }
    }

    .middle {
      a:nth-child(1) {
        transform: translate(6px, -96px);
      }
      a:nth-child(3) {
        transform: translate(-15px, -125px);
      }
    }

    .end {
      gap: 0px;
      a:nth-child(1) {
        transform: translate(-60px, -67px);
      }
      a:nth-child(3) {
        transform: translate(31px, -63px);
      }
    }
  }
  @media screen and (max-width: 820px) {
    justify-content: flex-start;
    height: 100vh;
    a {
      .img_1 {
        max-width: 70px;
      }
      img {
        max-width: 90px;
      }

      div {
        img {
          max-width: 90px;
        }
      }
    }

    .middle {
      a:nth-child(1) {
        transform: translate(6px, -96px);
      }
      a:nth-child(3) {
        transform: translate(-15px, -125px);
      }
    }

    .end {
      gap: 0px;
      a:nth-child(1) {
        transform: translate(-60px, -67px);
      }
      a:nth-child(3) {
        transform: translate(31px, -63px);
      }
    }
  }

  @media screen and (max-width: 620px) {
    justify-content: flex-start;
    height: 100vh;
    a {
      .img_1 {
        max-width: 180px;
      }
      img {
        max-width: 120px;
      }

      div {
        img {
          max-width: 120px;
        }
      }
    }

    .middle {
      a:nth-child(1) {
        transform: translate(6px, -96px);
      }
      a:nth-child(3) {
        transform: translate(-15px, -125px);
      }
    }

    .end {
      gap: 0px;
      a:nth-child(1) {
        transform: translate(-60px, -67px);
      }
      a:nth-child(3) {
        transform: translate(31px, -63px);
      }
    }
  }

  @media screen and (max-width: 520px) {
    a {
      .img_1 {
        max-width: 150px;
      }
      img {
        max-width: 100px;
      }
    }

    .end {
      gap: 0px;
      a:nth-child(1) {
        transform: translate(76px, -111px);
      }
      a:nth-child(3) {
        transform: translate(-76px, -111px);
      }
    }
  }

  @media screen and (max-width: 420px) {
    .img_free_bets {
      justify-content: center;

      img {
        max-width: 250px;
      }
    }

    a {
      .img_1 {
        max-width: 70px;
      }
      img {
        max-width: 70px;
      }
    }

    .middle {
      a:nth-child(1) {
        transform: translate(6px, -96px);
      }
      a:nth-child(3) {
        transform: translate(-15px, -125px);
      }

      .connect-wallet-img {
        img {
          max-width: 70px;
        }
      }
    }

    .end {
      gap: 0px;
      a:nth-child(1) {
        transform: translate(-40px, -111px);
      }
      a:nth-child(3) {
        transform: translate(25px, -111px);
      }
    }
  }
`;

export const DashContainer = styled("div")`
  width: 100%;

  .parent-wrapper {
    display: flex;
    /* flex-direction: column; */
    justify-content: flex-end;
    width: 100%;
    gap: 20px;
    padding-top: 10px;

    /* padding: 10px 20px; */

    .react-dropdown {
      position: relative;
      display: inline-block;
      padding: 10px;
      min-width: 8em;
      cursor: pointer;
      user-select: none;
      border-radius: 0.4em;
      box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45);
      outline: none;
      box-sizing: border-box;
      background: #5f9ea0;
      z-index: 10;
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
        width: 3em;
        padding-top: 0.6em;
        border-left: 0.2em solid #5f9ea0;
        border-radius: 0 0.4em 0.4em 0;
        background-color: #5f9ea0;
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
        background: #5f9ea0;
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
        color: #337577;
        font-size: 14px;
        opacity: 0;
        animation-delay: calc(40ms * var(--index)) !important;
        font-family: "mostra-nuova", sans-serif;

        hr {
          border: 1px solid #337577;
          max-width: 100px;
          margin: 0 auto;
          color: #337577;
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
    @media screen and (max-width: 375px) {
      button {
        margin-right: 0px;
      }
    }
  }

  .card-parent {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 20px;

    @media screen and (max-width: 1024px) {
      margin: 0px 10px;
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 920px) {
      grid-template-columns: 1fr;
    }
    @media screen and (max-width: 912px) {
      grid-template-columns: 1fr;
    }
    @media screen and (max-width: 820px) {
      margin: 10px 20px;
      grid-template-columns: 1fr;
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
      padding: 0px;
    }
    @media screen and (max-width: 768px) {
      margin: 30px auto 0;
    }
    @media screen and (max-width: 740px) {
      margin: 0 auto;
      grid-template-columns: 1fr;
    }
    @media screen and (max-width: 620px) {
      margin: 0 auto;
      grid-template-columns: 1fr;
    }

    @media screen and (max-width: 520px) {
      margin: 0 auto;
      grid-template-columns: 1fr;
    }

    @media screen and (max-width: 420px) {
      grid-template-columns: 1fr;
    }

    @media screen and (max-width: 375px) {
      grid-template-columns: 1fr;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  .card-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    span {
      color: #fff;
      font-size: 17px;
      font-weight: 700;
    }

    button {
      border: none;
      padding: 5px 30px;
      font-size: 18px;
      color: #ffff;
      cursor: pointer;
      max-width: 133px;
      background: #fc4c1e;
      border-radius: 100px;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-family: "Inter", sans-serif;
    }
  }
`;
