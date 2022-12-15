import React from 'react';
import ReactDOM from 'react-dom/client'
import "./index.css"




// 0  1  2  3  4  5  6  7
// 9  10 11 12 13 14 15 16
// 18 19 20 21 22 23 24 25
// 27 28 29 30 31 32 33 34
// 36 37 38 39 40 41 42 43
// 45 46 47 48 49 50 51 52
// 54 55 56 57 58 59 60 61
// 63 64 65 66 67 68 69 70

var checkerNum = -20;

function Square ({value}) {

  console.log(value)


  if (value % 2 === 0){
    return (
      <button className={"square white"}>
      </button>
    );
  }
  else if (value%2 ===1){

    if(value < 27){
      return(
        <div id = {value}>
        <button className = {"square black"} onClick = {()=>squareClicked(value)}><div className={"checker white"}></div></button>
        </div>
      )
    }
    else if(value>43){
      return(
        <div id = {value}>
        <button className = {"square black"} onClick = {()=>squareClicked(value)} ><div className={"checker red"}></div></button>
      </div>
        //problem: every time it runs line above, it also runs squareclicked and checkerClicked
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
              <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
            </div>
            <div className = "board-row">
                {this.renderSquare(9)}
                {this.renderSquare(10)}
                {this.renderSquare(11)}
                {this.renderSquare(12)}
                {this.renderSquare(13)}
                {this.renderSquare(14)}
                {this.renderSquare(15)}
                {this.renderSquare(16)}
            </div>
            <div className = "board-row">
            {this.renderSquare(18)}
                {this.renderSquare(19)}
                {this.renderSquare(20)}
                {this.renderSquare(21)}
                {this.renderSquare(22)}
                {this.renderSquare(23)}
                {this.renderSquare(24)}
                {this.renderSquare(25)}
            </div>
            <div className = "board-row">
            {this.renderSquare(27)}
            {this.renderSquare(28)}
            {this.renderSquare(29)}
            {this.renderSquare(30)}
            {this.renderSquare(31)}
            {this.renderSquare(32)}
            {this.renderSquare(33)}
            {this.renderSquare(34)}
            </div>
            <div className = "board-row">
            {this.renderSquare(36)}
            {this.renderSquare(37)}
            {this.renderSquare(38)}
            {this.renderSquare(39)}
            {this.renderSquare(40)}
            {this.renderSquare(41)}
            {this.renderSquare(42)}
            {this.renderSquare(43)}
            </div>
            <div className = "board-row">
                {this.renderSquare(45)}
                {this.renderSquare(46)}
                {this.renderSquare(47)}
                {this.renderSquare(48)}
                {this.renderSquare(49)}
                {this.renderSquare(50)}
                {this.renderSquare(51)}
                {this.renderSquare(52)}
            </div>
            <div className = "board-row">
                {this.renderSquare(54)}
                {this.renderSquare(55)}
                {this.renderSquare(56)}
                {this.renderSquare(57)}
                {this.renderSquare(58)}
                {this.renderSquare(59)}
                {this.renderSquare(60)}
                {this.renderSquare(61)}
            </div>
            <div className = "board-row">
                {this.renderSquare(63)}
                {this.renderSquare(64)}
                {this.renderSquare(65)}
                {this.renderSquare(66)}
                {this.renderSquare(67)}
                {this.renderSquare(68)}
                {this.renderSquare(69)}
                {this.renderSquare(70)}
            </div>
        



      

      </div>
    );
  }
}


function squareClicked(currentSquare){
  console.log(document.getElementById(currentSquare))
  if (document.getElementById(currentSquare).classList.contains("checker")){
    //for some reason it doesn't think "checker" is in it — it doesn't seem to think anything is in it
      checkerNum = currentSquare
      console.log(checkerNum)
  }
  else{
    console.log("hello!")


    if(checkerNum >0){
      if(document.getElementById({currentSquare}).contains("black")){
        if(document.getElementById(checkerNum).contains("red")){
          if(checkerNum-8 ===currentSquare || checkerNum-10 ===currentSquare){
            document.getElementById({checkerNum}).classList.remove("checker red")
            document.getElementById(currentSquare).classList.add("checker red")
        }
          else if(checkerNum-16===currentSquare||checkerNum-20===currentSquare){
            document.getElementById({checkerNum}).classList.remove("checker red")
            document.getElementById(currentSquare).classList.add("checker red")
            // document.getElementById()
        }
        }
        else if(document.getElementById(checkerNum).contains("white")){
          if(checkerNum+8 ===currentSquare || checkerNum+10 ===currentSquare){
            document.getElementById({checkerNum}).classList.remove("checker white")
            document.getElementById(currentSquare).classList.add("checker white")
        }
        }
      }

    }
  }

  //check class to see if it contains checker
  //if it does, update by noting square. if not, do not. 
  //







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
