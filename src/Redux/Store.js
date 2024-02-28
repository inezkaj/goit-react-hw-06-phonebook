import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './Reducer.js';

const Store = configureStore({
  reducer: { tasks: rootReducer.reducer },
});

export default Store;
