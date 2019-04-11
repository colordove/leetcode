/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 *
 * https://leetcode.com/problems/valid-sudoku/description/
 *
 * algorithms
 * Medium (41.99%)
 * Total Accepted:    225.3K
 * Total Submissions: 530.9K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be
 * validated according to the following rules:
 * 
 * 
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without
 * repetition.
 * 
 * 
 * 
 * A partially filled sudoku which is valid.
 * 
 * The Sudoku board could be partially filled, where empty cells are filled
 * with the character '.'.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * ⁠ ["5","3",".",".","7",".",".",".","."],
 * ⁠ ["6",".",".","1","9","5",".",".","."],
 * ⁠ [".","9","8",".",".",".",".","6","."],
 * ⁠ ["8",".",".",".","6",".",".",".","3"],
 * ⁠ ["4",".",".","8",".","3",".",".","1"],
 * ⁠ ["7",".",".",".","2",".",".",".","6"],
 * ⁠ [".","6",".",".",".",".","2","8","."],
 * ⁠ [".",".",".","4","1","9",".",".","5"],
 * ⁠ [".",".",".",".","8",".",".","7","9"]
 * ]
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * [
 * ["8","3",".",".","7",".",".",".","."],
 * ["6",".",".","1","9","5",".",".","."],
 * [".","9","8",".",".",".",".","6","."],
 * ["8",".",".",".","6",".",".",".","3"],
 * ["4",".",".","8",".","3",".",".","1"],
 * ["7",".",".",".","2",".",".",".","6"],
 * [".","6",".",".",".",".","2","8","."],
 * [".",".",".","4","1","9",".",".","5"],
 * [".",".",".",".","8",".",".","7","9"]
 * ]
 * Output: false
 * Explanation: Same as Example 1, except with the 5 in the top left corner
 * being 
 * ⁠   modified to 8. Since there are two 8's in the top left 3x3 sub-box, it
 * is invalid.
 * 
 * 
 * Note:
 * 
 * 
 * A Sudoku board (partially filled) could be valid but is not necessarily
 * solvable.
 * Only the filled cells need to be validated according to the mentioned
 * rules.
 * The given board contain only digits 1-9 and the character '.'.
 * The given board size is always 9x9.
 * 
 * 
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // column
    let column = [];
    let j = 0;
    while(j < board.length) {
        column[j] = [];
        for(let i = 0; i < board.length; i++) {
            column[j].push(board[i][j]);
        }
        j++;
    }
    // 9*9
    let square = [[], [], []];
    for(let i = 0; i < board.length; i++) {
        if (i < 3) {
            square[0].push(board[i]);
        }
        if (i >= 3 && i < 6) {
            square[1].push(board[i]);
        }
        if (i >= 6 && i < 9) {
            square[2].push(board[i]);
        }
    }
    
    let x = 0;
    const square9 = [];
    while(x < square.length) {
         let temp = [[], [], []];
         for(let j = 0; j < square[x].length; j++) {
            for(let k = 0; k < square[x][j].length; k++) {
                if (k < 3) {
                    temp[0].push(square[x][j][k]);
                }
                if (k >= 3 && k < 6) {
                    temp[1].push(square[x][j][k]);
                }
                if (k >= 6 && k < 9) {
                    temp[2].push(square[x][j][k]);
                }
            }
        }
        square9.push(...temp);
        x++;
    }
    
    if (uniqueDoubleDimensionalAry(board) && uniqueDoubleDimensionalAry(column) && uniqueDoubleDimensionalAry(square9)) {
        return true;
    }
    return false;
    
};

function uniqueDoubleDimensionalAry(ary) {
    let isLegal = true;
    for(let i = 0; i < ary.length; i++) {
        if (!unique(ary[i])) {
            isLegal = false
        }
    }
    return isLegal;
}


function unique(ary) {
    let unique = true;
    for(let i = 0; i < ary.length; i++) {
        for(let j = 0; j < ary.length; j++) {
            if (i !== j && (ary[i] !== '.' || ary[j] !== '.') && ary[i] === ary[j]) {
                unique = false;
            }
        }
    }
    return unique;
}

