import { useContext } from "react";
import { SalesContext } from "../Ceo";

export const SalesExecutive = () => {
  const { totalSalesMade, setTotalSalesMade } = useContext(SalesContext);

  return (
    <div className="executive">
      <h5>Sales Exec utive</h5>
      <button onClick={() => setTotalSalesMade(totalSalesMade + 1)}>
        Executive has made a sales
      </button>
    </div>
  );
};
