import { quizData } from '@/home/quizData';
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
 quiz: quizData
}

export const quizSlice = createSlice({
  name: "quiz",

  initialState,
  reducers: {} })


export default quizSlice.reducer

