import styles from './CardView.module.scss'

interface CardViewProps {
    rank: string;
    suit: string;
}

const SUIT_SYMBOLS: Record<string, string> = {
    spades: '♠',
    hearts: '♥',
    diamonds: '♦',
    clubs: '♣',
}

const CardView: React.FC<CardViewProps> = ({rank, suit}) => {

    const suitColorClass = (suit === 'hearts' || suit === 'diamonds') ? styles.red : styles.black;

    return (
        <div className={`${styles.cardView} ${suitColorClass}`}>
            {rank} {SUIT_SYMBOLS[suit]}
        </div>
    );
}
 
export default CardView;