import { Button } from "@/components/ui/button";
import { nextQuestion , previousQuestion  } from "@/features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";


function QuizControls() {

      const dispatch = useAppDispatch() ;
 const { currentQuestionIndex, userAnswer,  } = useAppSelector((state) => state.quiz);
  

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




    return (
        <div className="  flex justify-between mx-auto container  ">

          
           <Button   onClick={handlePrev} >  -  </Button>
 <Button  onClick={handleNext}  >  +   </Button>
        </div>
    );
}

export default QuizControls;