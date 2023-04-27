import React from "react";
import styled from "styled-components";

const HorizontalFilter = () => {
  return (
    <HorFilterContainer>
      <div className="filter-container">
        <button className="filter-button">Ending soon</button>
        <button className="filter-button">Number Bets</button>
        <button className="filter-button">Ended</button>
        <button className="filter-button">Live</button>
        <button className="filter-button">Size</button>
      </div>
    </HorFilterContainer>
  );
};

const HorFilterContainer = styled("div")`
  .filter-container {
    display: flex;
    gap: 15px;
    padding-right: 40px;

    .filter-button {
      background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
      border-radius: 8px;
      border: 1px solid #997860 !important;
      margin: 0px;
      padding: 10px 0px;
      cursor: pointer;
      border: none;
      color: #ffffff;
      font-size: 14px;
      width: 100px;
    }
  }

  @media screen and (max-width: 1024px) {
    .filter-container {
      .filter-button {
        width: 85px;
      }
    }
  }
`;

export default HorizontalFilter;
