import React from 'react';
import { Container } from './styles';

export default function Card(props){
  return(
    <div className="col">
      <Container>
        <img src={props.image} height='200px' width='200px' alt={props.alt}/>
        <h1>{props.text}</h1>
      </Container>
    </div>
    
  );
}