import React from 'react';
import Hero from '../Hero/index'
import { Container } from './styles.js';
import Navbar from '../Navbar/index';
import About from '../About/index';
import Skills from '../Skills/index';
import Experience from '../Experience/index';
import Contact from '../Contact/index';

function App() {
    return (
        <>
            <Navbar />
            <Container>
                <Hero title="&lt;GustavoRaposo/&gt;" />
                <About />
                <Experience />
                <Skills />
                <Contact />
            </Container>

        </>
    );
}

export default App;