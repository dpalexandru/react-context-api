// src/context/FavoriteContext.jsx
import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  // Array di ID preferiti
  const [favorites, setFavorites] = useState([]);

  // Booleano: il cuore di questo prodotto è rosso?
  const isFavorite = (id) => favorites.includes(id);

  // Aggiunge/rimuove l'ID dai preferiti
  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(fid => fid !== id)
        : [...prev, id]
    );
  };

  const value = { favorites, isFavorite, toggleFavorite };

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
