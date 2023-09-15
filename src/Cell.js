import React, { useState } from 'react';

const Cell = ({ value, fixed, onChange }) => {
    const [inputValue, setInputValue] = useState(value || '');

    const handleInputChange = (e) => {
        const userInput = e.target.value;
        if (/^[1-9]$/.test(userInput) || userInput === '') {
            setInputValue(userInput);
            // Вызываем функцию-обработчик, переданную из родительского компонента (Grid)
            onChange(userInput === '' ? null : parseInt(userInput));
        } else {
            // Невалидный ввод, вы можете обработать ошибку
        }
    };

    return (
        <div className={`cell ${fixed ? 'fixed' : ''}`}>
            {fixed ? value : ''}
            {!fixed && (
                <input
                    type="text"
                    value={inputValue}
                    readOnly={!fixed}
                    onChange={handleInputChange}
                    className={`input ${inputValue === '' ? 'empty' : ''}`}
                />
            )}
        </div>
    );
};

export default Cell;
