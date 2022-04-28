import React from 'react';
import logo from './logo.svg';
import './App.css';
import Move from './Game/Move';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from 'react-bootstrap';
import { IMove } from './Interfaces/IMoves';
import { moveSyntheticComments } from 'typescript';
import GameScreen from './Components/GameScreen';

interface IProps {

}

interface IState {
}

class App extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props)

    this.state = {
      
    }
  }


  render() {
    return (
      <GameScreen/>
    );
  }
}



export default App;
