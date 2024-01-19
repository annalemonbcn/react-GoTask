import WelcomeView from "./views/WelcomeView";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomeView />} />
    </Routes>
  );
}

export default App;
