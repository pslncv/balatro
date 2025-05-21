import React from 'react';
import { CardType } from '../../types/card';
import CardView from '../CardView/CardView';
import styles from './CardItem.module.scss'


interface CardItemProps {
    card: CardType;
    handleDelete: (id: number) => void;
}
 
const CardItem: React.FC<CardItemProps> = ({card, handleDelete}) => {
    return (
        <div className={styles.card} onClick={() => handleDelete(card.id)}>
            <CardView rank={card.rank} suit={card.suit} />
        </div>
    );
}
 
export default CardItem;