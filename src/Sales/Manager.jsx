import { SalesExecutive } from "./Executive";

export const SalesManager = () => {
  return (
    <div className='manager'>
      <h3>Sales Manager</h3>

      <SalesExecutive />
      <SalesExecutive />
    </div>
  );
};
