import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
    filter: 'all', // 'done', 'notDone', 'all'
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) task.isDone = !task.isDone;
        },
        updateTask: (state, action) => {
            const { id, description } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) task.description = description;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addTask, toggleTask, updateTask, setFilter } = taskSlice.actions;

export default taskSlice.reducer;
