import { useState, useCallback } from "react";
import { TechManager } from "./Manager";

export const Tech = () => {
  const [numClassAttended, setNumClassAttended] = useState(0);

  const attendClassMemoized = useCallback(() => {
    setNumClassAttended((prevNum) => prevNum + 1);
  }, []);

  return (
    <div className='department'>
      <h2>Tech Department</h2>
      <p>Number of class attended: {numClassAttended} </p>
      <div className='surboninates'>
        <TechManager attendClass={attendClassMemoized} />
      </div>
    </div>
  );
};
