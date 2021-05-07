import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5vw;

    h1{
        color: rgba(240, 100, 60);
        font-size: 2rem;
        padding: 20px;
    }

    @media (max-width: 768px){
        align-items: center;
        height: 100%;
    }
`;

export const SkillItems = styled.div`
    h1{
        font-size: 1rem;
        padding: 0;
    }
`;