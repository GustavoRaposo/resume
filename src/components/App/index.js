import React from 'react';
import Hero from '../Hero'
import { Container } from './styles.js';
import Navbar from '../Navbar';
import About from '../About'
import Skills from '../Skills'
import Experience from '../Experience'
import Contact from '../Contact'

function App() {
    return (
        <>
            <Navbar />
            <Container>
                <Hero title="&lt;GustavoRaposo/&gt;" />
                <About />
                <Skills />
                <Experience />
                <Contact />
            </Container>

        </>
    );
}

export default App;