import React from 'react';
import { Container, Logo, Burger, NavLinks } from './styles';

function Navbar() {

    const scrollHome = () =>{
        window.scrollTo({top: 0, behavior:'smooth'})
    }

    return (
        <Container>
            <Logo onClick = {scrollHome}>
                <h2>&lt;GustavoRaposo/&gt;</h2>
            </Logo>
            <NavLinks>
                <li><a href="#about">sobre</a></li>
                <li><a href="#skills">conhecimentos</a></li>
                <li><a href="#experience">experiência</a></li>
                <li><a href="#contact">contatos</a></li>
            </NavLinks>
            <Burger>
                <div></div>
                <div></div>
                <div></div>
            </Burger>
        </Container>
    );
}

export default Navbar;