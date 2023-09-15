import create from 'zustand';

const useStore = create((set) => ({
    sudokuGrid: [],
    setSudokuGrid: (grid) => set({ sudokuGrid: grid }),
}));

export default useStore;
