import styled from "styled-components";

export const CarouselContainer = styled("div")`
  position: relative;
  .btn-container {
    display: flex;
    /* transform: translate(0px, -39px); */
    gap: 72px;
    /* position: absolute; */
    width: 100%;
    justify-content: space-between;
    min-width: 985px;

    div {
      border: none;
      background: transparent;
      box-shadow: none;
      color: #f4cd68;
      font-size: 12px;
      transform: translate(0px, -45px);

      img {
        width: initial;
      }
    }
  }
  .data {
    position: relative;
    &:after {
      content: ${(props) => props.data};
      width: 100px;
      height: 100px;
      background: red;
      position: absolute;
    }
  }
`;
