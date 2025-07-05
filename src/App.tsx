
// import "./App.css";
// import Question from "./home/Question";
// import { useAppSelector } from "./redux/hook";

// import { QuizSummery } from "./home/QuizSummery";

// function App() {
//   const { quizComplete } = useAppSelector((state) => state.quiz);

//   return (
//     <>
//       <h1 className="text-center text-9xl my-12">Quiz App</h1>
//       {!quizComplete ? <Question /> : <QuizSummery />}
//     </>
//   );
// }

// export default App;


import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../src/Route/AppRoute";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
