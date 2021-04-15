import styled from 'styled-components'

export const Container = styled.nav`
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 8vh;
    background: rgb(36, 36, 36);
    scroll-behavior: smooth;
`;

export const Logo = styled.div`
    cursor: pointer;
    h2{
        font-size: 1.25rem;
        font-weight: bold;
        border: 3px solid rgb(240, 100, 60);
        padding: 3px;
        color: rgba(240, 100, 60);
    }
`;

export const NavLinks = styled.ul`
    display: flex;
    list-style: none;
    flex-direction: row;

    a{
        text-transform: uppercase;
        padding: 5px;
        text-decoration: inherit;
        font-size: 12px;
        color: #dbdbdb;
        opacity: 0.7;
    }

    span{
        text-transform: uppercase;
        padding: 5px;
        font-size: 12px;
        color: #dbdbdb;
        opacity: 0.7;
    }

    span:hover{
        opacity: 1;
        border-bottom: 1px solid #dbdbdb;
    }

    a:hover{
        opacity: 1;
        border-bottom: 1px solid #dbdbdb;
    }

    @media (max-width: 768px){
        display: none;
    }
`;

export const Burger = styled.div`
    display: none;
    opacity: 0.7;
    cursor: pointer;

    :hover{
        opacity: 1;
        border: 2px solid #dbdbdb;
        border-radius: 50%;
    }

    div{
        width: 25px;
        height: 2px;
        background-color: #dbdbdb;
        margin: 5px;
    };

    @media (max-width: 768px){
        display: block;
    }
`;