import React, { useState } from 'react';
import Icon from '@mdi/react'
import { mdiMenu, mdiClose } from '@mdi/js'
import { Container, Logo, Burger, NavLinks } from './styles';

function Navbar() {

    const [open, setOpen] = useState(false);


    const scrollHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    function updateMenuState() {
        setOpen(!open)
        console.log(open)
    }

    return (
        <Container>
            <Logo onClick={scrollHome}>
                <h2>&lt;GustavoRaposo/&gt;</h2>
            </Logo>
            <NavLinks open={open} onClick={updateMenuState}>
                <li><a href="#about">sobre</a></li>
                <li><a href="#experience">experiência</a></li>
                <li><a href="#skills">conhecimentos</a></li>
                <li><a href="#contact">contatos</a></li>
            </NavLinks>
            <Burger>
                <Icon
                    path={open ? mdiClose : mdiMenu}
                    size={1.25}
                    color={'#dbdbdb'}
                    onClick={updateMenuState}
                />
            </Burger>
        </Container>
    );
}

export default Navbar;