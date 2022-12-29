import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as MyLogo } from "../../assets/my-logo.svg";

export const StyledLogo = styled(MyLogo)`
  fill: black;
`;

export const LogoContainer = styled(Link)`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  width: 140px;
  margin-top: 14px;
`;
