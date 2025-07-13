import { useState, useMemo } from 'react';
import ResultDisplay from './ResultDisplay';

const Calculator = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [counter, setCounter] = useState(0);

  const sum = useMemo(() => {
    return Number(a) + Number(b);
  }, [a, b]);

  const handleReset = () => {
    setA(0);
    setB(0);
    setCounter(0);
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Калькулятор</h1>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="inputA" className="form-label">
            Число A
          </label>
          <input type="number" className="form-control" id="inputA" value={a} onChange={(e) => setA(e.target.value)} />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputB" className="form-label">
            Число B
          </label>
          <input type="number" className="form-control" id="inputB" value={b} onChange={(e) => setB(e.target.value)} />
        </div>
      </div>

      <div className="m-3 text-center">
        <div className="mb-2">
          <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>
            Збільшити лічильник ({counter})
          </button>
        </div>

        <div>
          <button className="btn btn-outline-danger" onClick={handleReset}>
            Скинути все
          </button>
        </div>
      </div>

      <ResultDisplay result={sum} />
    </div>
  );
};

export default Calculator;
