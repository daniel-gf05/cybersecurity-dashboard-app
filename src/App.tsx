import { BrowserRouter, Route, Routes } from "react-router";
import Home from './pages/Home.tsx'

import './App.css'
import Layout from "./layout/Layout.tsx";
import Scanner from "./pages/Scanner.tsx";
import Logs from "./pages/Logs.tsx";

function App() {

  return <>
    <BrowserRouter>
      <Routes >
        <Route element={<Layout title={"Home"} />} >
          <Route index element={<Home />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/logs" element={<Logs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App