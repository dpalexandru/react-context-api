import { createContext, useState } from "react";

// creo context
const BudgetContext = createContext();

const BudgetProvider = ({ children }) => {
  const [budgetMode, setBudgetMode] = useState(false);
  const [budgetLimit, setBudgetLimit] = useState(30);


  // funzione  per invertire lo stato
  const toggleBudgetMode = () => {
    setBudgetMode(prev => !prev);
  };

  const value = {
    budgetMode,
    toggleBudgetMode,
    budgetLimit,
    setBudgetLimit,
  };

  return (
    <BudgetContext.Provider value={value}>
      {children}
    </BudgetContext.Provider>
  );
};

// esporto provider e context 
export { BudgetProvider, BudgetContext };
