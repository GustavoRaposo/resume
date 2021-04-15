import styled from 'styled-components'

export const Container = styled.div`
    background-color: #d8d8d8;
    border-radius: 20px;
    min-width: 45vw;
    height: 20px;
    
    @media (max-width: 768px){
        width: 100vw;
    }
`;

export const ProgressDone = styled.div`
    background: linear-gradient(to left, rgba(240, 100, 60), rgba(240, 160, 60));
    box-shadow: 0 3px 3px -5px rgb(230, 100, 0), 0 2px 5px rgb(230, 100, 0);
    border-radius: 20px;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 0;
    opacity: 0;
    transition: 1s ease 0.3s;
`;
