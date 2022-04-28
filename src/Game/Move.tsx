import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import './Move.css';

interface IProps {
  name: string,
  damage: number,
  speed: number,
  accuracy: number
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
            <Col>
            <p>Accuracy </p>
            <p>{this.props.accuracy}</p>
            </Col>
          </Row>
        </Button>
      </Col>
      // <Button>
      //   Name: {this.props.name},
      //   Damage: {this.props.damage},
      //   Speed: {this.props.speed},
      //   Accuracy: {this.props.accuracy}
      // </Button>
    );
  }
}

export default Move;