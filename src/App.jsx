import React from "react"
import { Route, Routes } from "react-router-dom"
import Messages from "./pages/Messages"
function App() {
  return (
    <Routes>
      <Route index={true} element={<Messages />} />
    </Routes>
  )
}

export default App
