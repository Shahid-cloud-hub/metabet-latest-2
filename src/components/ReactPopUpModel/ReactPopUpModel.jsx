import React from "react";
import styled from "styled-components";
import CloseImg from "../../assets/images/Ai-NFT/close-icon.svg";

const ReactPopUpModel = ({ src, closeModal }) => {
  return (
    <ModalContainer>
      <ImageContainer>
        <img src={src} alt="modal" />
        <CloseButton onClick={closeModal}>
          <img src={CloseImg} alt="close" />
        </CloseButton>
      </ImageContainer>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  width: 100%;
  height: 500%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  transform: translate(-50%, -50%);
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  transform: translate(28%, 20px);

  img {
    width: 80%;
    /* height: 50%; */
    /* object-fit: cover; */
  }

  @media screen and (max-width: 980px) {
    transform: translate(38%, 90px);
  }

  @media screen and (max-width: 880px) {
    transform: translate(0%, 90px);
  }

  @media screen and (max-width: 420px) {
    transform: translate(-2%, 90px);
    width: 380px;
    height: 380px;

    img {
      width: 60%;
      /* height: 50%; */
      /* object-fit: cover; */
    }
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: 5px;
  right: -9px;
  margin: 10px;
  font-size: 24px;
  font-weight: bold;
  color: black;
  cursor: pointer;

  img {
    width: 80%;
    height: 80%;
  }

  @media screen and (max-width: 420px) {
    right: 27px;
    top: 46px;
  }
`;

export default ReactPopUpModel;
