import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import './Generator.css';
import useStore from "./store";

const createEmptyGrid = () => {
    const grid = [];
    for (let row = 0; row < 9; row++) {
        const rowArray = Array(9).fill(null);
        grid.push(rowArray);
    }
    return grid;
};

const isSafeToPlaceNumber = (grid, row, col, num) => {
    // Проверяем, безопасно ли разместить число num в данной ячейке.
    // Проверяем, чтобы число не повторялось в строке, столбце и 3x3 квадрате.

    return (
        !usedInRow(grid, row, num) &&
        !usedInColumn(grid, col, num) &&
        !usedInBox(grid, row - (row % 3), col - (col % 3), num)
    );
};

const usedInRow = (grid, row, num) => {
    // Проверяем, используется ли число num в данной строке.

    return grid[row].includes(num);
};

const usedInColumn = (grid, col, num) => {
    // Проверяем, используется ли число num в данном столбце.

    for (let row = 0; row < 9; row++) {
        if (grid[row][col] === num) {
            return true;
        }
    }
    return false;
};

const usedInBox = (grid, startRow, startCol, num) => {
    // Проверяем, используется ли число num в 3x3 квадрате, начиная с заданной ячейки.

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (grid[row + startRow][col + startCol] === num) {
                return true;
            }
        }
    }
    return false;
};

const solveSudoku = (grid) => {
    // Реализация алгоритма "Backtracking" для решения судоку.

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col] === null) {
                for (let num = 1; num <= 9; num++) {
                    if (isSafeToPlaceNumber(grid, row, col, num)) {
                        grid[row][col] = num;
                        if (solveSudoku(grid)) {
                            return true;
                        }
                        grid[row][col] = null;
                    }
                }
                return false;
            }
        }
    }
    return true;
};

const removeNumbers = (grid, numToRemove) => {
    // Удаление numToRemove случайных чисел из сетки для создания пустых ячеек.

    let count = 0;
    while (count < numToRemove) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        if (grid[row][col] !== null) {
            grid[row][col] = null;
            count++;
        }
    }
};

const Generator = () => {
    const setSudokuGrid = useStore((state) => state.setSudokuGrid);
    const sudokuGrid = useStore((state) => state.sudokuGrid);

    useEffect(() => {
        const grid = createEmptyGrid();
        solveSudoku(grid);
        removeNumbers(grid, 40);
        setSudokuGrid(grid); // Устанавливаем сгенерированное судоку в глобальное состояние
    }, []);


    return (
        <div className="generator">
            <Grid sudokuGrid={sudokuGrid} />
        </div>
    );
};

export default Generator;
