export const TechExecutive = ({ projectCount, updateProjectCount }) => {
  return (
    <div className='executive'>
      <h5>Tech Executive</h5>
      <button onClick={() => updateProjectCount(projectCount + 1)}>
        Executive has Finished Project!
      </button>
    </div>
  );
};
