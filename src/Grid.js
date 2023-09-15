import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cell from './Cell';
import FinishChecker from './FinishChecker';


const Grid = ({ sudokuGrid, setSudokuGrid }) => {
    if (!sudokuGrid || sudokuGrid.length !== 9) {
        return null;
    }


    // Вызываем FinishChecker и сохраняем результат в переменной isGameFinished
    const isGameFinished = FinishChecker({ sudokuGrid });

    const handleCellChange = (row, col, newValue) => {
        // Создаем копию существующей сетки
        const newGrid = [...sudokuGrid];

        // Обновляем значение ячейки в новой сетке
        newGrid[row][col] = newValue;

        // Обновляем состояние сетки
        setSudokuGrid(newGrid);
    };


    return (
        <Container fluid className={`grid ${isGameFinished ? 'finished' : ''}`}>
            {sudokuGrid.map((row, rowIndex) => (
                <Row key={rowIndex}>
                    {row.map((cellValue, cellIndex) => (
                        <Col key={cellIndex}>
{/* Передаем информацию о завершении игры в компонент Cell */}
                            <Cell
                                value={cellValue}
                                fixed={cellValue !== null}
                                onChange={(newValue) => handleCellChange(rowIndex, cellIndex, newValue)}
                                gameFinished={isGameFinished}
                            />

                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    );
}

export default Grid;




