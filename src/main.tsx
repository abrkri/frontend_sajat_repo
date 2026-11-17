import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
//
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/theme.css";
//
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";
import PostReport from "./pages/PostReport";

const theme = window.matchMedia("(prefers-color-scheme: dark)");

const setTheme = (isDark: boolean) => {
  document.documentElement.setAttribute(
    "data-bs-theme",
    isDark ? "dark" : "light",
  );
};

setTheme(theme.matches);

theme.addEventListener("change", (e) => {
  setTheme(e.matches);
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post-report" element={<PostReport />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer theme="colored" closeOnClick={true} limit={3} />
  </StrictMode>,
);
