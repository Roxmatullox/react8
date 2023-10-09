import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import AdminPanel from "./components/AdminPanel"
import Home from "./pages/Home"
import Video from "./pages/Video"
import { useState } from "react"


function App() {
  const [search , setSearch] = useState("")
  return (
    <BrowserRouter >
        <Header setSearch={setSearch} />
        <AdminPanel/>
      <Routes >
        <Route path="" element={<Home search={search} />} />
        <Route path="home/:video" element={<Video/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
