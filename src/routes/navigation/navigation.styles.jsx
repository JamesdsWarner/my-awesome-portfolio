import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { css } from 'styled-components';
import './navigation.styles.css';


const NavMenu = css`
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        height: 90vh;
        width: 100%;
        position: absolute;
        top: 80px;
        left: -100%;
        transition: all 0.5s ease;
    }
`



const NavMenuActive = css`
    background: #242222;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;

    @media screen and (max-width: 960px) {
        background: #242222;
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 1;
    }
`






export const NavigationContainer = styled.div`
    background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;

`;





export const MenuIcon = styled.i`
.fa-bars {
    color: #fff;
}

@media screen and (max-width: 960px) {
    .fa-times {
        color: #fff;
        font-size: 2rem;
    }
}


`;



export const MenuIconContainer = styled.div`
    display: none;

    @media screen and (max-width: 960px) { 
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
} 
`;



export const NavLinks = styled.div`
${NavMenu}
${({isClicked}) => isClicked && (NavMenuActive)}



`;



export const NavItem = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    cursor: pointer;


@media screen and (max-width: 960px) {
    font-size: 50px;
    display: block;
    &:last-child{
    flex-grow: 1;
    }
}

`;



export const NavLink = styled(Link)`

    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;

    
    &:hover {
    background-color: #1888ff;
    border-radius: 4px;
    transition: all 0.2s ease-out;
 }

 @media screen and (max-width: 960px) {
    text-align: center;
    padding: 1rem;
    width: 100%;
    display: table;

    &:hover {
    background-color: #1888ff;
    border-radius: 0;
    }
 }
`;