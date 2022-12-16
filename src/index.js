import React from 'react';
import ReactDOM from 'react-dom/client'
import { useState, useEffect, useRef } from 'react';
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
var lastMoved = 23;

var whoseTurn = "Red's turn"
var redPieces = 13;
var whitePieces = 13;

function Square ({value}) {

  // const [redsTurn, setRedsTurn] = useRef("Red's Turn");

  if (value % 2 === 0){
    return (
      <button className={"square white"}>
      </button>
    );
  }
  else if (value%2 ===1){

    if(value < 27){
      return(
        <div>
        <button id = {value} className = {"square black"} onClick = {()=>SquareClicked(value)}><div className={"white checker"}><div className = {"white"}></div></div></button>
        </div>
      )
    }
    else if(value>43){
      return(
        <button id = {value} className = {"square black"} onClick = {()=>SquareClicked(value)}><div className={"checker red"}><div className = {"red"}></div></div></button>
        
        )
    }
    
    else{
      return (
        <button id = {value} className={"square black"} onClick = {()=>SquareClicked(value)}>
          <div className = {"black"}><div className={"black"}></div></div>
          </button>
          
    );
  }
  }

  
}

// function stuff(){
//   return(
//     <div>{whoseTurn}</div>

//   )
// }


class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {

    
    
    //(document.getElementById(lastMoved).firstChild.classList.contains("white")?"Red": "White" + "Turn")

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


function SquareClicked(currentSquare){

  if (document.getElementById(currentSquare).firstChild.classList.contains("checker")){
    
      checkerNum = currentSquare
  }
  else{
    console.log("checkerNum", checkerNum, "currentSquare", currentSquare)

    if(checkerNum >0){
      //you don't need to worry about a checker being on the square moving to bc already know
      //because of first if statement on 160
      if(document.getElementById(lastMoved).firstChild.classList.contains("white")){
        //not sure if the blackTurn works.
        if(document.getElementById(checkerNum).firstChild.classList.contains("red")){
        //if the checker is red


          if(checkerNum-8 ===currentSquare || checkerNum-10 ===currentSquare){
            //normal move for red side
            document.getElementById(currentSquare).firstChild.classList.remove("black")
            document.getElementById(currentSquare).firstChild.classList.add("red")
            document.getElementById(currentSquare).firstChild.classList.add("checker")


            if(document.getElementById(checkerNum).firstChild.firstChild.classList.contains("king")){
              document.getElementById(currentSquare).firstChild.firstChild.classList.add("king")
              document.getElementById(checkerNum).firstChild.firstChild.classList.remove("king")
            }
            else{
              document.getElementById(checkerNum).firstChild.firstChild.classList.remove("red")
              document.getElementById(currentSquare).firstChild.firstChild.classList.add("red")
            }
            document.getElementById(checkerNum).firstChild.firstChild.classList.add("black")
            document.getElementById(currentSquare).firstChild.firstChild.classList.remove("black")


            document.getElementById(checkerNum).firstChild.classList.remove("checker")
            document.getElementById(checkerNum).firstChild.classList.remove("red")
            document.getElementById(checkerNum).firstChild.classList.add("black")
            
            

            lastMoved = currentSquare;
            whoseTurn = "White's Turn"
            
            console.log("whose turn", whoseTurn)
            checkerNum = -20;

            if(currentSquare<8){
              document.getElementById(currentSquare).firstChild.firstChild.classList.remove("red")
              document.getElementById(currentSquare).firstChild.firstChild.classList.add("king")
                //promotion to king
              }

              return(<div id = "text">{whoseTurn}</div>)
        }
          else if((checkerNum-16===currentSquare||checkerNum-20===currentSquare)){
              //if they try to capture
            if(document.getElementById((checkerNum-currentSquare)/2 + currentSquare).firstChild.classList.contains("checker")&&document.getElementById((checkerNum-currentSquare)/2 + currentSquare).firstChild.classList.contains("white")){
                whitePieces-=1;

              //check if there's a checker in between
              
              document.getElementById(currentSquare).firstChild.classList.remove("black")
              document.getElementById(currentSquare).firstChild.classList.add("checker")
              document.getElementById(currentSquare).firstChild.classList.add("red")
              document.getElementById(currentSquare).firstChild.firstChild.classList.remove("black")

              //if it's piece clicked is a king then move king. otherwise just red.
              if(document.getElementById(checkerNum).firstChild.firstChild.classList.contains("king")){
                document.getElementById(checkerNum).firstChild.firstChild.classList.remove("king")
                document.getElementById(currentSquare).firstChild.firstChild.classList.add("king")
              }
              else{
                document.getElementById(currentSquare).firstChild.firstChild.classList.add("red")
                document.getElementById(checkerNum).firstChild.firstChild.classList.remove("red")
              }

              document.getElementById(checkerNum).firstChild.firstChild.classList.add("black")
              document.getElementById(checkerNum).firstChild.classList.remove("checker")
              document.getElementById(checkerNum).firstChild.classList.remove("red")
              document.getElementById(checkerNum).firstChild.classList.add("black")

              if(document.getElementById((checkerNum-currentSquare)/2 + currentSquare).firstChild.classList.contains("king")){
                document.getElementById((checkerNum-currentSquare)/2 + currentSquare).firstChild.firstChild.remove("king")
              }
              else{
              document.getElementById((checkerNum-currentSquare)/2 + currentSquare).firstChild.firstChild.classList.remove("white")
              }
              document.getElementById((checkerNum-currentSquare)/2 + currentSquare).firstChild.firstChild.classList.add("black")
              document.getElementById((checkerNum-currentSquare)/2 + currentSquare).firstChild.classList.remove("checker")
              document.getElementById((checkerNum-currentSquare)/2 + currentSquare).firstChild.classList.remove("white")
              document.getElementById((checkerNum-currentSquare)/2 + currentSquare).firstChild.classList.add("black")


              lastMoved=currentSquare;
              whoseTurn= "White's"
              checkerNum=-20;
              
              if(whitePieces===0){
                return <div>Red Wins!</div>
              }
              else if(whitePieces!==0){
                console.log("keep playing")
              }

              if(currentSquare<8 &&document.getElementById(currentSquare).firstChild.firstChild.classList.contains("red")){
                document.getElementById(currentSquare).firstChild.firstChild.classList.remove("red")
                document.getElementById(currentSquare).firstChild.firstChild.classList.add("king")
                //promotion to king capture
              }
            }
            else{
              console.log(document.getElementById((checkerNum-currentSquare)/2 + currentSquare).firstChild.classList.value)
            }
            // document.getElementById()
        }

        //if it's a king and moving backwards
        else if(document.getElementById(checkerNum).firstChild.firstChild.classList.contains("king")){
          if((checkerNum+8 ===currentSquare || checkerNum+10===currentSquare)){
            document.getElementById(checkerNum).firstChild.classList.remove("checker")
            document.getElementById(checkerNum).firstChild.classList.remove("red")
            document.getElementById(checkerNum).firstChild.firstChild.classList.remove("king")
            document.getElementById(checkerNum).firstChild.firstChild.classList.add("black")

            document.getElementById(currentSquare).firstChild.classList.remove("black")
            document.getElementById(currentSquare).firstChild.classList.add("red")
            document.getElementById(currentSquare).firstChild.classList.add("checker")
            document.getElementById(currentSquare).firstChild.firstChild.classList.remove("black")
            document.getElementById(currentSquare).firstChild.firstChild.classList.add("king")

            lastMoved = currentSquare;
            whoseTurn= "White's Turn";
            checkerNum=-20;
          }
          
                    //king backwards capture
          else if((checkerNum+16===currentSquare||checkerNum+20===currentSquare) && document.getElementById((currentSquare-checkerNum)/2 +checkerNum).firstChild.classList.contains("checker")&&document.getElementById((currentSquare-checkerNum)/2 +checkerNum).firstChild.classList.contains("white"))
                    {
              
              document.getElementById(checkerNum).firstChild.classList.remove("checker")
              document.getElementById(checkerNum).firstChild.classList.remove("red")
              document.getElementById(checkerNum).firstChild.firstChild.classList.remove("king")
              document.getElementById(checkerNum).firstChild.firstChild.classList.add("black")

              document.getElementById(currentSquare).firstChild.classList.add("checker")
              document.getElementById(currentSquare).firstChild.classList.remove("black")
              document.getElementById(currentSquare).firstChild.classList.add("red")
              document.getElementById(currentSquare).firstChild.firstChild.classList.remove("black")
              document.getElementById(currentSquare).firstChild.firstChild.classList.add("king")

              if(document.getElementById((currentSquare-checkerNum)/2 +checkerNum).firstChild.firstChild.classList.contains("king")){
                document.getElementById((currentSquare-checkerNum)/2 +checkerNum).firstChild.firstChild.classList.remove("king")
              }
              else{
                document.getElementById((currentSquare-checkerNum)/2 +checkerNum).firstChild.firstChild.classList.remove("white")
              }
              document.getElementById((currentSquare-checkerNum)/2 +checkerNum).firstChild.classList.remove("checker")
              document.getElementById((currentSquare-checkerNum)/2 +checkerNum).firstChild.classList.remove("white")
              document.getElementById((currentSquare-checkerNum)/2 +checkerNum).firstChild.firstChild.classList.add("black")

              lastMoved = currentSquare;
              whoseTurn= "White's Turn";
              whitePieces-=1;
            
          }

        }
        }
      }//end of blackTurn if statement








      //white's turn from here on
      else{

        
        //if it's white's move

        if(document.getElementById(checkerNum).firstChild.classList.contains("white")){
          if(checkerNum+8 ===currentSquare || checkerNum+10 ===currentSquare){
            //normal move for white side

            document.getElementById(currentSquare).firstChild.firstChild.classList.remove("black")
            document.getElementById(currentSquare).firstChild.classList.remove("black")
            document.getElementById(currentSquare).firstChild.classList.add("checker")
            document.getElementById(currentSquare).firstChild.classList.add("white")

            if( document.getElementById(checkerNum).firstChild.firstChild.classList.contains("king")){
              document.getElementById(checkerNum).firstChild.firstChild.classList.remove("king")
              document.getElementById(currentSquare).firstChild.firstChild.classList.add("king")
            }
            else{
              document.getElementById(currentSquare).firstChild.firstChild.classList.add("white")
              document.getElementById(checkerNum).firstChild.firstChild.classList.remove("white")
            }

            document.getElementById(checkerNum).firstChild.classList.remove("checker")
            document.getElementById(checkerNum).firstChild.classList.remove("white")
            document.getElementById(checkerNum).firstChild.firstChild.classList.add("black")

            // setBlackTurn(true);
            lastMoved = currentSquare;
            whoseTurn= "Red's Turn"
            checkerNum=-20;

            if(currentSquare>62 &&document.getElementById(currentSquare).firstChild.firstChild.classList.contains("white")){
              document.getElementById(currentSquare).firstChild.firstChild.classList.remove("white")
              document.getElementById(currentSquare).firstChild.firstChild.classList.add("king")
              //promotion to king
            }
            else{
              console.log("not promotion", currentSquare)
            }
        }
          else if(checkerNum+16 ===currentSquare || checkerNum+20 ===currentSquare){
            if(document.getElementById((currentSquare-checkerNum)/2+checkerNum).firstChild.classList.contains("checker")&&document.getElementById((currentSquare-checkerNum)/2+checkerNum).firstChild.classList.contains("red")){
            

              //capture for white side

              document.getElementById(currentSquare).firstChild.classList.remove("black")
              document.getElementById(currentSquare).firstChild.classList.add("checker")
              document.getElementById(currentSquare).firstChild.classList.add("white")
              document.getElementById(currentSquare).firstChild.firstChild.classList.remove("black")

              if(document.getElementById(checkerNum).firstChild.firstChild.classList.contains("king")){
                document.getElementById(checkerNum).firstChild.firstChild.classList.remove("king")
                document.getElementById(currentSquare).firstChild.firstChild.classList.add("king")
              }
              else{
                document.getElementById(currentSquare).firstChild.firstChild.classList.add("white")
                document.getElementById(checkerNum).firstChild.firstChild.classList.remove("white")
              }

              document.getElementById(checkerNum).firstChild.classList.add("black")
              document.getElementById(checkerNum).firstChild.classList.remove("white")
              document.getElementById(checkerNum).firstChild.classList.remove("checker")
              document.getElementById(checkerNum).firstChild.firstChild.classList.add("black")

             
              if(document.getElementById((currentSquare-checkerNum)/2+ checkerNum).firstChild.firstChild.classList.contains("king")){
                document.getElementById((currentSquare-checkerNum)/2+ checkerNum).firstChild.firstChild.classList.remove("king")
              }
              else{
                document.getElementById((currentSquare-checkerNum)/2 +checkerNum).firstChild.firstChild.classList.remove("red")
              }
              document.getElementById((currentSquare-checkerNum)/2+ checkerNum).firstChild.classList.add("black")
              document.getElementById((currentSquare-checkerNum)/2+ checkerNum).firstChild.classList.remove("checker")
              document.getElementById((currentSquare-checkerNum)/2+ checkerNum).firstChild.classList.remove("red")
              document.getElementById((currentSquare-checkerNum)/2 +checkerNum).firstChild.firstChild.classList.add("black")



              lastMoved=currentSquare;
              whoseTurn = "Red's Turn";
              checkerNum=-20;

              if(currentSquare>62 &&document.getElementById(currentSquare).firstChild.firstChild.classList.contains("white")){
                document.getElementById(currentSquare).firstChild.firstChild.classList.remove("white")
                document.getElementById(currentSquare).firstChild.firstChild.classList.add("king")
                //promotion to king
              }

              redPieces-=1;

              if(redPieces===0){
                console.log("White wins!")
              }
          
            }
        }


        //backwards king move for white
          else if(document.getElementById(checkerNum).firstChild.firstChild.classList.contains("king")){
            if(checkerNum-8===currentSquare||checkerNum-10===currentSquare){
              document.getElementById(checkerNum).firstChild.classList.remove("checker")
              document.getElementById(checkerNum).firstChild.classList.remove("white")
              document.getElementById(checkerNum).firstChild.firstChild.classList.remove("king")
              document.getElementById(checkerNum).firstChild.firstChild.classList.add("black")

              document.getElementById(currentSquare).firstChild.classList.remove("black")
              document.getElementById(currentSquare).firstChild.classList.add("checker")
              document.getElementById(currentSquare).firstChild.classList.add("white")
              document.getElementById(currentSquare).firstChild.firstChild.classList.remove("black")
              document.getElementById(currentSquare).firstChild.firstChild.classList.add("king")

              lastMoved=currentSquare;
              whoseTurn= "Red's Turn";
              checkerNum=-20;

            }
          //king backwards capture white
          else if((checkerNum-16===currentSquare||checkerNum-20===currentSquare)
                    && document.getElementById((checkerNum-currentSquare)/2 +currentSquare).firstChild.classList.contains("checker")&&document.getElementById((checkerNum-currentSquare)/2 +currentSquare).firstChild.classList.contains("red"))
                    {
              document.getElementById(checkerNum).firstChild.classList.remove("checker")
              document.getElementById(checkerNum).firstChild.classList.remove("white")
              document.getElementById(checkerNum).firstChild.firstChild.classList.remove("king")
              document.getElementById(checkerNum).firstChild.firstChild.classList.add("black")

              document.getElementById(currentSquare).firstChild.classList.add("checker")
              document.getElementById(currentSquare).firstChild.classList.remove("black")
              document.getElementById(currentSquare).firstChild.classList.add("white")
              document.getElementById(currentSquare).firstChild.firstChild.classList.remove("black")
              document.getElementById(currentSquare).firstChild.firstChild.classList.add("king")
              
              if(document.getElementById((checkerNum-currentSquare)/2 +currentSquare).firstChild.firstChild.classList.contains("king")){
                document.getElementById((checkerNum-currentSquare)/2 +currentSquare).firstChild.firstChild.classList.remove("king")
              }
              else{
                document.getElementById((currentSquare-checkerNum)/2 +checkerNum).firstChild.firstChild.classList.remove("red")
              }

              document.getElementById((currentSquare-checkerNum)/2 +checkerNum).firstChild.classList.remove("checker")
              document.getElementById((currentSquare-checkerNum)/2 +checkerNum).firstChild.classList.remove("red")
              document.getElementById((currentSquare-checkerNum)/2 +checkerNum).firstChild.classList.add("black")
              document.getElementById((currentSquare-checkerNum)/2 +checkerNum).firstChild.firstChild.classList.add("black")


              lastMoved = currentSquare;
              whoseTurn = "Red's Turn";
              redPieces-=1;

              if(redPieces===0){
                console.log("White wins!")
              }
            
            }
          }

        }


        }
      

    }
  }

  //check class to see if it contains checker
  //if it does, update by noting square. if not, do not. 
  //







}




class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        history:[{
        Board}],
        stepNumber:0,
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
