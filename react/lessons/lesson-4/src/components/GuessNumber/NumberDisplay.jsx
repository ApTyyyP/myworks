function NumberDisplay({ number, guessed }) {
  return (
    <>
      <h2 className="text-center">Число:</h2>
      <div className="text-center mb-4">
        <div className="display-5 d-inline-block" style={{ letterSpacing: '10px' }}>
          {number
            .split('')
            .map((d) => (guessed.includes(d) ? d : '_'))
            .join(' ')}
        </div>
      </div>
    </>
  );
}

export default NumberDisplay;
