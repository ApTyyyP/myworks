import { useEffect, useState } from 'react';
import NumberDisplay from './NumberDisplay';
import NumberButtons from './NumberButtons';
import PlayerPanel from './PlayerPanel';
import GameResult from './GameResult';

function GuessNumber() {
  const [mysteriousNumber, setMysteriousNumber] = useState('');
  const [guessedNumbers, setGuessedNumbers] = useState([]);
  const [allEnteredNumbers, setAllEnteredNumbers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playerMove, setPlayerMove] = useState({ 1: [], 2: [] });
  const [isGameOver, setIsGameOver] = useState(false);

  // Генерація випадкового трицифрового числа без повторів
  const generateNumbers = () => {
    let result = '';

    while (result.length < 3) {
      const number = Math.floor(Math.random() * 10).toString();
      if (!result.includes(number)) result += number;
    }

    return result;
  };

  // Виконуємо генерацію один раз при старті гри
  useEffect(() => {
    setMysteriousNumber(generateNumbers());
  }, []);

  // Хід гравця (викликається при натисканні на цифру)
  const handleMove = (number) => {
    if (isGameOver || allEnteredNumbers.includes(number)) return;

    const isCorrect = mysteriousNumber.includes(number);
    const newGuessed = isCorrect ? [...guessedNumbers, number] : guessedNumbers;

    // Оновлюємо список ходів поточного гравця
    const updatedMoves = { ...playerMove };
    updatedMoves[currentPlayer].push(number);

    setAllEnteredNumbers([...allEnteredNumbers, number]);
    setGuessedNumbers(newGuessed);
    setPlayerMove(updatedMoves);

    // Якщо всі 3 цифри вгадані — гра завершується
    if (newGuessed.length === 3) {
      setIsGameOver(true);
    } else {
      // Переходимо до наступного гравця
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
  };

  // Нова гра — скидання всіх даних
  const handleRestart = () => {
    setMysteriousNumber(generateNumbers());
    setGuessedNumbers([]);
    setAllEnteredNumbers([]);
    setCurrentPlayer(1);
    setPlayerMove({ 1: [], 2: [] });
    setIsGameOver(false);
  };

  return (
    <div className="mt-5">
      <h1 className="text-center mb-4">🎯 Гра: Вгадай число</h1>

      {/* Результат гри і кнопка "Нова гра" */}
      {isGameOver && (
        <GameResult currentPlayer={currentPlayer} onRestart={handleRestart} />
      )}

      {/* Вивід числа */}
      <NumberDisplay number={mysteriousNumber} guessed={guessedNumbers} />

      {/* Поточний гравець */}
      <h2 className="text-center text-primary">Гравець: {currentPlayer}</h2>

      {/* Кнопки з цифрами */}
      <NumberButtons
        onClick={handleMove}
        disabledNumbers={allEnteredNumbers}
        guessedNumbers={guessedNumbers}
        targetNumber={mysteriousNumber}
        isGameOver={isGameOver}
      />

      {/* Панель гравців з їхніми ходами */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <PlayerPanel
            player={1}
            moves={playerMove[1]}
            target={mysteriousNumber}
            isActive={!isGameOver && currentPlayer === 1}
            isLoser={isGameOver && currentPlayer === 1}
          />
        </div>

        <div className="col-md-6 mb-3">
          <PlayerPanel
            player={2}
            moves={playerMove[2]}
            target={mysteriousNumber}
            isActive={!isGameOver && currentPlayer === 2}
            isLoser={isGameOver && currentPlayer === 2}
          />
        </div>
      </div>
    </div>
  );
}

export default GuessNumber;
