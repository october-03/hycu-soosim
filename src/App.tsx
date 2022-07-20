import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Main from "./screens/Main";

export default function App() {
  const location = useLocation();
  return (
    // <TransitionGroup>
    //   <CSSTransition timeout={300} classNames={"fade"} key={location.pathname}>
    <Routes location={location}>
      <Route path="/" element={<Main />} />
      {/* <Route path="/detail" element={<Detail />} /> */}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
    //   </CSSTransition>
    // </TransitionGroup>
  );
}
