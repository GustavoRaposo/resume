import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5vw;

    img{
        width: 400px;
        height: 400px;
        border-radius: 50%;
        border: 3px solid rgb(240, 100, 60);
        padding: 3px;
    }

    @media (max-width: 768px){
        display: block;
        text-align: center;
        height: auto;

        img{
            width: 50vw;
            height: auto;
            border-radius: 50%;
            border: 3px solid rgb(240, 100, 60);
            padding: 3px;
        }
    }
`;

export const Text = styled.div`
    display: block;
    text-align: justify;
    padding: 20px;

    h1{
        color: rgba(240, 100, 60);
        font-size: 2rem;
    }

    p{
        text-indent: 3em;
        text-align: justify;
        text-justify: inherit;
    }

    @media (max-width: 768px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        p{
            max-width: 100%;
            padding-top: 5vh;
            padding-bottom: 5vh;
        }
    }
`;