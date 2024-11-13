import { createContext, useState } from "react";

const TotalQuantityContext = createContext();

function TotalQuantity({ children }) {
  const [updateOrder, setUpdateOrder] = useState(0);

  return (
    <TotalQuantityContext.Provider value={{ updateOrder, setUpdateOrder }}>
      {children}
    </TotalQuantityContext.Provider>
  );
}

export { TotalQuantity };
export default TotalQuantityContext;
