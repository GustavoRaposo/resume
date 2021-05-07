import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: auto;
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
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    .profile_image{
        width: 25vw;
        height: auto;
        border-radius: 50%;
        border: 3px solid rgb(240, 100, 60);
        padding: 3px;
    }

    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
        .profile_image{
            width: 50vw;
        }
    }
`;

export const Text = styled.ul`
    border: 2px solid rgba(240, 100, 60);
    border-radius: 20px;

    h2{
        font-size: 1.5rem;
    }
    small{
        font-size: 0.75rem;
    }

    li{
        display: flex;
        align-items: center;
        margin: 5px;
    }
`;