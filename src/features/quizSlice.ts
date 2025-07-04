

import { createSlice } from '@reduxjs/toolkit'
import { quizData } from '@/home/quizData'

const initialState = {
  quiz: quizData
}

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {}
})

export default quizSlice.reducer // ✅ export default reducer only
