import React from 'react';
import { Container, Content } from './styles';
import Typical from 'react-typical'

function Hero(props) {
    return (
        <Container>
            <Content>
                <h1>{props.title}</h1>
                <Typical
                    loop={Infinity}
                    wrapper="span"
                    steps={[
                        '<Estudante/>', 1000,
                        '<DesenvolvedorFron-end/>', 1000,
                        '<DesenvolvedorBack-end/>', 1000,
                        '<DesenvolvedorMobile/>', 1000
                    ]}
                />
            </Content>
        </Container>
    );
}

export default Hero;