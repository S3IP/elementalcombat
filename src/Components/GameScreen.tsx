import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import Move from "../Game/Move";
import { IMove } from "../Interfaces/IMoves";
import './GameScreen.css';

interface IProps {

}

interface IState {
    moves: IMove[],
    Dataisloaded: boolean
}

class GameScreen extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props)

        this.state = {
            moves: [],
            Dataisloaded: false
        }
    }



    GetData = () => {
        fetch('https://localhost:7185/api/Move'
        )
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    moves: data,
                    Dataisloaded: true
                })
            });
    }

    componentDidMount = () => {
        this.GetData();

    }

    render() {


        return (
            <div className="App">
                <div>
                    <ProgressBar now={100} className='HealthbarP1' />
                    <ProgressBar now={100} className='HealthbarP2' />
                </div>
                <div>
                    {JSON.stringify(this.state.moves)}
                </div>
                <div>
                    <Container>
                        <Row >
                            {this.state.moves.map((move, i) => {
                                console.log(this.state.moves);
                                return <Col className="MoveButtons" xs={3}>
                                    <Move name={move.name} damage={move.damage} speed={move.speed} accuracy={move.accuracy} />
                                </Col>
                            })}
                        </Row>
                    </Container>

                </div>
                <div>
                    <button onClick={() => console.log(this.state.moves)}>heeey </button>
                </div>

            </div>
        );
    }
}

export default GameScreen;