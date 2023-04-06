import styled from "styled-components";

export const CurrencyConvertorContainer = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  background: #0f212e;
  margin: 10px 0px;
  padding: 10px 0px;
  justify-content: center;
  gap: 16px;
  transform: translate(12px, 0px);

  .background {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 985px;
  }

  .tabs {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 10px;
    background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
    border: 1px solid #4682b4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    gap: 28px;
    width: 100%;

    button {
      background: #6495ed;
      border-radius: 12px;
      padding: 10px 40px;
      font-size: 18px;
      font-weight: 800;
      color: #fff;
      border: none;
      font-family: "mostra-nuova", sans-serif;
    }

    .heading1 {
      padding-top: 10px;
      text-align: center;
      width: 100%;

      span {
        font-family: "mostra-nuova", sans-serif;
        font-weight: 800;
        font-size: 21px;
        color: #1e90ff;
        padding-left: 5px;
      }
      hr {
        height: 2px;
        max-width: 930px;
        background: #1e90ff;
        box-shadow: 0px 0px 0px #ffffff;
        border: none;
        margin-top: 10px;
        flex: none;
        order: 1;
        flex-grow: 0;
        width: 100%;
      }
    }

    .convert {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 120px;

      #icon {
        cursor: pointer;
      }
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
          font-family: "mostra-nuova", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
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

      select {
        background: transparent;
        border: none;
        appearance: none;
        color: #fff;
        font-weight: 600;
      }

      input {
        background: transparent;
        box-shadow: none;
        color: #fff;
        font-family: "mostra-nuova", sans-serif;
        font-weight: 700;
        padding: 8px 0px;
        max-width: 100px;
        font-size: 22px;
        border: none;

        &::placeholder {
          font-family: "mostra-nuova", sans-serif;
          font-weight: 700;
          font-size: 22px;
          color: #fff;
        }
      }

      /* Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      .dropdown {
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: relative;
      }
      .text {
        display: flex;
        align-items: center;
        gap: 15px;
      }
    }

    label {
      font-size: 15px;
      color: #637592;
      display: flex;
      align-items: center;
      gap: 5px;
      font-weight: 600;
      font-family: "mostra-nuova", sans-serif;

      span {
        font-size: 16px;
      }
    }
    /* #icon {
      margin-right: 40px;
    } */
    span {
      font-family: "mostra-nuova", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      color: #ffffff;
    }

    #grey {
      font-weight: 700;
      font-size: 15px;
      color: #637592;
    }
    #blue {
      font-weight: 700;
      font-size: 12px;
      color: #3d6eff;
    }

    @media screen and (max-width: 420px) {
      padding: 10px;
    }

    .tabs-btn {
      display: flex;
      gap: 25px;
      border-bottom: 1px solid #282c34;
      padding: 10px;

      button {
        border: none;
        background-color: transparent;
        font-weight: 700;
        font-size: 12px;
        padding: 0 30px;

        img {
          width: 100%;
          max-width: 120px;
        }
      }
    }
  }

  @media screen and (max-width: 820px) {
    .background {
      max-width: 790px;
      margin: 0 auto;
    }

    .tabs-btn {
      justify-content: center;
    }
  }

  @media screen and (max-width: 786px) {
    .background {
      max-width: 659px;
      margin: 0 auto;
    }

    .tabs > .convert {
      gap: 60px;
    }

    .tabs-btn {
      justify-content: center;
    }
  }

  @media screen and (max-width: 620px) {
    .background {
      padding: 0px 10px;
      max-width: 550px;
      margin: 0 auto;
    }

    .tabs-btn {
      justify-content: center;
    }
  }

  @media screen and (max-width: 420px) {
    .activated-2::after {
      width: 150px;
    }

    .tabs > .convert {
      gap: 20px;

      .truai {
        label {
          font-size: 12px;
        }

        input::placeholder {
          font-size: 16px;
        }
      }
    }
  }

  @media screen and (max-width: 390px) {
    .tabs > .convert {
      gap: 20px;

      .truai {
        .text {
          gap: 10px;
        }
        label {
          font-size: 12px;
        }

        input::placeholder {
          font-size: 16px;
        }
      }

      #grey {
        font-size: 12px;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .tabs > .convert {
      gap: 15px;

      .truai {
        .text {
          gap: 10px;
        }
        label {
          font-size: 12px;
        }

        input::placeholder {
          font-size: 16px;
        }
      }

      #grey {
        font-size: 12px;
      }
    }
  }
`;
