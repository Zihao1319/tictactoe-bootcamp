// Please implement exercise logic here

// keep data about the game in a 2-D array
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// the element that contains the rows and squares
let boardElement;

// the element that contains the entire board
// we can empty it out for convenience
let boardContainer;

// current player global starts at X
let currentPlayer = "X";

// completely rebuilds the entire board every time there's a click
const buildBoard = (board) => {
  // start with an empty container
  boardContainer.innerHTML = "";
  boardElement = document.createElement("div");
  boardElement.classList.add("board");

  // move through the board data array and create the
  // current state of the board
  for (let i = 0; i < board.length; i += 1) {
    // separate var for one row / row element
    const row = board[i];
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");

    // set each square
    // j is the column number
    for (let j = 0; j < row.length; j += 1) {
      // one square element
      const square = document.createElement("div");
      square.classList.add("square");

      // set the text of the square according to the array
      square.innerText = board[i][j];

      rowElement.appendChild(square);

      // set the click all over again
      // eslint-disable-next-line
      square.addEventListener("click", () => {
        squareClick(i, j);
      });
    }

    // add a single row to the board
    boardContainer.appendChild(rowElement);
  }
};

// create the board container element and put it on the screen
const initGame = () => {
  boardContainer = document.createElement("div");
  document.body.appendChild(boardContainer);

  // build the board - right now it's empty
  buildBoard(board);
};

// switch the global values from one player to the next
const togglePlayer = () => {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
};


const squareClick = (column, row) => {
  console.log("coordinates", column, row);

  // see if the clicked square has been clicked on before
  if (board[column][row] === "") {
    // alter the data array, set it to the current player
    board[column][row] = currentPlayer;

    // refresh the screen with a new board
    // according to the array that was just changed
    buildBoard(board);
    console.log(board);

    isRowSame(board);
    isColumnSame(board);
    leftDiagonalSame (board);
    rightDiagonalSame(board);

    if (rowMatchFound === true || colMatchFound === true || leftRightDiagonal === true || rightLeftDiagonal === true  ) {
      console.log("game ENDS!");
    }

    // console.log(isRowSame(board));
    // change the player
    togglePlayer();
  }
};


//HELPER FUNCTIONS//
// function to check if the row have same elements
let rowMatchFound = false;
function isRowSame(currentBoard) {
  for (row = 0; row < currentBoard.length; row++) {
    if (currentBoard[row].includes("") === false) {
      let result = allAreEqual(currentBoard[row]);

      if (result === true) {
        rowMatchFound = true;
      } else {
        rowMatchFound = false;
      }
      console.log("rowMatchFound: " + rowMatchFound);
    }
  }
}

// function to check if the column have same elements
let colMatchFound = false;
function isColumnSame(currentBoard) {
  let transposedArray = transposeArray(currentBoard);
  let result = [];
  
  for (i = 0; i < transposedArray.length; i++) {
    if (transposedArray[i].includes("") === false) {
      result.push([])
      result[i] = allAreEqual(transposedArray[i]);

      if (result === true) {
        colMatchFound = true;
      } else {
        colMatchFound = false;
      }
      console.log("colMatchFound: " + colMatchFound);
    }
  }
}

// transposing an array
function transposeArray(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push([]);
  }

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      newArray[j].push(array[i][j]);
    }
  }

  return newArray;
}

// function to check if the left diagonal are the same
let leftRightDiagonal = false;
function leftDiagonalSame(currentboard) {

  let leftRightArray = [];
  // checking from top left to bottom right
  for (i = 0; i < currentboard.length; i++) {
    leftRightArray.push(board[i][i]);
  }
  // console.log(leftRightArray)
    if (leftRightArray.includes("") === false) {
      let result = allAreEqual(leftRightArray);

      if (result === true) {
        leftRightDiagonal = true;
      } else {
        leftRightDiagonal = false;
      }
      console.log("leftRightDiagonal: " + leftRightDiagonal);
    }
  }


// function to check if the right diagonal are the same
let rightLeftDiagonal = false;
function rightDiagonalSame(currentboard) {
    let rightLeftArray = [];
    let counter = 1;
    for (i = 0; i < currentboard.length; i++) {
      let j = currentboard.length - counter
      rightLeftArray.push(board[i][j]);
      counter += 1
    }
    // console.log(rightLeftArray)
    if (rightLeftArray.includes("") === false) {
      let result = allAreEqual(rightLeftArray);

      if (result === true) {
        rightLeftDiagonal = true;
      } else {
        rightLeftDiagonal = false;
      }
      console.log("rightLeftDiagonal: " + rightLeftDiagonal);
    }
}

// function to check if all the elements within an array are the same
function allAreEqual(array) {
  const result = array.every((element) => {
    if (element === array[0]) {
      // console.log("passed");
      return true;
    }
  });
  return result;
}


initGame();

// OLD CODES SECTION //


//   // check for similar elements
//   if (tempArray.includes("") === true) {
//     return

//   } else if ()

//     // checking for empty string in array, if found, return true
//     let emptyFound = tempArray.includes("");
//     // console.log(emptyFound);

//     // if there is no empty string
//     if (emptyFound != true) {
//       isEqual(tempArray);
//       console.log(matchFound);
//     } else {
//     }
//   }
// }

// //function to check if all the elements in an array is same or different
// function isEqual(array) {
//   for (i = 0; i < array.length - 1; i++) {
//     if (array[i] != array[i + 1]) {
//       matchFound = false;
//       console.log("no match!");
//       break;
//     } else {
//       matchFound = true;
//       console.log("match is found yo!");
//     }
//   }
// }


// function to check all horizontal is the same
// function isRowSame(currentBoard) {
//   let matchFound = false;

//   for (i = 0; i < currentBoard.length; i++) {
//     let tempArray = [];
//     for (j = 0; j < currentBoard.length; j++) {
//       tempArray.push(currentBoard[i][j]);
//     }
//     // console.log(tempArray);

//     // checking for empty string in array, if found, return true
//     let emptyFound = tempArray.includes("");
//     // console.log(emptyFound);

//     // if there is no empty string
//     if (emptyFound != true) {
//       isEqual(tempArray);
//       console.log(matchFound);
//     } else {
//     }
//   }
// }

//function to check if all the vertical is the same
// function isColumnSame(board) {
//   let matchFound = false;
//   for (i = 0; i < board.length; i++) {
//     let tempArray = [];
//     for (j = 0; j < board.length; j++) {
//       tempArray.push(board[j][i]);
//     }
//     if (isEqual(tempArray) === trßue) {
//       matchFound = true;
//     }
//   }
//   return matchFound;
// }

// let leftRightArray = [];
// let rightLeftArray = [];

// // function to check if the diagonals are the same
// function isDiagonalSame(board) {
//   let matchFound = false;

//   // checking from top left to bottom right
//   for (i = 0; i < board.length; i++) {
//     leftRightArray.push(board[i][i]);

//     // checking from top right to bottom left
//     for (j = board.length - 1; j > i; j--) {}
//     rightLeftArray.push(board[i][j]);
//   }
//   if (isEqual(leftRightArray) === true || isEqual(rightLeftArray) === true) {
//     matchFound = true;
//   }
//   leftRightArray = [];
//   rightLeftArray = [];
//   return matchFound;
// }

//checking if the value in an array is empty
// function isEmpty(array) {
//   for (i = 0; i < array.length; i++) {

//     if (array[i] === "") {
//       return true;
//     }

//      return false;
//   }

// }

