function GameResult({ currentPlayer, onRestart }) {
  return (
    <div className="text-center mt-4">
      <div className="alert alert-danger">
        🛑 Гру завершено!{' '}
        <span className="text-primary fw-bold">Гравець {currentPlayer}</span>{' '}
        програв! Вгадав останню цифру.
      </div>
      <button className="btn btn-primary my-2" onClick={onRestart}>
        🔁 Нова гра
      </button>
    </div>
  );
}

export default GameResult;
