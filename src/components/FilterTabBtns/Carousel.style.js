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
  /* .betactive {
    border: 1px solid;
    border-image: linear-gradient(45deg, #997860, #ffa133) 1;
    position: relative;
    border-image: linear-gradient(90deg, #997860 -8.82%, #ffa133 111.76%);
  }
  .betactive-pseudo {
    position: relative;
    padding: 10px 20px;
    background: #fff;
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
    background-image: linear-gradient(45deg, #997860, #ffa133);

    border: 1px solid transparent;
    background: linear-gradient(45deg, #997860, #ffa133) 1;
      -webkit-mask:
    linear-gradient(#fff 0 0) padding-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  }
  .betactive-pseudo-mask {
    position: relative;
    padding: 15px 20px;
  }

  .slick-prev {
    transform: translate(46px, 10.6rem);
    display: none !important;
  }

  .slick-next {
    transform: translate(-46px, 10.6rem);
    display: none !important;
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
    background: linear-gradient(45deg, #997860, #ffa133) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
  .gradient-text {
    background: linear-gradient(to right, #997860, #ffa133);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  } */
`;
