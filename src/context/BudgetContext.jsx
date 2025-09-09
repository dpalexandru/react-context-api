import { createContext, useState } from "react";

// creo context
const BudgetContext = createContext();

const BudgetProvider = ({ children }) => {
  const [budgetMode, setBudgetMode] = useState(false);

  // funzione  per invertire lo stato
  const toggleBudgetMode = () => {
    setBudgetMode(prev => !prev);
  };

  const value = {
    budgetMode,
    toggleBudgetMode,
  };

  return (
    <BudgetContext.Provider value={value}>
      {children}
    </BudgetContext.Provider>
  );
};

// esporto provider e context 
export { BudgetProvider, BudgetContext };
