import { Color, Mark } from './enums';
import { Deck, Card, Joker } from './types';

export function createDeck(): Deck {
  const deck: Deck = [];
  const marks = Object.values(Mark);
  const colors = Object.values(Color);
  for (const m of marks) {
    for (const c of colors) {
      deck.push({
        color: c,
        mark: m,
        geString() {
          return this.color + this.mark;
        },
      } as Card);
    }
  }
  let joker: Joker = {
    type: 'small',
    geString() {
      return 'jo';
    },
  };
  deck.push(joker);
  joker = {
    type: 'big',
    geString() {
      return 'JO';
    },
  };
  deck.push(joker);
  return deck;
}

export function printDeck(deck: Deck) {
  let result = '\n';
  deck.forEach((card, i) => {
    let str = card.geString();
    result += str + '\t';
    if ((i + 1) % 4 === 0) {
      result += '\n';
    }
  });
  console.log(result);
}
