import React from 'react';
import { Container } from './styles';

export default function Card(props) {
  return (
    <Container>
      <img src={props.image} alt={props.alt} />
      <h1>{props.text}</h1>
    </Container>
  );
}