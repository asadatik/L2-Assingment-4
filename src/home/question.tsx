import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { useAppDispatch, useAppSelector } from '../redux/hook'
import  QuizControls from  './QuizControls'
import { Button } from '@/components/ui/button.tsx'
import { setAnswer } from '@/features/quizSlice.ts'


const Question = () => {
  const { questions  ,currentQuestionIndex , userAnswer   } = useAppSelector((state) => state.quiz) // ✅ fixed arrow function
  console.log(questions)

  const dispatch = useAppDispatch();


 const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = userAnswer[currentQuestionIndex];



 const handleAnswerChange = (ans: string) => {
    dispatch(
      setAnswer({
        questionIndex: currentQuestionIndex,
        answer: ans,
      })
    );
    
console.log(ans , 'paici reeeeee')

  };



  return (
     <div className="flex justify-center">
      <Card className="w-[450px] ">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
          {/* <CardDescription>{}</CardDescription> */}
        </CardHeader>

        <CardContent>
          <div>
            {currentQuestion.options.map((option, index) => (
              <Button
                variant={option === currentAnswer ? "default" : "outline"}
                onClick={() => handleAnswerChange(option)}
                className="w-full mt-3"
                size={"lg"}
                key={index}
              >
                {option}
              </Button>
            ))}
          </div>
          <QuizControls></QuizControls>
        </CardContent>
      </Card>
    </div>
  )
}

export default Question
