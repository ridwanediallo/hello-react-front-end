import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getGreetings = createAsyncThunk('greetings/getGreetings', async () => {
  const res = await fetch('http://localhost:3000/greetings');
  const data = await res.json();
  return data;
});

const greetingSlice = createSlice({
  name: 'greetings',
  initialState: [],

  extraReducers: {
    [getGreetings.fulfilled]: (state, action) => [action.payload],
  },
});

export const { greeting } = greetingSlice.actions;

export default greetingSlice.reducer;
