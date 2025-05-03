import { useState, useEffect } from 'react'
import { Card } from './types/card'
import './style.scss'

function App() {

  // Что в руке
  const [hand, setHand] = useState<Card[]>([])
  // Очки
  const [score, setScore] = useState<number>(0)

  // Функция подсчёта очков
  const calculateScore = (cards: Card[]): number => {
    return cards.reduce((acc, card) => acc + card.value, 0);
  }

  // Функция создание сущности карты
  // Оборачиваем в (), чтобы сказать интерпретатору: "Я возвращаю объект, а не блок кода".
  const createCard = ():Card => ({
    id: Date.now(),
    rank: 'A',
    suit: 'spades',
    value: 11,
  })

  // Добавление карты в руку
  const addCard = () => {
    if (hand.length < 5) {
      // Добавляем её в состояние руки
      setHand(prev => [...prev, createCard()])
    } else alert('В руке 5 карт')
  }

  // Как только рука изменилась, сразу считаем очки
  useEffect(() => {
    const newScore = calculateScore(hand)
    // И устанавливаем в состояние очков
    setScore(newScore)
  }, [hand]);

  return (
    <>
      <h1>Score: {score}</h1>
      <button onClick={addCard}>add card</button>
      <div className='card__list'>
        {/* Отображаем руку в реальном времени */}
        {hand.map((card) => (
          <div key={card.id} className="card">
            {card.rank} of {card.suit}
          </div>
        ))}
      </div>
    </>
  )
}


export default App
