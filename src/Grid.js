import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cell from './Cell';

const Grid = ({ sudokuGrid }) => {
    return (
        <div className="grid">
            <Row>
                {sudokuGrid.map((row, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                        {row.map((cellValue, colIndex) => (
                            <Col key={colIndex}>
                                <Cell value={cellValue} fixed={cellValue !== null} />
                            </Col>
                        ))}
                    </React.Fragment>
                ))}
            </Row>
        </div>
    );
}

export default Grid;
