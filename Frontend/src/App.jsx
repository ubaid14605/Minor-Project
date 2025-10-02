import Page1 from "./components/Page1";
import Page2 from "./Page2";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 />} />

        <Route path="/calculator" element={<Page2 />} />
      </Routes>
    </>
  );
}
export default App;
