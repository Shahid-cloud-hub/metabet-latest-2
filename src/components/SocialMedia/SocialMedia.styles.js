import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: cenetr;
  justify-content: center;
  gap: 30px;
  margin: 20px 0px;
`;
export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  width: 100%;
  max-width: 945px;
  min-height: 225px;
  background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
  border: 1px solid #5f9ea0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  gap: 30px;
  margin: 0 auto;

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
      width: 80px;
      background: #020f18;
      border-radius: 4px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: absolute;
      transform: translate(-8px, 31px);
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
`;

export const Balance = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .total{
    display:flex;
    gap: 15px;
    .Banner{
      disply:flex;
      flex-direction: column;
      max-width: 473px;
background: linear-gradient(180deg, #1F313D 24.68%, #1C1C1C 63.46%);
border: 1px solid #4682B4;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 12px;
.headline{
  span{
    font-family: 'Mostra Nuova';
    font-size: 26px;
    color: #1E90FF;
  }
  hr{
    width:433px;
    background: #1E90FF;
    height:2px;
    border:none;

  }
}
.center{
  display:flex;
  justify-content: space-between;
  .paragraph{
    display:flex;
    flex-direction: column;
    gap:10px;
  }
  .event{
     display:flex;
    flex-direction: column;
  }
}
    }
    .amountText{
      width: 473px;
      background: linear-gradient(180deg, #1F313D 24.68%, #1C1C1C 63.46%);
      border: 1px solid #4682B4;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
      text-align: center;
      padding: 11px 0px;

      span{
        color: #FFFFFF;
        font-size: 16px;
        font-family: 'Mostra Nuova';
      }
      input {
        background-color: transparent;
        width: 100%;
        max-width: 80px;
        padding: 5px 5px;
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
        color: #87CEFA;
        
      }
    }
  }

  .fox-stats {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    }
    @media screen and (max-width: 1280px) {
      gap: 10px;
    }
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
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 5px;
    max-width: 120px;
    font-family: "mostra-nuova", sans-serif;
    min-height: 72px;
    background: linear-gradient(180deg, #1c1c1c 39.58%, #28516b 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #1e90ff;
    border-radius: 8px;

    #title {
      font-family: "mostra-nuova", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      color: #5f9ea0;
    }
    input {
      background-color: transparent;
      width: 100%;
      max-width: 80px;
      padding: 5px 5px;
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
  align-items: center;  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  max-width: 450px;
  background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
  border: 1px solid #5f9ea0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  gap: 20px;


  .amount {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:10px;
    .amountText {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width:100%;
      max-width: 230px;
      padding: 9px;
      background: linear-gradient(180deg, #1c1c1c 39.58%, #28516b 100%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #1e90ff;
      border-radius: 8px;
  span{
    color: #FFFFFF;

  }
      #title {
        font-family: "mostra-nuova", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: #5f9ea0;
      }
      input {
        background-color: transparent;
        width: 100%;
        max-width: 80px;
        padding: 5px 5px;
        text-align: end;
        border: none;
        font-family: "mostra-nuova", sans-serif;
        font-weight: 800;
        color: #FFFFFF;

      }
      input::placeholder {
        font-family: "mostra-nuova", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 143.7%;
        color: #FFFFFF;
        text-shadow: 0px 0px 30px #000000;
      }
    }
    button{
              background: linear-gradient(180deg, #FAB263 0%, #5F3A12 80.03%);
      border-radius: 8px;
      width: 251px;
      height: 33px;
            }
    }         
  span{
    color: #1E90FF;
    font-family: 'Mostra Nuova';
    font-size: 21px;
  }
  hr{
    width:433px;
    background: #1E90FF;
    height:2px;
    border:none;

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
      gap:210px;
    }
    .balance {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 0px 35px;

      .icon {
        flex-direction: column;
        display: flex;
        img{
          width:60px;
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
    // span {
    //   font-family: "mostra-nuova", sans-serif;
    //   font-style: normal;
    //   font-weight: 700;
    //   font-size: 22px;
    //   line-height: 95%;
    //   color: #ffffff;
    // }

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
      max-width: 410px;
      min-height: 225px;
      gap: 30px;
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
      padding: 10px;
      max-width: 328px;
      min-height: 225px;
      gap: 30px;

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
          width: 290px;
          margin-top: 10px;
        }
      }
      .convert {
        display: flex;
        align-items: center;
        margin-left: 40px;
      }
      .balance {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 0px 35px;

        .icon {
          img {
            max-width: 40px;
          }
          span {
            font-size: 16px;
          }
        }
      }

      .truai {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .dropdown {
          padding-right: 0px;

          input::placeholder {
            font-size: 15px;
            line-height: 95%;
          }
        }

        .select {
          width: 80px;

          gap: 10px;
          transform: translate(-8px, 31px);
          div {
            font-size: 14px;

            gap: 13px;
          }
        }
      }

      label {
        font-size: 14px;
        gap: 5px;

        input {
          padding-left: 10px;
          max-width: 69px;
        }
        input::placeholder {
          font-size: 14px;
          color: #ffffff;
        }
      }
      #icon {
        margin-right: 10px;
      }
      span {
        font-size: 14px;
      }

      #grey {
        font-size: 14px;
      }
      #blue {
        font-size: 10px;
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
    flex-direction: column;
    gap: 20px;

    .liquidity-pool {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      width: 100%;
      max-width: 473px;
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
          width: 433px;
          background: #1e90ff;
          box-shadow: 0px 0px 0px #ffffff;
          border: none;
          margin-top: 10px;
        }
      }
      .convert {
        display: flex;
        align-items: center;
        display: flex;
        align-items: center;
        gap:210px;
      }
      .balance {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 0px 35px;

        .icon {
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
  }
  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .liquidity-pool {
      padding: 10px;
      max-width: 328px;
      min-height: 225px;
      gap: 30px;

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
          width: 290px;
          margin-top: 10px;
        }
      }
      .convert {
        display: flex;
        align-items: center;
        margin-left: 40px;
      }
      .balance {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 0px 35px;

        .icon {
          img {
            max-width: 40px;
          }
          span {
            font-size: 16px;
          }
        }
      }

      .truai {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .dropdown {
          padding-right: 0px;

          input::placeholder {
            font-size: 15px;
            line-height: 95%;
          }
        }

        .select {
          width: 80px;

          gap: 10px;
          transform: translate(-8px, 31px);
          div {
            font-size: 14px;

            gap: 13px;
          }
        }
      }

      label {
        font-size: 14px;
        gap: 5px;

        input {
          padding-left: 10px;
          max-width: 69px;
        }
        input::placeholder {
          font-size: 14px;
          color: #ffffff;
        }
      }
      #icon {
        margin-right: 10px;
      }
      span {
        font-size: 14px;
      }

      #grey {
        font-size: 14px;
      }
      #blue {
        font-size: 10px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-width: 680px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Balance1 = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .total{
    display:flex;
    gap: 15px;
    .videoContainer{
      background: #435B6A;
border-radius: 12px;
      width: 473px;
height: 240px;
display:flex;
align-items:center;
justify-content: center;
    }
    .Banner{
      display:flex;
      align-items: center;
      flex-direction: column;
      max-width: 435px;
      background: linear-gradient(180deg, #1F313D 24.68%, #1C1C1C 63.46%);
border: 1px solid #4682B4;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 12px;
padding: 20px 18px;
gap: 18px;


.headline{
  text-align: center;

  span{
    font-family: 'Mostra Nuova';
    font-size: 26px;
    color: #1E90FF;
  }
  hr{
    width:433px;
    background: #1E90FF;
    height:2px;
    border:none;

  }
}
.center{
  display:flex;
  gap: 15px;
  .paragraph{
    display:flex;
    flex-direction: column;
    gap:10px;
    font-size: 13px;
color: #B6B6B6;
  }
  .event{
     display:flex;
    flex-direction: column;
    #yellow{
      color: #FFD646;
      font-size: 13px;

    }
  }
}
    }
    .amountText{
      width: 473px;
      background: linear-gradient(180deg, #1F313D 24.68%, #1C1C1C 63.46%);
      border: 1px solid #4682B4;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
      text-align: center;
      padding: 11px 0px;

      span{
        color: #FFFFFF;
        font-size: 16px;
        font-family: 'Mostra Nuova';
      }
      input {
        background-color: transparent;
        width: 100%;
        max-width: 80px;
        padding: 5px 5px;
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
        color: #87CEFA;
        
      }
    }
  }

  .fox-stats {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    }
    @media screen and (max-width: 1280px) {
      gap: 10px;
    }
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
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 5px;
    max-width: 120px;
    font-family: "mostra-nuova", sans-serif;
    min-height: 72px;
    background: linear-gradient(180deg, #1c1c1c 39.58%, #28516b 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #1e90ff;
    border-radius: 8px;

    #title {
      font-family: "mostra-nuova", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      color: #5f9ea0;
    }
    input {
      background-color: transparent;
      width: 100%;
      max-width: 80px;
      padding: 5px 5px;
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
  align-items: center;  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  max-width: 450px;
  background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
  border: 1px solid #5f9ea0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  gap: 20px;


  .amount{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:10px;
    .amountText {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width:100%;
      max-width: 230px;
      padding: 9px;
      background: linear-gradient(180deg, #1c1c1c 39.58%, #28516b 100%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #1e90ff;
      border-radius: 8px;
  span{
    color: #FFFFFF;

  }
      #title {
        font-family: "mostra-nuova", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: #5f9ea0;
      }
      input {
        background-color: transparent;
        width: 100%;
        max-width: 80px;
        padding: 5px 5px;
        text-align: end;
        border: none;
        font-family: "mostra-nuova", sans-serif;
        font-weight: 800;
        color: #FFFFFF;

      }
      input::placeholder {
        font-family: "mostra-nuova", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 143.7%;
        color: #FFFFFF;
        text-shadow: 0px 0px 30px #000000;
      }
    }
    button{
              background: linear-gradient(180deg, #FAB263 0%, #5F3A12 80.03%);
      border-radius: 8px;
      width: 251px;
      height: 33px;
            }
    }         
  span{
    color: #1E90FF;
    font-family: 'Mostra Nuova';
    font-size: 21px;
  }
  hr{
    width:433px;
    background: #1E90FF;
    height:2px;
    border:none;

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
      gap:210px;
    }
    .balance {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 0px 35px;

      .icon {
        flex-direction: column;
        display: flex;
        img{
          width:60px;
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
    // span {
    //   font-family: "mostra-nuova", sans-serif;
    //   font-style: normal;
    //   font-weight: 700;
    //   font-size: 22px;
    //   line-height: 95%;
    //   color: #ffffff;
    // }

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
      max-width: 410px;
      min-height: 225px;
      gap: 30px;
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
      padding: 10px;
      max-width: 328px;
      min-height: 225px;
      gap: 30px;

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
          width: 290px;
          margin-top: 10px;
        }
      }
      .convert {
        display: flex;
        align-items: center;
        margin-left: 40px;
      }
      .balance {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 0px 35px;

        .icon {
          img {
            max-width: 40px;
          }
          span {
            font-size: 16px;
          }
        }
      }

      .truai {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .dropdown {
          padding-right: 0px;

          input::placeholder {
            font-size: 15px;
            line-height: 95%;
          }
        }

        .select {
          width: 80px;

          gap: 10px;
          transform: translate(-8px, 31px);
          div {
            font-size: 14px;

            gap: 13px;
          }
        }
      }

      label {
        font-size: 14px;
        gap: 5px;

        input {
          padding-left: 10px;
          max-width: 69px;
        }
        input::placeholder {
          font-size: 14px;
          color: #ffffff;
        }
      }
      #icon {
        margin-right: 10px;
      }
      span {
        font-size: 14px;
      }

      #grey {
        font-size: 14px;
      }
      #blue {
        font-size: 10px;
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
    flex-direction: column;
    gap: 20px;

    .liquidity-pool {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      width: 100%;
      max-width: 473px;
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
          width: 433px;
          background: #1e90ff;
          box-shadow: 0px 0px 0px #ffffff;
          border: none;
          margin-top: 10px;
        }
      }
      .convert {
        display: flex;
        align-items: center;
        display: flex;
        align-items: center;
        gap:210px;
      }
      .balance {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 0px 35px;

        .icon {
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
  }
  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .liquidity-pool {
      padding: 10px;
      max-width: 328px;
      min-height: 225px;
      gap: 30px;

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
          width: 290px;
          margin-top: 10px;
        }
      }
      .convert {
        display: flex;
        align-items: center;
        margin-left: 40px;
      }
      .balance {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 0px 35px;

        .icon {
          img {
            max-width: 40px;
          }
          span {
            font-size: 16px;
          }
        }
      }

      .truai {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .dropdown {
          padding-right: 0px;

          input::placeholder {
            font-size: 15px;
            line-height: 95%;
          }
        }

        .select {
          width: 80px;

          gap: 10px;
          transform: translate(-8px, 31px);
          div {
            font-size: 14px;

            gap: 13px;
          }
        }
      }

      label {
        font-size: 14px;
        gap: 5px;

        input {
          padding-left: 10px;
          max-width: 69px;
        }
        input::placeholder {
          font-size: 14px;
          color: #ffffff;
        }
      }
      #icon {
        margin-right: 10px;
      }
      span {
        font-size: 14px;
      }

      #grey {
        font-size: 14px;
      }
      #blue {
        font-size: 10px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-width: 680px) {
    display: flex;
    flex-direction: column;
  }
`;
