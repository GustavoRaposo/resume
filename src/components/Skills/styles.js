import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5vw;
    

    @media (max-width: 768px){
        display: block;
        align-items: center;
        justify-content: center;
        height: auto;
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
        max-width: 50vw;
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

export const SkillItems = styled.div`
    padding: 20px;
    @media (max-width: 768px){
        width: 100%;
    }
`;

export const Skill = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;