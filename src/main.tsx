import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TasksProvider from "./api/context/TasksProvider.tsx";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <TasksProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Toaster position="top-right" richColors />
        <App />
      </LocalizationProvider>
    </TasksProvider>
  </BrowserRouter>
);
