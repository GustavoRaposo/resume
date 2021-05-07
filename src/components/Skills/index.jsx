import React from 'react';
import cardsData from './skillCardData.json';
import { Container, SkillItems } from './styles.js';
import Card from '../Card/index'



function Skills() {

    function importAll(){
        let images = []
        cardsData.map((skill) => {
            let item = {
                image: require('../../assets/' + skill.image).default,
                text: skill.text,
                alt: skill.alt
            };
            images.push(item);
        })
        return images
    }

    const images = importAll();

    return (
        <Container id="skills">
            <h1>&lt;Conhecimentos/&gt;</h1>
            <SkillItems>
                <div className="row">
                    {
                        images.map((skill, indice) => {
                            return (
                                
                                    <Card key={indice} image={skill.image} text={skill.text} alt={skill.alt}/>
                            )
                        })
                    }
                </div>
            </SkillItems>
        </Container>
    );
}

export default Skills;