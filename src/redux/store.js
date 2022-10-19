import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greetingSlice';

export default configureStore({
  reducer: {
    randomGreeting: greetingSlice,
  },
});
