import React from 'react';

const FinishChecker = ({ sudokuGrid }) => {
    const isValid = validateSudoku(sudokuGrid);
    return isValid;
};

const validateSudoku = (grid) => {
    // Проверка на корректность судоку, аналогичная логике в компоненте Validator.js.

    // Проверка на наличие пустых ячеек
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col] === null) {
                return false; // Если есть пустая ячейка, судоку не завершено.
            }
        }
    }

    // Проверка на наличие повторяющихся чисел в строках
    for (let row = 0; row < 9; row++) {
        const rowValues = new Set();
        for (let col = 0; col < 9; col++) {
            const num = grid[row][col];
            if (rowValues.has(num)) {
                return false; // Если есть повторяющееся число в строке, судоку некорректно.
            }
            rowValues.add(num);
        }
    }

    // Проверка на наличие повторяющихся чисел в столбцах
    for (let col = 0; col < 9; col++) {
        const colValues = new Set();
        for (let row = 0; row < 9; row++) {
            const num = grid[row][col];
            if (colValues.has(num)) {
                return false; // Если есть повторяющееся число в столбце, судоку некорректно.
            }
            colValues.add(num);
        }
    }

    // Проверка на наличие повторяющихся чисел в квадратах 3x3
    for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 3; boxCol++) {
            const boxValues = new Set();
            for (let row = boxRow * 3; row < boxRow * 3 + 3; row++) {
                for (let col = boxCol * 3; col < boxCol * 3 + 3; col++) {
                    const num = grid[row][col];
                    if (boxValues.has(num)) {
                        return false; // Если есть повторяющееся число в квадрате 3x3, судоку некорректно.
                    }
                    boxValues.add(num);
                }
            }
        }
    }

    return true; // Судоку корректно.
};

export default FinishChecker;
