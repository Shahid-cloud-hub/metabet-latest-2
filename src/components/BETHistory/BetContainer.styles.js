import styled from "styled-components";
export const ContainerBet = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 24px; */
  gap: 30px;
  /* margin-top: 20px; */
  /* background: #081824; */
  /* border-radius: 10px; */
  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */

  .betHistory-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
    border-radius: 8px;
    padding: 24px;
    margin-top: 20px;

    hr {
      position: absolute;
      max-width: 872px;
      right: 0%;
      top: 45%;
      border: none;
      width: 100%;
      height: 2px;
      background: #282c34;
      border-radius: 5px;
    }

    .bet-item-1 {
      display: flex;
      align-items: center;
      gap: 30px;
      width: 100%;

      .table-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;

        .bet-th {
          display: flex;
          gap: 77px;
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
  }
  .slick-prev {
    transform: translate(46px, 10.6rem);
    display: none !important;
  }

  .slick-next {
    transform: translate(-46px, 10.6rem);
    display: none !important;
  }
  @media screen and (max-width: 1280px) {
    .betHistory-container {
      hr {
        max-width: 825px;
      }
    }
  }

  @media screen and (max-width: 1080px) {
    width: 100%;
    max-width: 660px;
    margin-left: 10px;
    .betHistory-container {
      hr {
        max-width: 872px;
      }
    }
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
              font-size: 10px;
              width: 100%;
              max-width: 97px;
            }
          }
          .bet-td {
            span {
              max-width: 93px;
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
        max-width: 600px;
        right: 4%;
      }
    }
  }
  @media screen and (max-width: 1280px) {
    max-width: 910px;
    margin: 0 auto;

    .betHistory-container {
      .bet-item-1 {
        .table-wrapper {
          .bet-td {
            span {
              max-width: 110px;
            }
            #chain {
              max-width: 18px;
            }
          }
          .bet-th {
            gap: 50px;
          }
        }
      }

      hr {
        max-width: 560px;
        right: 4%;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 640px;

    .betHistory-container {
      .bet-item-1 {
        .table-wrapper {
          .bet-td {
            span {
              max-width: 82px;
            }
            #chain {
              max-width: 18px;
            }
          }
          .bet-th {
            gap: 5px;
          }
        }
      }

      hr {
        max-width: 560px;
        right: 4%;
      }
    }
  }

  @media screen and (max-width: 920px) {
    max-width: 545px;
    gap: 0px;
    .betHistory-container {
      hr {
        max-width: 470px;
      }
    }
  }

  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    gap: 20px;
    .betHistory-container {
      min-width: 300px;
      min-height: 243px;
      .bet-item-1 {
        gap: 50px;
        display: flex;
        flex-direction: column;

        img {
          max-width: 20px;
        }

        .table-wrapper {
          gap: 10px;
          .bet-th,
          .bet-td {
            span {
              font-size: 14px;
            }
          }
          .bet-th {
            border-bottom: 1px solid #282c34;
            span {
              margin-bottom: 10px;
            }
          }

          .bet-td {
            span {
              max-width: 98px;
            }
            #chain {
              max-width: 15px;
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
          .bet-th {
            border-bottom: 1px solid #282c34;
            span {
              margin-bottom: 10px;
            }
          }
        }
      }
      hr {
        max-width: 358px;
        right: 1%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    .betHistory-container {
      hr {
        max-width: 872px;
      }
    }
    .betHistory-container {
      .bet-item-1 {
        gap: 50px;
        img {
          max-width: 25px;
        }

        .table-wrapper {
          .bet-th,
          .bet-td {
            gap: 0px;
            span {
              font-size: 10px;
              width: 100%;
              max-width: 97px;
            }
          }
          .bet-td {
            span {
              max-width: 93px;
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
        max-width: 600px;
        right: 4%;
      }
    }
  }

  @media screen and (max-width: 620px) {
    margin: 0 auto;

    .betHistory-container {
      hr {
        max-width: 432px;
      }
    }
  }

  @media screen and (max-width: 520px) {
    padding: 0px;
    margin: 0 auto;

    .betHistory-container {
      .bet-item-1 {
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
          .bet-td {
            span {
              max-width: 99px;
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
    padding: 0px;
    margin: 0 auto;
    .betHistory-container {
      .bet-item-1 {
        img {
          max-width: 25px;
        }

        .table-wrapper {
          .bet-th,
          .bet-td {
            gap: 0px;
            span {
              font-size: 14px;
            }
          }
          .bet-td {
            span {
              max-width: 99px;
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
              font-size: 14px;
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
    max-width: 335px;
    margin: 0 auto;
    gap: 20px;

    .betHistory-container {
      .bet-item-1 {
        img {
          max-width: 20px;
        }

        .table-wrapper {
          .bet-th,
          .bet-td {
            gap: 0px;
            span {
              font-size: 12px;
            }
          }
          .bet-td {
            span {
              max-width: 99px;
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
              font-size: 12px;
            }
          }
        }
      }
      hr {
        max-width: 300px;
        right: 2%;
      }
    }
  }
`;
