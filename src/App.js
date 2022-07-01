import './App.css';
import { Routes, Route } from "react-router-dom";
import Calendar from './component/Calendar';
import Footer from './component/Footer';
import Home from './component/Home';
import Navber from './component/Navber';
import ToDo from './component/ToDo';
import Update from './component/Update';
import NotFound from './component/NotFound';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/toDo" element={<ToDo></ToDo>}></Route>
        <Route path="/calender" element={<Calendar></Calendar>} />
        <Route path="/update/:updateId" element={<Update></Update>} />

        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
