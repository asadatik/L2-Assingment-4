import { Button } from "@/components/ui/button";
import { nextQuestion } from "@/features/quizSlice";
import { useAppDispatch } from "@/redux/hook";


function QuizControls() {

      const dispatch = useAppDispatch() ;
 

 const handleNext = () => {
   
      dispatch(nextQuestion());
    }


    return (
        <div className="  flex justify-between mx-auto container  ">

          
           <Button>  -  </Button>
 <Button  onClick={handleNext}  >  +   </Button>
        </div>
    );
}

export default QuizControls;