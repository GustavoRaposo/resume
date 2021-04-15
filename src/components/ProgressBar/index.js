import React from 'react';

import { Container, ProgressDone } from './styles.js';

function ProgressBar(props) {
    const [style, setStyle] = React.useState({});
    setTimeout(() =>{
        const newStyle = {
            opacity: 1,
            width: `${props.progress}%`
        }
        
        setStyle(newStyle);
    }, 1000);

    return(
        <Container>
            <ProgressDone style={style}/>
        </Container>
    )
}

export default ProgressBar;