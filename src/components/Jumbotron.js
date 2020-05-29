import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import image3 from '../assets/image3.jpeg';

const Styles = styled.div`
.jumbo {
    background: url(${image3}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    max-height: 100%;
    position: relative;
    z-index: -2;
}

.overlay {
    background-color: #000;
    opacity: 0.4;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
}

`;

const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome!</h1>
                <p>Happy Shopping :)</p>
            </Container>
        </Jumbo>
    </Styles>

)

export default Jumbotron;