import React from 'react';

import Icon from '@mdi/react'
import { mdiWhatsapp, mdiLinkedin, mdiGithub, mdiEmail } from '@mdi/js'

import { Container } from './styles.js';

function Contact() {
    return (
        <Container id="contact">
            <a href="https://www.linkedin.com/in/gustavofraposo/">
                <Icon path={mdiLinkedin} size={1} color={'rgba(240, 100, 60)'} />
                <span>/gustavofraposo</span>
            </a>
            <a href="https://github.com/GustavoRaposo">
                <Icon path={mdiGithub} size={1} color={'rgba(240, 100, 60)'} />
                <span>/GustavoRaposo</span>
            </a>
            <a href="http://www.wa.me/5541991892409">
                <Icon path={mdiWhatsapp} size={1} color={'rgba(240, 100, 60)'} />
                <span>+55 41 99189-2409</span>
            </a>
            <a href="gustavo_f.raposo@hotmail.com">
                <Icon path={mdiEmail} size={1} color={'rgba(240, 100, 60)'} />
                <span>gustavo_f.raposo@hotmail.com</span>
            </a>
        </Container>
    );
}

export default Contact;