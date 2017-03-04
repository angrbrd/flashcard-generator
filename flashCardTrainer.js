// Import the flash cards constructor implementations
var flashCards = require('./flashCards.js');

/* 
*
* Basic Flashcard Tests
*
*/

var firstPresident = new flashCards.BasicCard('Who was the first president of the United States?', 'George Washington');
console.log(firstPresident.front);
console.log(firstPresident.back); 
console.log('-------------------------------------');

var nowPresident = new flashCards.BasicCard('Who is the current president of the United States?', 'Donald Trump');
console.log(nowPresident.front);
console.log(nowPresident.back);
console.log('-------------------------------------');

var oscarWinner = new flashCards.BasicCard('What movie won the Oscar for best picture at the 2016 Academy Awards?', 'Moonlight');
console.log(oscarWinner.front);
console.log(oscarWinner.back);
console.log('-------------------------------------');

var nextOlympics = new flashCards.BasicCard('What city will host the next winter Olympic games in 2018?', 'PyeongChang, South Korea');
console.log(nextOlympics.front);
console.log(nextOlympics.back);
console.log('-------------------------------------');

/* 
*
* Cloze-Deleted Flashcard Tests
*
*/

firstPresident = new flashCards.ClozeCard('George Washington was the first president of the United States.', 'George Washington');
console.log(firstPresident.full);
console.log(firstPresident.cloze); 
console.log(firstPresident.partial); 
console.log('-------------------------------------');

nowPresident = new flashCards.ClozeCard('Donald Trump is the current president of the United States.', 'Donald Trump');
console.log(nowPresident.full);
console.log(nowPresident.cloze); 
console.log(nowPresident.partial); 
console.log('-------------------------------------');

oscarWinner = new flashCards.ClozeCard('Moonlight won the Oscar for best picture at the 2016 Academy Awards.', 'Moonlight');
console.log(oscarWinner.full);
console.log(oscarWinner.cloze); 
console.log(oscarWinner.partial); 
console.log('-------------------------------------');

var nextOlympics = new flashCards.ClozeCard('PyeongChang, South Korea will host the next winter Olympic games in 2018', 'PyeongChang');
console.log(nextOlympics.full);
console.log(nextOlympics.cloze); 
console.log(nextOlympics.partial); 
console.log('-------------------------------------');

var failedCard = new flashCards.ClozeCard('This text will not include the clozed-deletion...', 'TEST');
console.log(failedCard.full);
console.log(failedCard.cloze); 
console.log(failedCard.partial); 
console.log('-------------------------------------');

