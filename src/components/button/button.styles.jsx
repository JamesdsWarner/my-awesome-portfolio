import styled from "styled-components";

const mainColor = "#19191A";
const contactColor = "#3B8BEB";

export const ButtonContainer = styled.div`
  /* margin: auto; */
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

export const BaseButton = styled.button`
  background-position: center;
  background-color: ${mainColor};
  padding: 12px 22px;
  border-radius: 50px;
  outline: none;
  border: none;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease-out;
  border: 2px solid ${contactColor};

  &:hover {
    transition: all 0.2s ease-out;
    background-color: #fff;
    color: ${mainColor};
  }
`;

export const ContactButton = styled(BaseButton)`
  background-color: ${contactColor};
  color: #fff;

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
`;

export const LargeBaseButton = styled(BaseButton)`
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.2) -1.95px -1.95px 4.6px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 1.95px 1.95px 10.6px;
  }
`;

export const LargeContactButton = styled(BaseButton)`
  background-color: ${contactColor};
  font-size: 18px;
  box-shadow: rgba(0, 0, 0, 0.25) 1.95px 1.95px 4.6px;
  color: #fff;

  &:hover {
    color: ${contactColor};
    border: 2px solid ${contactColor};
    box-shadow: rgba(0, 0, 0, 0.25) 1.95px 1.95px 10.6px;
  }
`;
