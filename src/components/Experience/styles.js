import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5vw;

    li{
        display: block;
        list-style: none;
        text-align: start;
        border: 2px solid rgba(240, 100, 60);
        border-radius: 20px;
        padding: 5px;
        margin: 5px;
    }
    h1{
        color: rgba(240, 100, 60);
        font-size: 2rem;
    }
    h2{
        color: rgba(240, 100, 60);
        font-size: 1.5rem;
    }
    small{
        font-size: 0.75rem;
    }

    p{
        text-align: justify;
    }
    @media (max-width: 768px){
        display: block;
        text-align: center;        

        ul{
            padding-top: 5vh;
            padding-bottom: 5vh;
        }

    }

    @media (max-width: 320px){
        h2{
            font-size: 1.25rem;
        }
    }
`;