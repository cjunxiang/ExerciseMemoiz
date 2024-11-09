export const OperationExecutive = () => {
  return (
    <div className='executive'>
      <h5>Operation Executive</h5>
      <button onClick={() => updateProjectCount(projectCount + 1)}>
        Executive has Finished Project!
      </button>
    </div>
  );
};
