import React, { useEffect, useState } from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import Move from "../Game/Move";
import { IMove } from "../Interfaces/IMoves";
import '../Css/GameScreen.css';
import { GetAllMoves } from '../api/GetPostApi'


export default function GameScreen() {

    const [Moves, SetMoves] = useState<IMove[]>([]);
    useEffect(() => {
        const api = async () => {
            SetMoves(await GetAllMoves());
        };
        api();
    }, []);

    return (
        <div className="App">
            <div>
                <Container>
                    <Row >
                        {Moves.map((move, i) => {
                            console.log(Moves);
                            console.log(move.moveType);
                            return <Col className="MoveButtons" xs={3}>
                                <Move name={move.name} damage={move.damage} speed={move.speed} accuracy={move.accuracy} moveType={move.moveType} />
                            </Col>
                            
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

