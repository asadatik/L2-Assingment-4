import { Outlet } from "react-router-dom";
import Navbar from "./Page/HomePage/Navbar";






function App() {
  return (
    
    <div>
      <Navbar />
  
      <Outlet />
    </div>    
      

  
  );
}

export default App;
