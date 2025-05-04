export interface CardType {
    id: number;
    rank: string; // Туз ('A'), Король ('K'), etc.
    suit: string; // Черви ('Hearts), Пики ('Spades'), etc.
    value: number; // A - 11, K - 10, 2 - 2, etc.
}