import Footer from "./components/Footer";
import HomeView from "./views/HomeView";
import WelcomeView from "./views/WelcomeView";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomeView />} />
        <Route path="/tasks" element={<HomeView />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
