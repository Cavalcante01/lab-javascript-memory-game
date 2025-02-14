class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  
}

  shuffleCards() {
    // ... write your code here
    if (this.cards === undefined) return undefined;
    this.cards = this.cards.sort(function () {
      return Math.random() - 0.5;
    });
  
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else{
      return false;
    }
    
  }

  checkIfFinished() {
    // ... write your code here
    if(this.pairsGuessed * 2 === this.cards.length){
      return true;
      }
      return false;
       
      }
   }
  

