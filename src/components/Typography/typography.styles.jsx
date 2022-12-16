import styled, { css } from "styled-components";

export const TypographyContainer = styled.div``;

export const Base = styled.p`
  font-size: 20px;
  @media screen and (min-width: 961px) {
    position: absolute;
    width: 32%;
    margin-top: 290px;
    left: 11.45vw;
  }
`;

export const Fancy = styled.h3`
  position: relative;
  text-align: center;
  font-family: "Courgette", cursive;
  font-size: ${(props) => (props.size === "large" ? 3.5 : props.size === "regular" ? 3 : 3)}rem;
  color: #264653;
  text-shadow: 5px 5px #d3d3d3;
  z-index: 9999;
`;

export const Heading = styled.h2``;

export const SecondHeading = styled.h3`
  color: #457b9d;
  font-size: 30px;
`;
