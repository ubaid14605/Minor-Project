import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Login from "./components/page1/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/page1/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/calculator" element={<Page2 />} />
        <Route path="/resources" element={<Page3 />} />
        <Route path="/home" element={<Page1 />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
export default App;
