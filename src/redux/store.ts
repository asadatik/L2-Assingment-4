

import { configureStore } from '@reduxjs/toolkit'
import quizReducer from '../features/quizSlice' // ✅ import the default export

export const store = configureStore({
  reducer: {
    quiz: quizReducer, // ✅ using default import
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
