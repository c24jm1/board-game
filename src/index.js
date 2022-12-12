import React from 'react';
import ReactDOM from 'react-dom/client'
import "./index.css"

function Square ({value}) {

  console.log(value)

// 8 13 18 23 28 33 38 43
// 11 16 21 26 31 36 41 46
// 14 19 24 29 34 39 44 49


// 17 22 27 32 37 42 47 52
// 20 25 30 35 40 45 50 55

// 65 70 75 80 85 90 95 100
// 68 73 78 83 88 93 98 103
// 71 76 81 86 91 96 101 106





  if (value % 2 === 0){
    return (
      <button className={"square white"}>
      </button>
    );
  }
  else if (value%2 ===1){

    if(value < 50 && value %10 ===3){
      return(
        <button className = {"square black"}><div className={"checker white"}></div></button>
      )
    }
    else if(value<50 && value%10===1){
      return(
        <button className = {"square black"}><div className={"checker white"}></div></button>
      )
    }
    else if (value <50 && value %10 ===9){
      return(
        <button className = {"square black"}><div className={"checker white"}></div></button>
      )
    }
    else if(value>55 &&value %10===5){
      return(
        <button className = {"square black"}><div className={"checker red"}></div></button>
      )
    }
    else if (value>55 && value %10 ===3){
      return(
        <button className = {"square black"}><div className={"checker red"}></div></button>
      )
    }
    else if(value >55 && value %10 ===1){
      return(
        <button className = {"square black"}><div className={"checker red"}></div></button>
      )
    }




    else{
      return (
        <button className={"square black"}>
          </button>
    );
  }
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
      	[1,2,3,4,5,20,21,22].map( (row) => {
				 return <div key={row} className="board-row">
            {
            	[1,2,3,4,5,6,7,8].map( (col) => {
               return this.renderSquare((5*col+3*row))
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
      <div className="checker" />
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
