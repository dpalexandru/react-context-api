import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import Prodotti from "./pages/Prodotti"
import Layout from "./layouts/Layout"
import ProductPage from "./pages/ProductPage"
import { BudgetProvider } from "./context/BudgetContext"


function App() {

  return (
    <BudgetProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          {/* Raggruppo qui i prodotti */}
          <Route path="/prodotti">
            <Route index element={<Prodotti />} />
            <Route path=":id" element={<ProductPage />} />
          </Route>
        </Route>
      </Routes>
    </BudgetProvider>
  )
}

export default App
