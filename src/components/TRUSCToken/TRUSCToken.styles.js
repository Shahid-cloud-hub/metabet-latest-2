import styled from "styled-components";

export const TRUSCTokenContainer = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  img {
    cursor: pointer;
  }
  @media screen and (max-width: 820px) {
    gap: 30px;
  }
  @media screen and (max-width: 768px) {
    gap: 20px;
  }
  @media screen and (max-width: 540px) {
    gap: 15px;
  }
`;

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  width: 100%;
  max-width: 983px;
  min-height: 225px;
  background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
  border: 1px solid #5f9ea0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  gap: 30px;
  button {
    background: #6495ed;
    border-radius: 12px;
    width: 108px;
    height: 34px;
    font-size: 15px;
    color: #ffffff;
    font-family: "mostra-nuova", sans-serif;
    border: none;
  }

  .heading {
    padding-top: 10px;
    text-align: center;
    span {
      font-family: "mostra-nuova", sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 21px;
      line-height: 95%;
      color: #5f9ea0;
    }
    hr {
      height: 2px;
      width: 433px;
      background: #5f9ea0;
      box-shadow: 0px 0px 0px #ffffff;
      border: none;
      margin-top: 10px;
    }
  }
  .heading1 {
    padding-top: 10px;
    text-align: center;
    span {
      font-family: "mostra-nuova", sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 21px;
      line-height: 95%;
      color: #1e90ff;
    }
    hr {
      height: 2px;
      width: 860px;
      background: #1e90ff;
      box-shadow: 0px 0px 0px #ffffff;
      border: none;
      margin-top: 10px;
    }
  }
  .convert {
    display: flex;
    align-items: center;
    gap: 210px;
  }
  .balance {
    display: flex;
    align-items: center;
    gap: 70px;
    padding: 0px 35px;

    .icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      .textspan {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        #blue {
          font-family: "mostra-nuova", sans-serif;
          font-size: 20px;
          color: #1e90ff;
        }
      }
      gap: 10px;
      img {
        width: 60px;
      }
      span {
        font-family: "Junegull";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 140%;
        color: #ffffff;
      }
    }
  }

  content {
    position: absolute;
    display: none;
  }

  .truai {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .dropdown {
      display: flex;
      flex-direction: column;
      gap: 5px;
      position: relative;

      input::placeholder {
        font-family: "mostra-nuova", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 95%;
        color: #ffffff;
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }

    .select {
      background: #020f18;
      border-radius: 4px;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 10px;
      position: absolute;
      transform: translate(30px, 31px);
      width: 100%;
      height: 192px;
      max-width: 174px;
      div {
        font-family: "mostra-nuova", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 95%;
        color: #ffffff;
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
    .select1 {
      background: #020f18;
      border-radius: 4px;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 10px;
      position: absolute;
      transform: translate(30px, 31px);
      width: 100%;
      height: 192px;
      max-width: 174px;
      div {
        font-family: "mostra-nuova", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 95%;
        color: #ffffff;
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
  }

  label {
    font-size: 15px;
    color: #637592;
    display: flex;
    gap: 5px;

    input {
      border: none;
      background: transparent;
      padding-left: 10px;
      max-width: 89px;
    }
    input::placeholder {
      font-size: 15px;
      color: #ffffff;
    }
  }
  #icon {
    margin-right: 40px;
  }
  span {
    font-family: "mostra-nuova", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 95%;
    color: #ffffff;
  }

  #grey {
    font-weight: 500;
    font-size: 15px;
    line-height: 95%;
    color: #637592;
  }
  #blue {
    font-weight: 700;
    font-size: 12px;
    line-height: 95%;
    color: #3d6eff;
  }
  @media screen and (max-width: 1280px) {
    max-width: 860px;
    .heading1 {
      hr {
        width: 835px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .convert {
      gap: 180px;
    }
  }
  @media screen and (max-width: 820px) {
    .convert {
      gap: 160px;
    }
    .heading1 {
      hr {
        width: 760px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .convert {
      gap: 160px;
    }
    .heading1 {
      hr {
        width: 720px;
      }
    }
  }
  @media screen and (max-width: 540px) {
    .convert {
      gap: 5px;
      padding-left: 78px;
    }
    .truai {
      gap: 10px;
      .dropdown {
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: relative;

        input::placeholder {
          font-family: "mostra-nuova", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 95%;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }

      .select {
        max-width: 135px;
        padding: 10px;
        gap: 10px;
        transform: translate(-25px, 219px);
        div {
          font-size: 12px;
          gap: 8px;
        }
      }
      .select1 {
        max-width: 135px;
        padding: 10px;
        gap: 10px;
        transform: translate(-15px, 33px);
        div {
          font-size: 12px;
          gap: 8px;
        }
      }
    }

    label {
      font-size: 15px;
      color: #637592;
      display: flex;
      gap: 5px;

      input {
        padding-left: 10px;
        max-width: 35px;
      }
      input::placeholder {
        font-size: 14px;
        color: #ffffff;
      }
    }
    #icon {
      margin-right: 10px;
      width: 40px;
    }
    span {
      font-size: 18px;
    }

    #grey {
      font-size: 12px;
    }
    #blue {
      font-size: 10px;
    }
    .balance {
      gap: 10px;

      .icon {
        .textspan {
          gap: 5px;
          #blue {
            font-size: 10px;
          }
        }
        gap: 10px;
        img {
          width: 40px;
        }
        span {
          font-size: 14px;
        }
      }
    }

    .heading {
      padding-top: 10px;
      text-align: center;
      span {
        font-size: 18px;
      }
      hr {
        width: 290px;
        margin-top: 10px;
      }
    }
    .heading1 {
      padding-top: 10px;
      text-align: center;
      span {
        font-size: 18px;
      }
      hr {
        height: 2px;
        width: 290px;
        margin-top: 10px;
      }
    }
  }
  @media screen and (max-width: 414px) {
    .convert {
      gap: 5px;
      padding-left: 78px;
    }
    .truai {
      gap: 10px;
      .dropdown {
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: relative;

        input::placeholder {
          font-family: "mostra-nuova", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 95%;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }

      .select {
        max-width: 135px;
        padding: 10px;
        gap: 10px;
        transform: translate(-25px, 219px);
        div {
          font-size: 12px;
          gap: 8px;
        }
      }
      .select1 {
        max-width: 135px;
        padding: 10px;
        gap: 10px;
        transform: translate(-15px, 33px);
        div {
          font-size: 12px;
          gap: 8px;
        }
      }
    }

    label {
      font-size: 15px;
      color: #637592;
      display: flex;
      gap: 5px;

      input {
        padding-left: 10px;
        max-width: 35px;
      }
      input::placeholder {
        font-size: 14px;
        color: #ffffff;
      }
    }
    #icon {
      margin-right: 10px;
      width: 40px;
    }
    span {
      font-size: 18px;
    }

    #grey {
      font-size: 12px;
    }
    #blue {
      font-size: 10px;
    }
    .balance {
      gap: 10px;

      .icon {
        .textspan {
          gap: 5px;
          #blue {
            font-size: 10px;
          }
        }
        gap: 10px;
        img {
          width: 40px;
        }
        span {
          font-size: 14px;
        }
      }
    }

    .heading {
      padding-top: 10px;
      text-align: center;
      span {
        font-size: 18px;
      }
      hr {
        width: 290px;
        margin-top: 10px;
      }
    }
    .heading1 {
      padding-top: 10px;
      text-align: center;
      span {
        font-size: 18px;
      }
      hr {
        height: 2px;
        width: 290px;
        margin-top: 10px;
      }
    }
  }
  @media screen and (max-width: 375px) {
    .convert {
      gap: 5px;
      padding-left: 78px;
    }
    .truai {
      gap: 10px;
      .dropdown {
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: relative;

        input::placeholder {
          font-family: "mostra-nuova", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 95%;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }

      .select {
        max-width: 135px;
        padding: 10px;
        gap: 10px;
        transform: translate(-25px, 219px);
        div {
          font-size: 12px;
          gap: 8px;
        }
      }
      .select1 {
        max-width: 135px;
        padding: 10px;
        gap: 10px;
        transform: translate(-15px, 33px);
        div {
          font-size: 12px;
          gap: 8px;
        }
      }
    }

    label {
      font-size: 15px;
      color: #637592;
      display: flex;
      gap: 5px;

      input {
        padding-left: 10px;
        max-width: 35px;
      }
      input::placeholder {
        font-size: 14px;
        color: #ffffff;
      }
    }
    #icon {
      margin-right: 10px;
      width: 40px;
    }
    span {
      font-size: 18px;
    }

    #grey {
      font-size: 12px;
    }
    #blue {
      font-size: 10px;
    }
    .balance {
      gap: 10px;

      .icon {
        .textspan {
          gap: 5px;
          #blue {
            font-size: 10px;
          }
        }
        gap: 10px;
        img {
          width: 40px;
        }
        span {
          font-size: 14px;
        }
      }
    }

    .heading {
      padding-top: 10px;
      text-align: center;
      span {
        font-size: 18px;
      }
      hr {
        width: 290px;
        margin-top: 10px;
      }
    }
    .heading1 {
      padding-top: 10px;
      text-align: center;
      span {
        font-size: 18px;
      }
      hr {
        height: 2px;
        width: 290px;
        margin-top: 10px;
      }
    }
  }
`;

export const Balance = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .fox-stats {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
      flex-wrap: wrap;
    }
    @media screen and (max-width: 820px) {
      flex-wrap: wrap;
      margin-left: 40px;
    }
    @media screen and (max-width: 768px) {
      flex-wrap: nowrap;
    }
    @media screen and (max-width: 680px) {
      flex-wrap: wrap;
    }
    @media screen and (max-width: 375px) {
      flex-wrap: wrap;
      margin-left: 0px;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 5px;
    max-width: 121px;
    min-height: 72px;
    background: linear-gradient(180deg, #1c1c1c 39.58%, #28516b 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #1e90ff;
    border-radius: 8px;

    #title {
      font-family: "mostra-nuova", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 17px;
      color: #5f9ea0;
      text-align: center;
    }
    input {
      background-color: transparent;
      width: 100%;
      max-width: 80px;
      padding: 5px 18px;
      text-align: center;
      border: none;
      font-family: "mostra-nuova", sans-serif;
      font-weight: 800;
    }
    input::placeholder {
      font-family: "mostra-nuova", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 143.7%;
      color: #0070c0;
      text-shadow: 0px 0px 30px #000000;
    }
  }
  .text1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 5px;
    max-width: 121px;
    min-height: 72px;
    background: linear-gradient(180deg, #0f120f 39.58%, #225321 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #40c265;
    border-radius: 8px;
    margin-left: 40px;

    #title {
      font-family: "mostra-nuova", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 17px;
      color: #5f9ea0;
    }
    input {
      background-color: transparent;
      width: 100%;
      max-width: 80px;
      padding: 5px 18px;
      text-align: center;
      border: none;
      font-family: "mostra-nuova", sans-serif;
      font-weight: 800;
    }
    input::placeholder {
      font-family: "mostra-nuova", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 143.7%;
      color: #359b52;
      text-shadow: 0px 0px 30px #000000;
    }
  }
  .text2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 5px;
    max-width: 121px;
    min-height: 72px;
    background: linear-gradient(180deg, #0f120f 39.58%, #225321 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #40c265;
    border-radius: 8px;
    margin-left: 10px;

    #title {
      font-family: "mostra-nuova", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 17px;
      color: #5f9ea0;
    }
    input {
      background-color: transparent;
      width: 100%;
      max-width: 80px;
      padding: 5px 18px;
      text-align: center;
      border: none;
      font-family: "mostra-nuova", sans-serif;
      font-weight: 800;
    }
    input::placeholder {
      font-family: "mostra-nuova", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 143.7%;
      color: #359b52;
      text-shadow: 0px 0px 30px #000000;
    }
  }
  @media screen and (max-width: 1080px) {
    .text {
      padding: 0px;

      #title {
        font-size: 9px;
      }
      input::placeholder {
        font-size: 16px;
      }
    }
  }
  .liquidity-pool {
    margin: auto 0;
    justify-content: start;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
    min-width: 983px;
    min-height: 178px;
    background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
    border: 1px solid #5f9ea0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    gap: 30px;
    button {
      background: #6495ed;
      border-radius: 12px;
      width: 108px;
      height: 34px;
      font-size: 15px;
      color: #ffffff;
      font-family: "mostra-nuova", sans-serif;
      border: none;
    }

    .heading {
      padding-top: 10px;
      text-align: center;
      span {
        font-family: "mostra-nuova", sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 21px;
        line-height: 95%;
        color: #5f9ea0;
      }
      hr {
        height: 2px;
        width: 433px;
        background: #5f9ea0;
        box-shadow: 0px 0px 0px #ffffff;
        border: none;
        margin-top: 10px;
      }
    }
    .heading1 {
      padding-top: 10px;
      text-align: center;
      span {
        font-family: "mostra-nuova", sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 21px;
        line-height: 95%;
        color: #1e90ff;
      }
      hr {
        height: 2px;
        width: 860px;
        background: #1e90ff;
        box-shadow: 0px 0px 0px #ffffff;
        border: none;
        margin-top: 10px;
      }
    }
    .convert {
      display: flex;
      align-items: center;
      gap: 210px;
    }
    .balance {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 0px 35px;

      .icon {
        flex-direction: column;
        display: flex;
        img {
          width: 60px;
        }
        span {
          font-family: "Junegull";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 140%;
          color: #ffffff;
        }
      }
    }

    content {
      position: absolute;
      display: none;
    }

    .truai {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .dropdown {
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: relative;

        input::placeholder {
          font-family: "mostra-nuova", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 15px;
          line-height: 95%;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }

      .select {
        width: 80px;
        background: #020f18;
        border-radius: 4px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: absolute;
        transform: translate(-8px, 31px);
        width: 100%;
        min-height: 192px;
        max-width: 174px;

        div {
          font-family: "mostra-nuova", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 15px;
          line-height: 95%;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 13px;
        }
      }
    }

    label {
      font-size: 15px;
      color: #637592;
      display: flex;
      gap: 5px;

      input {
        border: none;
        background: transparent;
        padding-left: 10px;
        max-width: 89px;
      }
      input::placeholder {
        font-size: 15px;
        color: #ffffff;
      }
    }
    #icon {
      margin-right: 40px;
    }
    span {
      font-family: "mostra-nuova", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 95%;
      color: #ffffff;
    }

    #grey {
      font-weight: 500;
      font-size: 15px;
      line-height: 95%;
      color: #637592;
    }
    #blue {
      font-weight: 700;
      font-size: 12px;
      line-height: 95%;
      color: #3d6eff;
    }
  }
  .liquidity-pool1 {
    margin: auto 0;
    justify-content: start;
    align-items: center;
    display: flex;
    padding: 10px;
    width: 100%;
    min-width: 983px;
    min-height: 178px;
    background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
    border: 1px solid #5f9ea0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    gap: 3px;
    #coin {
      padding-bottom: 130px;
    }
    button {
      background: #6495ed;
      border-radius: 12px;
      width: 108px;
      height: 34px;
      font-size: 15px;
      color: #ffffff;
      font-family: "mostra-nuova", sans-serif;
      border: none;
    }
    .images {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 30px;
    }

    .heading {
      padding-top: 10px;
      text-align: center;
      span {
        font-family: "mostra-nuova", sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 21px;
        line-height: 95%;
        color: #5f9ea0;
      }
      hr {
        height: 2px;
        width: 433px;
        background: #5f9ea0;
        box-shadow: 0px 0px 0px #ffffff;
        border: none;
        margin-top: 10px;
      }
    }
    .heading1 {
      padding-top: 10px;
      text-align: center;
      span {
        font-family: "mostra-nuova", sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 21px;
        line-height: 95%;
        color: #1e90ff;
      }
      hr {
        height: 2px;
        width: 860px;
        background: #1e90ff;
        box-shadow: 0px 0px 0px #ffffff;
        border: none;
        margin-top: 10px;
      }
    }
    .convert {
      display: flex;
      align-items: center;
      gap: 210px;
    }
    .balance {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 0px 35px;

      .icon {
        flex-direction: column;
        display: flex;
        img {
          width: 60px;
        }
        span {
          font-family: "Junegull";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 140%;
          color: #ffffff;
        }
      }
    }

    content {
      position: absolute;
      display: none;
    }

    .truai {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .dropdown {
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: relative;

        input::placeholder {
          font-family: "mostra-nuova", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 15px;
          line-height: 95%;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }

      .select {
        width: 80px;
        background: #020f18;
        border-radius: 4px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: absolute;
        transform: translate(-8px, 31px);
        width: 100%;
        min-height: 192px;
        max-width: 174px;

        div {
          font-family: "mostra-nuova", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 15px;
          line-height: 95%;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 13px;
        }
      }
    }

    label {
      font-size: 15px;
      color: #637592;
      display: flex;
      gap: 5px;

      input {
        border: none;
        background: transparent;
        padding-left: 10px;
        max-width: 89px;
      }
      input::placeholder {
        font-size: 15px;
        color: #ffffff;
      }
    }
    #icon {
      margin-right: 40px;
    }
    span {
      font-family: "mostra-nuova", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 95%;
      color: #ffffff;
    }

    #grey {
      font-weight: 500;
      font-size: 15px;
      line-height: 95%;
      color: #637592;
    }
    #blue {
      font-weight: 700;
      font-size: 12px;
      line-height: 95%;
      color: #3d6eff;
    }
  }

  .currency {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    .item {
      display: flex;
      flex-direction: column;
      gap: 10px;
      #currency {
        font-family: "junegull";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        color: #ffffff;
      }
    }
  }
  .fox-stats {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: "mostra-nuova", sans-serif;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 5px;
    span {
      font-size: 12px;
      color: #999999;
      font-family: "mostra-nuova", sans-serif;
    }

    #rate {
      font-family: "Junegull";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      color: #ffffff;
    }
  }
  @media screen and (max-width: 1280px) {
    display: flex;
    align-items: flex-start;
    .liquidity-pool {
      padding: 10px;
      min-width: 845px;
      min-height: 225px;
      .text #title {
        font-size: 10px;
      }
      .text {
        input {
          padding: 5px 5px;
        }
        input::placeholder {
          font-size: 16px;
        }
      }
      .text1 #title {
        font-size: 10px;
      }
      .text1 {
        input {
          padding: 5px 5px;
        }
        input::placeholder {
          font-size: 16px;
        }
      }

      .heading,
      .heading1 {
        hr {
          width: 350px;
          margin-top: 10px;
        }
      }
    }
    .liquidity-pool1 {
      padding: 10px;
      min-width: 845px;
      min-height: 225px;
      .text #title {
        font-size: 10px;
      }
      .text {
        input {
          padding: 5px 5px;
        }
        input::placeholder {
          font-size: 16px;
        }
      }
      .text1 #title {
        font-size: 10px;
      }
      .text1 {
        input {
          padding: 5px 5px;
        }
        input::placeholder {
          font-size: 16px;
        }
      }

      .heading,
      .heading1 {
        hr {
          width: 350px;
          margin-top: 10px;
        }
      }
    }
  }
  @media screen and (max-width: 1080px) {
    display: flex;
    align-items: flex-start;
    .liquidity-pool {
      .text {
        input {
          padding: 5px 10px;
        }
      }

      .text1 {
        input {
          padding: 5px 10px;
        }
      }
    }
    .liquidity-pool1 {
      .text {
        input {
          padding: 5px 10px;
        }
      }

      .text1 {
        input {
          padding: 5px 10px;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: flex-start;
    gap: 10px;

    .liquidity-pool {
      max-width: 290px;
      .convert {
        display: flex;
        align-items: center;
        margin-left: 30px;
      }
    }
  }
  @media screen and (max-width: 912px) {
    display: flex;
    align-items: flex-start;
    .liquidity-pool {
      .text {
        input {
          padding: 5px 10px;
        }
      }

      .text1 {
        input {
          padding: 5px 10px;
        }
      }
    }
    .liquidity-pool1 {
      .text {
        input {
          padding: 5px 10px;
        }
      }

      .text1 {
        input {
          padding: 5px 10px;
        }
      }
    }
  }
  @media screen and (max-width: 820px) {
    display: flex;
    align-items: flex-start;
    .liquidity-pool {
      min-width: 770px;

      .text {
        input {
          padding: 5px 10px;
        }
      }

      .text1 {
        input {
          padding: 5px 10px;
        }
      }

      .fox-stats {
        flex-wrap: nowrap;
        margin-left: 0px;
      }
    }
    .liquidity-pool1 {
      min-width: 770px;

      .text {
        input {
          padding: 5px 10px;
        }
      }

      .text1 {
        input {
          padding: 5px 10px;
        }
      }
      .fox-stats {
        flex-wrap: nowrap;
        margin-left: 0px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: flex-start;
    .liquidity-pool {
      min-width: 720px;

      .text {
        input {
          padding: 5px 10px;
        }
      }

      .text1 {
        input {
          padding: 5px 10px;
        }
      }

      .fox-stats {
        flex-wrap: nowrap;
        margin-left: 0px;
      }
    }
    .liquidity-pool1 {
      min-width: 720px;

      .text {
        input {
          padding: 5px 10px;
        }
      }

      .text1 {
        input {
          padding: 5px 10px;
        }
      }
      .fox-stats {
        flex-wrap: nowrap;
        margin-left: 0px;
      }
    }
  }
  @media screen and (max-width: 680px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 540px) {
    display: flex;
    align-items: flex-start;
    .liquidity-pool {
      min-width: 495px;

      .text {
        input {
          padding: 5px 12px;
        }
      }

      .text1 {
        input {
          padding: 5px 12px;
        }
      }

      .fox-stats {
        flex-wrap: wrap;
        margin-left: 0px;
        justify-content: flex-start;
        padding: 5px 18px;
      }
    }
    .liquidity-pool1 {
      padding: 10px 2px;

      min-width: 449px;
      flex-direction: column;

      .text {
        input {
          padding: 5px 12px;
        }
      }

      .text2 {
        input {
          padding: 5px 12px;
        }
      }
      .fox-stats {
        flex-wrap: wrap;
        margin-left: 10px;
        justify-content: flex-start;
      }
      #coin {
        padding-bottom: 0px;
        width: 30px;
        transform: translate(185px, -76px);
      }
    }
  }
  @media screen and (max-width: 414px) {
    .liquidity-pool {
      padding: 10px;
      min-width: 330px;
      min-height: 178px;
      gap: 10px;
      .fox-stats {
        justify-content: flex-start;
      }
      .text {
        max-width: 75px;
      }
      .text1 {
        margin-left: 25px;
        max-width: 75px;
      }
      .text input {
        padding: 5px 5px;
        max-width: 70px;
      }
    }
    .liquidity-pool1 {
      padding: 10px 2px;
      min-width: 330px;
      min-height: 178px;
      gap: 10px;
      flex-direction: column;
      .fox-stats {
        justify-content: flex-start;
      }
      .text {
        max-width: 75px;
      }
      .text2 {
        max-width: 75px;
        margin-left: 20px;
      }
      .text input {
        padding: 5px 5px;
        max-width: 70px;
      }
      #coin {
        padding-bottom: 0px;
        width: 30px;
        transform: translate(80px, -81px);
      }
    }
  }
  @media screen and (max-width: 375px) {
    .liquidity-pool {
      padding: 10px;
      min-width: 330px;
      min-height: 178px;
      gap: 10px;
      .fox-stats {
        justify-content: flex-start;
      }
      .text {
        max-width: 75px;
      }
      .text1 {
        margin-left: 25px;
        max-width: 75px;
      }
      .text input {
        padding: 5px 5px;
        max-width: 70px;
      }
    }
    .liquidity-pool1 {
      padding: 10px 2px;
      min-width: 330px;
      min-height: 178px;
      gap: 10px;
      flex-direction: column;
      .fox-stats {
        justify-content: flex-start;
      }
      .text {
        max-width: 75px;
      }
      .text2 {
        max-width: 75px;
        margin-left: 20px;
      }
      .text input {
        padding: 5px 5px;
        max-width: 70px;
      }
      #coin {
        padding-bottom: 0px;
        width: 30px;
        transform: translate(142px, -81px);
      }
    }
  }
`;
