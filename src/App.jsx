import React from "react"
import { Route, Routes } from "react-router-dom"
import Messages from "./pages/Messages"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import Verification from "./pages/auth/Verification"

function App() {
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
