import styled from "styled-components";

const mainColor = "#86bbd8";
const contactColor = "#86bbd8";

export const ButtonContainer = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BaseButton = styled.button`
  background-position: center;
  background-color: ${mainColor};
  padding: 12px 22px;
  border-radius: 50px;
  outline: none;
  border: none;
  font-size: 14px;
  color: white;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease-out;
  border: 2px solid ${contactColor};
  font-weight: 700;

  &:hover {
    transition: all 0.2s ease-out;
    background-color: #fff;
    color: ${mainColor};
  }
`;

export const ContactButton = styled(BaseButton)`
  background-color: ${contactColor};
  color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
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
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  background-color: #33658a;
  border: 2px solid #33658a;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 1.95px 1.95px 10.6px;
    color: #33658a;
  }
`;

export const LargeContactButton = styled(BaseButton)`
  background-color: ${contactColor};
  font-size: 18px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  color: #fff;

  &:hover {
    color: ${contactColor};
    border: 2px solid ${contactColor};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;
