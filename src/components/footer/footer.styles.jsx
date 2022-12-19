import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #fbfbff;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: white;
  flex-wrap: nowrap;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  z-index: 999;
  bottom: 0;
  position: relative;
`;

export const ContactWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  column-gap: 20px;
`;
