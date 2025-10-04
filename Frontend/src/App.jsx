import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/calculator" element={<Page2 />} />
        <Route path="/resources" element={<Page3 />} />
      </Routes>
    </>
  );
}
export default App;
