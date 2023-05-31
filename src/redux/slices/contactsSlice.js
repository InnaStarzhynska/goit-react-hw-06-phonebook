import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
    contacts: []
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload)
        },
        deleteContact(state, action) {
            const index = state.contacts.findIndex(item => item.id === action.payload);
            state.contacts.splice(index, 1)
        }
    }
})

const persistConfig = {
  key: 'contacts',
    storage,
}

export const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact } = contactsSlice.actions;

