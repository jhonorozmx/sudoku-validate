/**
 * Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column,
 * each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.
 *
 * Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above.
 * Note that the puzzle represented by grid does not have to be solvable.
 *
 * Example:
 *
 * For:
 *  board = [
 *  ['.', '.', '.', '1', '4', '.', '.', '2', '.'],
 *  ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
 *  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
 *  ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
 *  ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
 *  ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
 *  ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
 *  ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
 *  ['.', '.', '.', '5', '.', '.', '.', '7', '.']
 *  ]
 *
 *  the output should be:
 *  isValidBoard(board) = true
 *
 * For:
 *  board = [
 *  ['.', '.', '.', '.', '2', '.', '.', '9', '.'],
 *  ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
 *  ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
 *  ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
 *  ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
 *  ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
 *  ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
 *  ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
 *  ['.', '2', '.', '.', '3', '.', '.', '.', '.']
 *  ]
 *
 *  the output should be:
 *  isValidBoard(board) = false
 *
 * The previous grid is not valid because there are two 1s in the second column.
 * Each column, each row and each 3x3 subgrid can only contain the numbers from 1 to 9
 * one at a time.
 **/

/** DO NOT CHANGE THE FUNCTION NAME **/
const isValidBoard = (board) => {
  /* Only make changes below this comment */


  
  /* Only make changes above this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.isValidBoard = isValidBoard;
