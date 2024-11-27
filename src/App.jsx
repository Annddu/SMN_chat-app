import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Messages from "./pages/Messages"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import Verification from "./pages/auth/Verification"

function App() {

  useEffect(() => {
    const colorMode = JSON.parse(window.localStorage.getItem('color-theme'));

    const className = 'dark';
    const bodyClass = window.document.body.classList;

    colorMode === 'dark' ? bodyClass.add(className) : bodyClass.remove(className);

  }, []);

  return (
    <Routes>
      <Route index={true} element={<Messages />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signup />}/>
      <Route path="/auth/verification" element={<Verification />}/>
    </Routes>
  )
}

export default App
