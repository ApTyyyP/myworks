import React from 'react';

const ResultDisplay = ({ result }) => {
  return (
    <div className="my-4">
      Сума A + B: <span className="alert alert-success">{result}</span>
    </div>
  );
};

export default React.memo(ResultDisplay);
