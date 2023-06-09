const { isValidBoard } = require("../exercise");

describe("Code Challenge: Validate Sudoku Board", () => {
  it("Function should be defined", () => {
    expect(isValidBoard).toBeDefined();
  });

  it("Should return false if board is empty", () => {
    expect(isValidBoard([])).toBe(false);
  });

  it("Should return false if board is not a 9x9 grid", () => {
    const board = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(isValidBoard(board)).toBe(false);
  });

  it("Should return true for board 1", () => {
    const board1 = [
      [".", ".", ".", "1", "4", ".", ".", "2", "."],
      [".", ".", "6", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", "1", ".", ".", ".", ".", ".", "."],
      [".", "6", "7", ".", ".", ".", ".", ".", "9"],
      [".", ".", ".", ".", ".", ".", "8", "1", "."],
      [".", "3", ".", ".", ".", ".", ".", ".", "6"],
      [".", ".", ".", ".", ".", "7", ".", ".", "."],
      [".", ".", ".", "5", ".", ".", ".", "7", "."],
    ];
    expect(isValidBoard(board1)).toBe(true);
  });

  it("Should return false for board 2", () => {
    const board2 = [
      [".", ".", ".", ".", "2", ".", ".", "9", "."],
      [".", ".", ".", ".", "6", ".", ".", ".", "."],
      ["7", "1", ".", ".", "7", "5", ".", ".", "."],
      [".", "7", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", "8", "3", ".", ".", "."],
      [".", ".", "8", ".", ".", "7", ".", "6", "."],
      [".", ".", ".", ".", ".", "2", ".", ".", "."],
      [".", "1", ".", "2", ".", ".", ".", ".", "."],
      [".", "2", ".", ".", "3", ".", ".", ".", "."],
    ];
    expect(isValidBoard(board2)).toBe(false);
  });

  it("Should return false for board 3", () => {
    const board3 = [
      [".", ".", "4", ".", ".", ".", "6", "3", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      ["5", ".", ".", ".", ".", ".", ".", "9", "."],
      [".", ".", ".", "5", "6", ".", ".", ".", "."],
      ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
      [".", ".", ".", "7", ".", ".", ".", ".", "."],
      [".", ".", ".", "5", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ];

    expect(isValidBoard(board3)).toBe(false);
  });

  it("Should return true for board 4", () => {
    const board4 = [
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", "2", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", "2", "7", "1", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", "2", ".", ".", ".", ".", ".", ".", "."],
      [".", "5", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", "9", ".", ".", ".", "8"],
      [".", ".", ".", ".", ".", "1", "6", ".", "."],
      [".", ".", ".", ".", "6", ".", ".", ".", "."],
    ];

    expect(isValidBoard(board4)).toBe(true);
  });

  it("Should return true for board 5", () => {
    const board5 = [
      [".", ".", ".", "2", ".", ".", "6", ".", "."],
      [".", ".", ".", "1", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", "5", ".", "1", ".", ".", "8"],
      [".", "3", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", "9", ".", ".", ".", ".", "3"],
      ["4", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", "3", "8", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "4"],
    ];

    expect(isValidBoard(board5)).toBe(true);
  });

  it("Should return false for board 6", () => {
    const board6 = [
      [".", ".", ".", ".", ".", ".", "5", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      ["9", "3", ".", ".", "2", ".", "4", ".", "."],
      [".", ".", "7", ".", ".", ".", "3", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", "3", "4", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", "3", ".", ".", "."],
      [".", ".", ".", ".", ".", "5", "2", ".", "."],
    ];

    expect(isValidBoard(board6)).toBe(false);
  });

  it("Should return true for board 7", () => {
    const board7 = [
      [".", ".", ".", ".", "4", ".", "9", ".", "."],
      [".", ".", "2", "1", ".", ".", "3", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "3"],
      [".", ".", ".", "2", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", "7", ".", ".", "."],
      [".", ".", ".", "6", "1", ".", ".", ".", "."],
      [".", ".", "9", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "9", "."],
    ];

    expect(isValidBoard(board7)).toBe(true);
  });
});
