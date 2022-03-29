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

let tempBoard;

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

    // isRowSame(board);
    // console.log(isRowSame(board));
    // change the player
    togglePlayer();
  }
};

// let gameState = false;

// function checkWin(array) {
//   if (
//     isRowSame(array) === true ||
//     isColumnSame(array) == true ||
//     isDiagonalSame(array) == true
//   ) {
//     gameState = "its a match";
//     return gameState;
//   }
// }

// function to check all horizontal is the same
let matchFound;
let tempArray = [];
function isRowSame(currentBoard) {
  let matchFound = false;
  for (i = 0; i < currentBoard.length; i++) {
    for (j = 0; j < currentBoard.length; j++) {
      // only look for values which is non empty
      if (currentBoard[i] != "") {
        tempArray.push(currentBoard[i][j]);
      }
    }
    if (isEqual(tempArray) == true) {
      matchFound = true;
    }
    console.log(matchFound);
    return matchFound;
  }
}

// functiont to check if all the elements in an array is same or different
function isEqual(array) {
  for (i = 0; i < array.length - 1; i++) {
    if (array[i] != array[i + 1]) {
      return false;
    }
    return true;
  }
}
// function to check if all the vertical is the same

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

initGame();
