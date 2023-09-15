import React from 'react';
import './App.css';
import Grid from './Grid';
import Generator from './Generator';

const App = () => {
    return (
        <div className="App">
            <h1>Sudoku Game</h1>
            <Generator />
            <Grid />
        </div>
    );
}

export default App;
