import { createSlice } from '@reduxjs/toolkit';

export const rootReducer = createSlice({
  name: 'tasks',
  initialState: {
    contacts: [],
    filter: '',
  },

  reducers: {
    addContacts: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContacts: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContacts, deleteContacts, updateFilter } =
  rootReducer.actions;
