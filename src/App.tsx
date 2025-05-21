import { useState, useEffect } from 'react'
import { CardType } from './types/card'
import CardItem from './components/CardItem/CardItem'
import './style.scss'

function App() {

  // Что в руке
  const [hand, setHand] = useState<CardType[]>([])
  // Очки
  const [score, setScore] = useState<number>(0)

  // Функция подсчёта очков
  const calculateScore = (cards: CardType[]): number => {
    return cards.reduce((acc, card) => acc + card.value, 0);
  }

  // Функция создание сущности карты
  // Оборачиваем в (), чтобы сказать интерпретатору: "Я возвращаю объект, а не блок кода".
  const createCard = ():CardType => ({
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

  const removeCard = (id: number) => {
    setHand(prev => prev.filter(card => card.id !== id))
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
      <button onClick={addCard}>Add Card</button>
      <div className='card__list'>
        {/* Отображаем руку в реальном времени */}
        {hand.map((card) => (
          <CardItem
           key={card.id}
           card={card}
           handleDelete={removeCard} />
        ))}
      </div>
    </>
  )
}


export default App
