import fruits from './foods';
import {choice, remove} from './helpers'

let randFruit = choice(fruits)

console.log(`I'd like one ${randFruit} please!`);
console.log(`Here you go : ${randFruit}`);
console.log("Delicious may I have another?");

remove(fruits,randFruit)

console.log(`Sorry we only have ${fruits} left!`);
