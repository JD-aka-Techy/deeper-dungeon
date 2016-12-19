import React from 'react';
import { Component } from 'react';
import TitleHeader from './TitleHeader';
import BattleModal from './BattleModal';
import StatsBar from './StatsBar';

/*
  Main application component.
*/
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      battle: true
    }
  }

  render() {
    return (
      <div className="app">

        <TitleHeader />

        <div className="board">


        </div>

        <StatsBar />

      </div>
    );
  }
}
