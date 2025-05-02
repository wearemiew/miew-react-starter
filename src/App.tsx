import { Route, BrowserRouter, Routes } from "react-router";
import "./App.css";
import { HomePage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
