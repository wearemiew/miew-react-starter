import { Route, BrowserRouter, Routes } from "react-router";
import "./App.css";
import { HomePage, SamplePage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sample" element={<SamplePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
