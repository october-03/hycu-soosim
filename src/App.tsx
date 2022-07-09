import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Detail from "./screens/Detail";
import Main from "./screens/Main";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
