import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <ToastContainer />
      <div className="app">
        <Navbar />
        {/* nav component paste */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
      {/* footer */}
    </>
  );
}

export default App;
