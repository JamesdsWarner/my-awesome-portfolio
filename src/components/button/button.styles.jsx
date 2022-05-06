import styled from "styled-components";

const mainColor = "#242222";
const contactColor = "#1888ff";

export const ButtonContainer = styled.div`
  /* margin: auto; */
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

export const BaseButton = styled.button`
  background-position: center;
  background-color: ${mainColor};
  padding: 8px 20px;
  border-radius: 4px;
  outline: none;
  border: none;
  font-size: 18px;
  color: #fff;
  cursor: pointer;

  &:hover {
    padding: 6px 18px;
    transition: all 0.2s ease-out;
    background-color: #fff;
    color: ${mainColor};
    border-radius: 4px;
    border: 2px solid ${mainColor};
  }
`;

export const ContactButton = styled(BaseButton)`
  background-color: ${contactColor};

  &:before {
    content: "";
    background-position: center;
    display: none;
    z-index: 9998;
    position: absolute;
    -ms-transform: translate(450%, -50%);
    transform: translate(450%, 0%);
    top: 60px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid rgba(255, 255, 255, 0.72);
  }

  /* &:after {
    content: "Copy email to Clipboard";
    display: none;
    position: absolute;
    z-index: 9999;
    top: 65px;
    -ms-transform: translate(450%, -50%);
    transform: translate(-5%, 0%);
    width: 114px;
    height: 36px;
    color: #000;
    font-size: 10px;
    line-height: 36px;
    text-align: center;

    background: rgba(255, 255, 255, 0.72);
    border-radius: 3px;
  }

  &:hover {
    color: ${contactColor};
    &:before,
    &:after {
      display: block;
    }
  }

  &:active,
  &:focus {
    outline: none;

    &:after {
      content: "Email Copied!";
    }
  } */
`;

export const LargeBaseButton = styled(BaseButton)`
  font-size: 24px;
`;

export const LargeContactButton = styled(BaseButton)`
  background-color: ${contactColor};
  font-size: 24px;
  &:hover {
    color: ${contactColor};
    border: 2px solid ${contactColor};
  }
`;
