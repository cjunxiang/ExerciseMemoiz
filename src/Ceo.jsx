import { useState, createContext } from "react";
import "./Company.css";
import { Sales } from "./Sales/SalesDepartment";
import { Operations } from "./Operations/OperationsDepartment";
import { Tech } from "./Tech/TechDepartment";

export const SalesContext = createContext();

const CEO = () => {
  const [totalSalesMade, setTotalSalesMade] = useState(0);

  return (
    <SalesContext.Provider value={{ totalSalesMade, setTotalSalesMade }}>
      <div className='ceo'>
        <h1>Hi, I am CEO</h1>
        <div className='surboninates'>
          <Sales />
          <Operations totalSalesMade={totalSalesMade} />
          <Tech />
        </div>
      </div>
    </SalesContext.Provider>
  );
};

export default CEO;
