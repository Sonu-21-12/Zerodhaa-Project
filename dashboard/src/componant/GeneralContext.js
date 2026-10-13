
import React, { createContext, useMemo, useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

export const GeneralContext = createContext(null);

export function GeneralContextProvider({ children }) {
  const [selectedStock, setSelectedStock] = useState(null);

  const value = useMemo(
    () => ({
      openBuyWindow: (stockName, mode = "BUY") => {
        setSelectedStock({ stockName, mode });
      },
      closeBuyWindow: () => {
        setSelectedStock(null);
      },
    }),
    []
  );

  return (
    <GeneralContext.Provider value={value}>
      {children}

      {selectedStock && (
        <div className="modal-backdrop">
          <BuyActionWindow
            uid={selectedStock.stockName}
            mode={selectedStock.mode}
          />
        </div>
      )}
    </GeneralContext.Provider>
  );
}