import styled from "styled-components";

const StyledBoxNav = styled.div`
    width: 24px;
    height:17px;
    @media (min-width: 768px) {
        width: 100%;
        height: 25px;
        padding-left:51px ;
        padding-right: 52px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    @media (min-width: 768px) {
        width: 665px;
    }
    @media screen and (width>= 1440px) {
       padding: 0;
    }
`;
const StyledHamburguer = styled.img`
    @media screen and (width>=768px) {
        display: none;
    }
`;
const StyledButtonsNav = styled.div`
    width:100vw;
    height: calc(100vh - 68px);
    background-color: ${({$bgcolor})=>$bgcolor};
    position: absolute;
    left: 0;
    bottom: 0;
    display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
    flex-direction: column;
    padding: 24px;

    @media (min-width: 768px) {
        position: static;
        height:25px;
        display: flex; 
        flex-direction: row;
        background-color: transparent;
        padding: 0;
    }
`;


export {StyledBoxNav,StyledHamburguer,StyledButtonsNav}