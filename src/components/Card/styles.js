import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px solid rgba(240, 100, 60);
    border-radius: 20px;
    margin: 5px;
    padding: 5px;
    
    h1{
        color:rgba(240, 100, 60);
    }

    :hover{
        transform: scale(1.05);
    }
`;