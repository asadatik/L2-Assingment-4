import { useAppSelector } from '../redux/hook'

const Question = () => {
  const { quiz } = useAppSelector((state) => state.quiz) // ✅ fixed arrow function
  console.log(quiz)

  return (
    <div>
      <h1>Question</h1>
    </div>
  )
}

export default Question
