import React from 'react';
import Icon from '@mdi/react'
import {
    mdiLanguageC,
    mdiLanguageCpp,
    mdiLanguageJava,
    mdiLanguageJavascript,
    mdiLanguagePython,
    mdiLanguageHtml5,
    mdiLanguageCss3,
    mdiBootstrap,
    mdiAndroid,
    mdiReact
} from '@mdi/js'

import ProgressBar from '../ProgressBar'
import { Container, Text, SkillItems, Skill} from './styles.js'

function Skills() {
    return (
        <Container id="skills">
            <Text >
                <h1>&lt;Conhecimentos/&gt;</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </Text>
            <SkillItems>
                <Skill>
                    <Icon path={mdiLanguageJava} size={1.5}/>
                    <ProgressBar progress={95}/>
                </Skill>
                <Skill>
                    <Icon path={mdiAndroid} size={1.5}/>
                    <ProgressBar progress={85}/>
                </Skill>
                <Skill>
                    <Icon path={mdiLanguageHtml5} size={1.5}/>
                    <ProgressBar progress={80}/>
                </Skill>
                <Skill>
                    <Icon path={mdiLanguageCss3} size={1.5}/>
                    <ProgressBar progress={75}/>
                </Skill>
                <Skill>
                    <Icon path={mdiBootstrap} size={1.5}/>
                    <ProgressBar progress={75}/>
                </Skill>
                <Skill>
                    <Icon path={mdiLanguagePython} size={1.5}/>
                    <ProgressBar progress={70}/>
                </Skill>
                <Skill>
                    <Icon path={mdiReact} size={1.5}/>
                    <ProgressBar progress={60}/>
                </Skill>
                <Skill>
                    <Icon path={mdiLanguageC} size={1.5}/>
                    <ProgressBar progress={50}/>
                </Skill>
                <Skill>
                    <Icon path={mdiLanguageCpp} size={1.5}/>
                    <ProgressBar progress={45}/>
                </Skill>
                <Skill>
                    <Icon path={mdiLanguageJavascript} size={1.5}/>
                    <ProgressBar progress={40}/>
                </Skill>
            </SkillItems>
        </Container>
    );
}

export default Skills;