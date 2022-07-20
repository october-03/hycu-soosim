import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Detail from "./screens/Detail";
import Main from "./screens/Main";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
