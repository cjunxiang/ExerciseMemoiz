import { OperationExecutive } from "./Executive";

export const OperationsManager = () => {
  return (
    <div className='manager'>
      <h3>Operations Manager</h3>

      <OperationExecutive />
      <OperationExecutive />
      <OperationExecutive />
    </div>
  );
};
