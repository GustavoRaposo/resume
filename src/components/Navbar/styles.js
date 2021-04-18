import styled from 'styled-components'

export const Container = styled.nav`
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    background: rgb(36, 36, 36);
    scroll-behavior: smooth;
    padding: 20px;
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

    a:hover{
        opacity: 1;
        border-bottom: 1px solid #dbdbdb;
    }

    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background: rgb(36, 36, 36);
        position: fixed;
        top: 8vh;
        right: 0;
        width: 50vw;
        height: 92vh;
        padding-top: 8vh;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s ease-in-out;
    }
`;

export const Burger = styled.div`
    display: none;
    cursor: pointer;
    color: #dbdbdb;

    @media (max-width: 768px){
        display: block;
    }
`;