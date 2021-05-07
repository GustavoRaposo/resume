import React from 'react';
import profileImage from '../../assets/fotoFofa.jpg'
import { Icon } from '@mdi/react'
import { mdiSchool, mdiMapMarker, mdiBriefcase, mdiAccount } from '@mdi/js'

import { Container, Content, Text } from './styles.js'

function About() {
    return (
        <Container id="about">
            <h1>&lt;Sobre/&gt;</h1>
            <Content>
                <img src={profileImage} alt='profile_img' className="profile_image" />
                <Text>
                    <li>
                        <Icon path={mdiAccount} size={1} color={"rgb(240, 100, 60)"} />
                        <h2>Gustavo Foroutan Raposo</h2>
                    </li>
                    <li>
                        <Icon path={mdiMapMarker} size={1} color={"rgb(240, 100, 60)"} />
                        <p>Curitiba - Paraná</p>
                    </li>
                    <li>
                        <Icon path={mdiSchool} size={1} color={"rgb(240, 100, 60)"} />
                        <div>
                            <p>Bacharelado em Ciência da Computação</p>
                            <p>Pontifícia Universidade Católica do Paraná</p>
                            <small>(2017-2021)</small>
                        </div>
                    </li>
                    <li>
                        <Icon path={mdiBriefcase} size={1} color={"rgb(240, 100, 60)"} />
                        <div>
                            <p>Desenvolvedor WEB</p>
                            <p>Desenvolvedor Mobile</p>
                        </div>
                    </li>
                </Text>
            </Content>
        </Container>

    );
}

export default About;