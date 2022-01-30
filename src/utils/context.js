import React, { createContext, useState } from 'react';

export const MenuVerticalContext = createContext();

export const MenuVerticalProvider = ({ children }) => {
  const [menuVertical, setMenuVertical] = useState(false);

  const handleMenuVertical = () => {
    setMenuVertical(!menuVertical);
  };

  return (
    <MenuVerticalContext.Provider
      value={{
        menuVertical,
        handleMenuVertical,
      }}
    >
      {children}
    </MenuVerticalContext.Provider>
  );
};