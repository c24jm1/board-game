import React from 'react';
import ReactDOM from 'react-dom/client'
import "./index.css"

function Square ({value}) {

  console.log(value)

  if (value % 2 === 0){
    return (
      <button className={"square white"}>
      </button>
    );
  }
  else if (value%2 ===1){
    return (
      <button className={"square black"}>
      </button>
    );
  }


}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {

    return (
      <div>
      {
      	[1,2,3,4,5,6,7,8].map( (row) => {
				 return <div key={row} className="board-row">
            {
            	[1,2,3,4,5,6,7,8].map( (col) => {
               return this.renderSquare(col+row)
                
          		})
            }
            </div>

      	})
      }
      </div>
    );
  }
}

class Checker extends React.Component {
  render() {
    return (
      <var className="checker" />
    )
  }
}




class Game extends React.Component {
  render() {
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
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
