import { BrowserRouter, Route, Routes } from "react-router";
import Home from './pages/Home.tsx'

import './App.css'
import Layout from "./layout/Layout.tsx";

function App() {

  return <>
    <BrowserRouter>
      <Routes >
        <Route element={<Layout title={"Home"} />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App