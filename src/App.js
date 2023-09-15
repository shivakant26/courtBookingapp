import React from "react";
import "./App.css";
import BookingPage from "./pages/BookingPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SlotCard from "./component/SlotCard";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<BookingPage />} />
          <Route path="/slots" element={<SlotCard />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
