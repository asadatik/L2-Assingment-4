import { Outlet } from "react-router-dom";
import Navbar from "./Page/HomePage/Navbar";
import Footer from "./Page/HomePage/Footer";






function App() {
  return (
    
    <div>
      <Navbar />
  
      <Outlet />

      <Footer></Footer>
    </div>    
      

  
  );
}

export default App;
