import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import Prodotti from "./pages/Prodotti"
import Layout from "./layouts/Layout"
import ProductPage from "./pages/ProductPage"
import { BudgetProvider } from "./context/BudgetContext"
import { FavoritesProvider } from "./context/FavoritesContext"

function App() {

  return (
    <BudgetProvider>
      <FavoritesProvider>

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

      </FavoritesProvider>
    </BudgetProvider>
  )
}

export default App
