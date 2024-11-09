import React from "react";
import { OperationsManager } from "./Manager";

export const Operations = React.memo(({ totalSalesMade }) => {
  return (
    <div className='department'>
      <h2>Operations Department</h2>

      <div className='surboninates'>
        <OperationsManager />
      </div>
    </div>
  );
});
