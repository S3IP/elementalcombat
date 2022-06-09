import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import './Move.css';


interface IProps {
  name: string,
  damage: number,
  speed: number,
  accuracy: number,
  moveType: string
};

interface IState {
};

class Move extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props)

    this.state = {
    }
  }


  render() {
    return (
      <div>
        <h1>
          
        </h1>
      
      <Col>
        <Button>
          <Row>
            <Col>{this.props.name}</Col>
          </Row>
          <Row>
            <Col>
              <p>Damage </p>
              <p>{this.props.damage}</p>
            </Col>
            <Col>
              <p>Speed</p>
              <p>{this.props.speed}</p>
            </Col>
            <Row>
              <Col>
                <p>Accuracy </p>
                <p>{this.props.accuracy}</p>
              </Col>
              <Col>
                <p>Type </p>
                <p>{this.props.moveType}</p>
              </Col>
            </Row>
          </Row>
        </Button>
      </Col>
      </div>
    );
  }
}

export default Move;