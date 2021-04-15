import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5vw;

    img{
        max-width: 40vw;
        height: auto;
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

    h1{
        color: rgba(240, 100, 60);
        font-size: 2rem;
    }
    

    span{
        text-align: justify;
        text-justify: inherit;
    }

    p{
        text-indent: 3em;
        max-width: 50vw;
        text-align: justify;
        text-justify: inherit;
    }

    @media (max-width: 768px){
        p{
            max-width: 100vw;
        }
    }
`;