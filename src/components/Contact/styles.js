import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(36, 36, 36);
    box-shadow: 0px -1px 10vh rgba(0, 0, 0, 0.7);
    padding: 5vw;

    a{
        display: flex;
        align-items: center;
        text-decoration: none;
        opacity: 0.7;
    }

    a:hover{
        opacity: 1;
        border-bottom: 1px solid #dbdbdb;
    }

    span{
        color: #dbdbdb;
    }

    @media (max-width: 768px){
        height: 50vh;
        display: flex;
        flex-direction: column;
    }
`;