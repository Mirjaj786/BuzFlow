import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <ToastContainer />
      <div className="app">
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
