import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Cell = ({ value, fixed, onChange, gameFinished }) => {
    // const [inputValue, setInputValue] = useState(value || '');
    const [inputValue, setInputValue] = useState(value === null ? '' : String(value)); // Преобразовываем значение в строку


    const handleInputChange = (e) => {
        console.log("Input changed:", e.target.value);
        const userInput = e.target.value;

        if (/^[1-9]$/.test(userInput) || userInput === '') {
            setInputValue(userInput);
// Вызываем функцию-обработчик onChange, это функция handleCellChange, переданная из родительского компонента (Grid)

            onChange(userInput === '' ? null : parseInt(userInput, 10)); // Строку обратно в число
        } else {
            // Если ввод невалидный, можно прописать логику, чтобы посмотреть ошибку
        }
    };


    const cellStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid #ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: gameFinished ? (fixed ? 'green' : 'red') : 'white',
    };

    return (
        <div className={`cell ${fixed ? 'fixed' : ''}`} style={cellStyle}>
            {fixed ? (
                <div className="cell-value">{value}</div>
            ) : (
                <Form.Control
                    type="text"
                    value={inputValue}
                    readOnly={fixed}
                    onChange={handleInputChange}
                    className={`input ${inputValue === '' ? 'empty' : ''}`}
                />
            )}
        </div>
    );
};

export default Cell;



