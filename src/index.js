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

var outsideBlackTurn = true;
var redPieces = 12;
var whitePieces = 12;
var redDouble = "";
var whiteDouble = "";

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

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numberRed: 12,
      numberWhite:12,
      won: ""
    };
  }



  renderSquare(i) {
    return <Square value={i} 
    />;
  }


  render() {


    // let status;
    
    // this.setState({
    //   numberRed:countPieces("red", this.current.Square),
    //   numberWhite:countPieces("white", this.current.Square),
    // })

    // if(this.numberRed ===0){
    //   status = calculateWinner("white", Square)
    // }
    // else if (this.numberWhite===0){
    //   status = calculateWinner("red", Square)
    // }

    //(document.getElementById(lastMoved).firstChild.classList.contains("white")?"Red": "White" + "Turn")

    return (
      
      <div>
        {/* <div>{status}</div> */}
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
            outsideBlackTurn = false;
            
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

              //check if there's a checker in between
            if(document.getElementById((checkerNum-currentSquare)/2 + currentSquare).firstChild.classList.contains("checker")&&document.getElementById((checkerNum-currentSquare)/2 + currentSquare).firstChild.classList.contains("white")){
                whitePieces-=1;

                //seeing what way you're taking
                if(checkerNum-16===currentSquare){
                  redDouble= "r"
                  console.log("red took right!", redDouble)
                }
                else if (checkerNum-20===currentSquare){
                  redDouble = "l"
                  console.log("red took left!", redDouble)
                  
                }
              
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

              //getting rid of original square classes and making it normal square
              document.getElementById(checkerNum).firstChild.firstChild.classList.add("black")
              document.getElementById(checkerNum).firstChild.classList.remove("checker")
              document.getElementById(checkerNum).firstChild.classList.remove("red")
              document.getElementById(checkerNum).firstChild.classList.add("black")

              //if it's a king get rid of king factor, otherwise just the color.
              if(document.getElementById((checkerNum-currentSquare)/2 + currentSquare).firstChild.firstChild.classList.contains("king")){
                document.getElementById((checkerNum-currentSquare)/2 + currentSquare).firstChild.firstChild.remove("king")
              }
              else{
              document.getElementById((checkerNum-currentSquare)/2 + currentSquare).firstChild.firstChild.classList.remove("white")
              }

              //set square to normal, get rid of checker
              document.getElementById((checkerNum-currentSquare)/2 + currentSquare).firstChild.firstChild.classList.add("black")
              document.getElementById((checkerNum-currentSquare)/2 + currentSquare).firstChild.classList.remove("checker")
              document.getElementById((checkerNum-currentSquare)/2 + currentSquare).firstChild.classList.remove("white")
              document.getElementById((checkerNum-currentSquare)/2 + currentSquare).firstChild.classList.add("black")


              lastMoved=currentSquare;
              whoseTurn= "White's Turn"
              checkerNum=-20;
              
              if(whitePieces===0){
                console.log("Red wins!")
                return <div>Red Wins!</div>
              }
              else if(whitePieces!==0){
                console.log("keep playing. white pieces:", whitePieces)
              }

              //promotion to king capture
              if(currentSquare<8 &&document.getElementById(currentSquare).firstChild.firstChild.classList.contains("red")){
                document.getElementById(currentSquare).firstChild.firstChild.classList.remove("red")
                document.getElementById(currentSquare).firstChild.firstChild.classList.add("king")
              }
                          //normal capature, seeing if double capture possible
            else if (currentSquare>8){
              if(redDouble === "l" && 
            document.getElementById(currentSquare-10).firstChild.contains("checker")&&
            document.getElementById(currentSquare-10).firstChild.contains("white")&&
            !document.getElementById(currentSquare-20).firstChild.contains("checker")){
              console.log("Alert! Double capture available for red to the LEFT!")

                //see if it's a king that's doing the capture
                if(document.getElementById(currentSquare).firstChild.firstChild.contains("king")){
                  document.getElementById(currentSquare).firstChild.firstChild.remove("king")
                  document.getElementById(currentSquare).firstChild.firstChild.add("black")
                  document.getElementById(currentSquare-20).firstChild.firstChild.add("king")
                  document.getElementById(currentSquare-20).firstChild.firstChild.remove("black")
                }
                else{
                  document.getElementById(currentSquare).firstChild.firstChild.remove("red")
                  document.getElementById(currentSquare).firstChild.firstChild.add("black")
                  document.getElementById(currentSquare-20).firstChild.firstChild.remove("black")
                  document.getElementById(currentSquare-20).firstChild.firstChild.add("red")
                }
                document.getElementById(currentSquare).firstChild.remove("checker")
                document.getElementById(currentSquare).firstChild.remove("red")
                document.getElementById(currentSquare).firstChild.add("black")

                document.getElementById(currentSquare-10).firstChild.remove("checker")
                document.getElementById(currentSquare-10).firstChild.remove("white")
                document.getElementById(currentSquare-10).firstChild.add("black")

                //see if a king is being taken
                if(document.getElementById(currentSquare-10).firstChild.firstChild.contains("king")){
                  document.getElementById(currentSquare-10).firstChild.firstChild.remove("king")
                  document.getElementById(currentSquare-10).firstChild.firstChild.add("black")
                }
                else{
                  document.getElementById(currentSquare-10).firstChild.firstChild.remove("white")
                  document.getElementById(currentSquare-10).firstChild.firstChild.add("black")
                }

                document.getElementById(currentSquare-20).firstChild.add("checker")
                document.getElementById(currentSquare-20).firstChild.add("red")
                document.getElementById(currentSquare-20).firstChild.remove("black")

                currentSquare = currentSquare-20
                lastMoved = currentSquare;
                
            }
              else if(redDouble === "r" && document.getElementById(currentSquare-8).firstChild.contains("checker")
              &&document.getElementById(currentSquare-8).firstChild.contains("white")&&
              !document.getElementById(currentSquare-16).firstChild.contains("checker")){
                console.log("Alert! Double capture available for red to the RIGHT!")
                if(document.getElementById(currentSquare).firstChild.firstChild.contains("king")){
                  document.getElementById(currentSquare).firstChild.firstChild.remove("king")
                  document.getElementById(currentSquare).firstChild.firstChild.add("black")
                  document.getElementById(currentSquare-16).firstChild.firstChild.add("king")
                  document.getElementById(currentSquare-16).firstChild.firstChild.remove("black")
                }
                else{
                  document.getElementById(currentSquare).firstChild.firstChild.remove("red")
                  document.getElementById(currentSquare).firstChild.firstChild.add("black")
                  document.getElementById(currentSquare-16).firstChild.firstChild.remove("black")
                  document.getElementById(currentSquare-16).firstChild.firstChild.add("red")
                }

                document.getElementById(currentSquare).firstChild.remove("checker")
                document.getElementById(currentSquare).firstChild.remove("red")
                document.getElementById(currentSquare).firstChild.add("black")

                document.getElementById(currentSquare-8).firstChild.remove("checker")
                document.getElementById(currentSquare-8).firstChild.remove("white")
                document.getElementById(currentSquare-8).firstChild.add("black")

                if(document.getElementById(currentSquare-8).firstChild.firstChild.contains("king")){
                  document.getElementById(currentSquare-8).firstChild.firstChild.remove("king")
                  document.getElementById(currentSquare-8).firstChild.firstChild.add("black")
                }
                else{
                  document.getElementById(currentSquare-8).firstChild.firstChild.remove("white")
                  document.getElementById(currentSquare-8).firstChild.firstChild.add("black")
                }

                document.getElementById(currentSquare-16).firstChild.add("checker")
                document.getElementById(currentSquare-16).firstChild.add("red")
                document.getElementById(currentSquare-16).firstChild.remove("black")

                currentSquare = currentSquare-16
                lastMoved = currentSquare;

              }
              else{
                console.log(document.getElementById(currentSquare-8).firstChild.contains("checker"),
                document.getElementById(currentSquare-8).firstChild.contains("white"),
              !document.getElementById(currentSquare-16).firstChild.contains("checker"))
              }
              //CHECK HERE FOR REFERENCE
              //NOW need to make it a while loop, so it will continue to do this until no more captures
            }
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

              if(checkerNum+16===currentSquare){
                whiteDouble= "r"
                console.log("white took right!", whiteDouble)
                //FROM WHITE NOT VIEWER VIEW
              }
              else if (checkerNum+20===currentSquare){
                whiteDouble = "l"
                console.log("white took left!", whiteDouble)
              }

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
              else if (currentSquare<62){
                if(whiteDouble==="l"&&!document.getElementById(currentSquare +20).firstChild.classList.contains("checker")&& 
                  document.getElementById(currentSquare +10).firstChild.contains("checker")&&
                  document.getElementById(currentSquare +10).firstChild.contains("red")){
                    //LOOK OVER HERE
                    console.log("Alert! Double capture available for white to the LEFT!")
                    if(document.getElementById(currentSquare).firstChild.firstChild.contains("king")){
                      document.getElementById(currentSquare).firstChild.firstChild.remove("king")
                      document.getElementById(currentSquare).firstChild.firstChild.add("black")
                      document.getElementById(currentSquare+20).firstChild.firstChild.add("king")
                      document.getElementById(currentSquare+20).firstChild.firstChild.remove("black")
                    }
                    else{
                      document.getElementById(currentSquare).firstChild.firstChild.remove("white")
                      document.getElementById(currentSquare).firstChild.firstChild.add("black")
                      document.getElementById(currentSquare+20).firstChild.firstChild.remove("black")
                      document.getElementById(currentSquare+20).firstChild.firstChild.add("white")
                    }
                    document.getElementById(currentSquare).firstChild.remove("checker")
                    document.getElementById(currentSquare).firstChild.remove("white")
                    document.getElementById(currentSquare).firstChild.add("black")
    
                    document.getElementById(currentSquare+10).firstChild.remove("checker")
                    document.getElementById(currentSquare+10).firstChild.remove("red")
                    document.getElementById(currentSquare+10).firstChild.add("black")
    
                    //see if a king is being taken
                    if(document.getElementById(currentSquare+10).firstChild.firstChild.contains("king")){
                      document.getElementById(currentSquare+10).firstChild.firstChild.remove("king")
                      document.getElementById(currentSquare+10).firstChild.firstChild.add("black")
                    }
                    else{
                      document.getElementById(currentSquare+10).firstChild.firstChild.remove("red")
                    }

                    document.getElementById(currentSquare+20).firstChild.add("checker")
                    document.getElementById(currentSquare+20).firstChild.add("red")
                    document.getElementById(currentSquare+20).firstChild.remove("black")

                    currentSquare = currentSquare+20
                    lastMoved = currentSquare;
                  }
                
                else if(whiteDouble === "r"&& document.getElementById(currentSquare-8).firstChild.contains("checker")
                &&document.getElementById(currentSquare+8).firstChild.contains("red")&&
                !document.getElementById(currentSquare+16).firstChild.contains("checker")){
                  console.log("Alert! Double capture available for white to the RIGHT!")
                  if(document.getElementById(currentSquare).firstChild.firstChild.contains("king")){
                    document.getElementById(currentSquare).firstChild.firstChild.remove("king")
                    document.getElementById(currentSquare).firstChild.firstChild.add("black")
                    document.getElementById(currentSquare+16).firstChild.firstChild.add("king")
                    document.getElementById(currentSquare+16).firstChild.firstChild.remove("black")
                  }
  
                  document.getElementById(currentSquare).firstChild.remove("checker")
                  document.getElementById(currentSquare).firstChild.remove("white")
                  document.getElementById(currentSquare).firstChild.add("black")
  
                  document.getElementById(currentSquare+8).firstChild.remove("checker")
                  document.getElementById(currentSquare+8).firstChild.remove("red")
                  document.getElementById(currentSquare+8).firstChild.add("black")
  
                  if(document.getElementById(currentSquare+8).firstChild.firstChild.contains("king")){
                    document.getElementById(currentSquare+8).firstChild.firstChild.remove("king")
                    document.getElementById(currentSquare+8).firstChild.firstChild.add("black")
                  }
  
                  document.getElementById(currentSquare+16).firstChild.add("checker")
                  document.getElementById(currentSquare+16).firstChild.add("white")
                  document.getElementById(currentSquare+16).firstChild.remove("black")

                  currentSquare = currentSquare+16
                  lastMoved = currentSquare;
                }

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
              else{
                console.log("keep playing", redPieces)
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

  handleClick(i){
    const history = this.state.history;
    const current = history[history.length-1];
    const squares = current.squares.slice();
    // if(calculateWinner()){
    //     return;
    // }
    // this.setState({
    //     history:history.concat([{
    //     squares:squares,
    // }]),
    // })
}


  render() {

    // const winner = calculateWinner();

    // const Turn = calculateWhoseTurn();

    // let status;
    //     if(winner){
    //         status = ('Winner: '+winner);
    //     }
    //     else{
    //       status = (Turn)
    //     }
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function countPieces(color, square){
  var smallRed = 0;
  var smallWhite = 0
  for(let i = 0; i<8; i++){
    console.log(i*9+i)
    if(square[i].firstChild.classList.contains("checker red")){
      smallRed+=1;
    }
    else if(square(i).firstChild.classList.contains("checker white")){
      smallWhite+=1;
    }
  }
  if(color === "red"){
    return smallRed
  }
  else{
    return smallWhite
  }

}

function calculateWinner(){
  if(countPieces("white", Square)===0){
    return "Red Wins!"
  }
  else if(countPieces("red", Square)===0){
    return "Red Wins!"
  }
  return null
}

function calculateWhoseTurn(){
  if(whoseTurn.includes("Red")){
    return "Red's Move"
  }
  else{
    return "White's Move"
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
