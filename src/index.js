import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Square(props) {
  //  const [value, setValue] = useState(null);
    
/*
    useState(() => {  
        console.log('counter changed!')  
      }) 
*/

    return (
        <button className="square" onClick={() => props.onClick('X')} >
          {props.value}
        </button>
    );
}


/*class Square extends React.Component {
    render() {
      return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
      );
    }
  } */

function Board(props) {
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (i) =>{
        const squares = squares.slice();
        squares[i] = 'X';
        setSquares({squares: squares})

    }

    const renderSquare = (i) =>{
       return <Square value = {squares[i]}
           onClick={() => handleClick(i)}
       />; 
    }   

    const status = 'Next player: X';

    return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
        
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
    );
    
}

 
  
/*
  class Board extends React.Component {
    renderSquare(i) {
      return <Square />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  */
  
function Game(props) {
    return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
    );

}
/*
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">

          </div>
        </div>
      );
    }
  }
  
  */
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  