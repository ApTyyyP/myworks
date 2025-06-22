function PlayerPanel({ player, moves, target, isActive, isLoser   }) {
  const guessed = moves.filter((n) => target.includes(n));

  let borderClass = '';
  if (isLoser) {
    borderClass = 'border-danger';
  } else if (isActive) {
    borderClass = 'border-primary';
  }

  return (
    <div className={`card p-3 ${borderClass}`}>
      <h4>Гравець {player}</h4>
      <p>Увів: {moves.join(', ') || 'Ще не вводив'}</p>
      <p>
        Вгадав:{' '}
        <span className="text-success fw-bold">
          {guessed.join(', ') || '—'}
        </span>
      </p>
    </div>
  );
}

export default PlayerPanel;
