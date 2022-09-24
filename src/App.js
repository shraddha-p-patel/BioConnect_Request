import React from "react";
import Raiserequest from "./Redux/containers/Raiserequest";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Redux/containers/Form";
import AllRequest from "./Redux/containers/Allrequest";
import Viewdetails from "./Redux/containers/Viewdetails";
import "./index.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Raiserequest />}></Route>
        <Route exact path="form" element={<Form />}></Route>
        <Route exact path="allrequest" element={<AllRequest />}></Route>
        <Route exact path="viewdetails" element={<Viewdetails />}></Route>
      </Routes>
    </div>
  );
};

export default App;
