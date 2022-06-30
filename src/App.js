import './App.css';
import { Routes, Route } from "react-router-dom";
import Calendar from './component/Calendar';
import Footer from './component/Footer';
import Home from './component/Home';
import Navber from './component/Navber';
import ToDo from './component/ToDo';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/toDo" element={<ToDo></ToDo>}></Route>
        <Route path="/calender" element={<Calendar></Calendar>} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
