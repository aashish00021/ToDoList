import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    inputValue: '',
    tasks: [
        {
            id: 1,
            title: 'Create a react project',
            date: new Date().toDateString(),
            time: '2:20 AM',
            done: false,
        },
    ]
}

const addSlice = createSlice({
    name: 'add',
    initialState,
    reducers: {
        updateInput: (state, action) => {
            state.inputValue = action.payload;
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload);
            state.inputValue = '';
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.done = !task.done;
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        }
    }
})

export const { updateInput, addTask, toggleTask, deleteTask } = addSlice.actions;
export default addSlice.reducer;