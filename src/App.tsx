import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Index />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}