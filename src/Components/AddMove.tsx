import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

function AddMove() {

    const [word, setWord] = useState("");

    const GetInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWord(event.target.value)}

    return (
        <Container>
            <Col>
                <p>Name the move</p>
                <input type="text" onChange={GetInputValue} />
                <p>Type the move</p>
                <input type="text" onChange={GetInputValue}/>
                <p>Damage of the move</p>
                <input type="text" onChange={GetInputValue}/>
                <p>Speed of the move</p>
                <input type="text" onChange={GetInputValue}/>
                <p>Accuracy of the move</p>
                <input type="text" onChange={GetInputValue}/>
                </Col>
                <Button >yaaaaaaaaas</Button>
        </Container>

    );
}

export default AddMove;