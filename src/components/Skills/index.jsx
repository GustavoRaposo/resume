import React from 'react';
import cardsData from './skillCardData.json';
import { Container, SkillItems } from './styles.js';
import Card from '../Card/index';
import { Grid } from '@material-ui/core'



function Skills() {

    function importAll() {
        let images = []
        images = cardsData.map((skill) => {
            let item = {
                image: require('../../assets/' + skill.image).default,
                text: skill.text,
                alt: skill.alt
            };
            return item;
        })
        return images;
    }

    const images = importAll();

    return (
        <Container id="skills">
            <h1>&lt;Conhecimentos/&gt;</h1>

            <SkillItems>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                >
                    {
                        images.map((skill, indice) => {
                            return (
                                <Grid item key={indice} md={3} sm={4} xs={6} >
                                    <Card key={indice} image={skill.image} text={skill.text} alt={skill.alt} />
                                </Grid>

                            )
                        })
                    }
                </Grid>
            </SkillItems>
        </Container>


    );
}

export default Skills;