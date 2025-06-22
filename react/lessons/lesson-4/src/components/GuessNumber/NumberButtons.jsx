/* Кнопки з цифрами 0–9
Вимикаються після натискання або завершення гри */

function NumberButtons({ onClick, disabledNumbers, guessedNumbers, targetNumber, isGameOver }) {
  const numbers = Array.from({ length: 10 }, (_, i) => i.toString()); // створюємо масив ['0', '1', ..., '9']

  // Функція для визначення кольору кнопки
  const getButtonClass = (n) => {
    if (!disabledNumbers.includes(n)) return 'btn-outline-dark';
    if (guessedNumbers.includes(n)) return 'btn-success'; // правильна
    if (!targetNumber.includes(n)) return 'btn-danger'; // неправильна

    return 'btn-secondary';
  };

  return (
    <div className="d-flex flex-wrap justify-content-center mb-4">
      {numbers.map((n) => (
        <button
          key={n}
          onClick={() => onClick(n)} // хід гравця
          disabled={disabledNumbers.includes(n) || isGameOver} // блокуємо вже натиснуті або після завершення гри
          className={`btn ${getButtonClass(n)} m-1 px-3 py-2`}
        >
          {n}
        </button>
      ))}
    </div>
  );
}

export default NumberButtons;
