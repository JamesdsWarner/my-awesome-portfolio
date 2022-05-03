import styled from 'styled-components';
import seenitLogo from '../../assets/seenit-logo-brand-white-rgb.png';


export const SeenitLogoContainer = styled.div`
    object-fit: contain;
    width: 250px;
   
`

export const SeenitLogoImage = styled.img.attrs({
    src: `${seenitLogo}`})`
    max-width: 100%;
    max-height: 100%;
`