import React from 'react';
import { CardType } from '../types/card';


interface CardItemProps {
    card: CardType;
    handleDelete: (id: number) => void;
}
 
const CardItem: React.FC<CardItemProps> = ({card, handleDelete}) => {
    return (
        <div className="card" onClick={() => handleDelete(card.id)}>
            {card.rank} of {card.suit}
        </div>
    );
}
 
export default CardItem;