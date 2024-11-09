import { memo } from "react";
import { TechExecutive } from "./Executive";

export const TechManager = memo(({ attendClass }) => {
  console.log("TechManager is rendered");

  return (
    <div className='manager'>
      <h3>Techs Manager</h3>
      <button onClick={attendClass}>Attend Class</button>

      <TechExecutive />
      <TechExecutive />
      <TechExecutive />
    </div>
  );
});
