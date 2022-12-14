import React from 'react';
import ReactDOM from 'react-dom/client'
import "./index.css"

const counter = 0;
const square = 0;
const color = " ";

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
        <button className = {"square black"}><button className={"checker red"}></button></button>
      )
    }
    else if(value<50 && value%10===1){
      return(
        <button className = {"square black"} onClick = {squareClicked}><button className={"checker red"} onClick = {checkerClicked({value}, "red")}></button></button>
      )
    }
    else if (value <50 && value %10 ===9){
      return(
        <button className = {"square black"}><button className={"checker red"}></button></button>
      )
    }
    else if(value>55 &&value %10===5){
      return(
        <button className = {"square black"}><button className={"checker black"}></button></button>
      )
    }
    else if (value>55 && value %10 ===3){
      return(
        <button className = {"square black"}><button className={"checker black"}></button></button>
      )
    }
    else if(value >55 && value %10 ===1){
      return(
        <button className = {"square black"}><button className={"checker black"}></button></button>
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

function checkerClicked(currentSquare, checkerColor){
  if(checkerColor=== "black"&&this.state.blackTurn===true){
    counter+=1
    square = currentSquare;
    color = checkerColor;
    if(counter %2 ===0){
      counter = 0
  }
}
  if(checkerColor==="red"&& this.state.blackTurn===false){
    counter+=1
    square = currentSquare;
    color = checkerColor;
    if(counter %2 ===0){
      counter = 0
  }
  }
}

function squareClicked(currentSquare){
  if(counter % 2 === 0){
    return
  }
  else{
    counter +=2;
  }
  if(color === "red"){
    if(square +8 === currentSquare || square -2 ===currentSquare){
      //get rid of checker on current square and render on next one
    }
    


  }



}


// class Checker {
  
//     constructor()
// }




class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        history:[{
        squares:Array(9).fill(null)}],
        stepNumber:0,
        blackTurn: true,
    }
  }


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
