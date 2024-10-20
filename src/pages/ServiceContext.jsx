import React, { createContext, useState } from 'react';

const ServicesContext = createContext(); // Create the context

function ServicesProvider({ children }) {
  const [selectedServices, setSelectedServices] = useState([]);

  return (
    <ServicesContext.Provider value={{ selectedServices, setSelectedServices }}>
      {children}
    </ServicesContext.Provider>
  );
}

export { ServicesContext, ServicesProvider }; // Export both the context and provider
