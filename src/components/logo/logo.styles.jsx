import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as MyLogo } from '../../assets/my-logo.svg';

export const StyledLogo = styled(MyLogo)`
    fill: white;
`

export const LogoContainer = styled(Link)`
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    width: 140px;
    margin-top: 14px;

    /* @media screen and (max-width: 960px) {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(25%, 50%);
    } */
`;