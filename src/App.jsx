import Navbar from "./Navbar";
import Blog from "./blog/Blog";
// import Number from "./numbergame/Number";
import { Routes, Route } from "react-router-dom";
import Todolist from "./todolist/Todolist";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Blog />} />
          {/* <Route path="/number" element={<Number />} /> */}
          <Route path="/todolist" element={<Todolist />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
