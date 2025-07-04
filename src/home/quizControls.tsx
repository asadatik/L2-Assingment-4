import { Button } from "@/components/ui/button";
import { nextQuestion , previousQuestion , completeQuiz  } from "@/features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";


function QuizControls() {

      const dispatch = useAppDispatch() ;
 const { currentQuestionIndex, userAnswer, questions ,quizComplete } = useAppSelector((state) => state.quiz);
  

       const isAnswerSelected = userAnswer[currentQuestionIndex] !== null;

     console.log(isAnswerSelected) ;

 const handleNext = () => {
       if (isAnswerSelected) {
      dispatch(nextQuestion());
    }
    }



 const handlePrev = () => {
    if (isAnswerSelected) {
      dispatch(previousQuestion());
    }
    }

//  Handle the "Complete Quiz" button click
  const handleCompleteQuiz = () => {
    dispatch(completeQuiz());
  };

  const isCompleteEnabled =   isAnswerSelected || currentQuestionIndex !== questions.length - 1;



    return (
        <div className="  flex justify-between mx-auto container  ">
            
        {/* Previous Button */}
      <Button
        onClick={handlePrev}
        disabled={currentQuestionIndex === 0 || quizComplete}
      >
        Previous
      </Button>

      {/* Next Button */}
      {currentQuestionIndex < questions.length - 1 && !quizComplete && (
        <Button onClick={handleNext} disabled={!isAnswerSelected}>
          Next
        </Button>
      )}

      {/* Complete Quiz Button */}
      {currentQuestionIndex === questions.length - 1 && !quizComplete && (
        <Button onClick={handleCompleteQuiz} disabled={!isCompleteEnabled}>
          Complete Quiz
        </Button>
      )}
        </div>

        
    );
}

export default QuizControls;