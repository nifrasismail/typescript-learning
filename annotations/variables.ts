/**
 * Type Annotation and Type inference
 * Type annotation we assign and type inference by typescript
 * The number is the type annotation 
 * 

*/

const apples:number = 5;
let isExist: boolean = true;
let speed: string = 'fast';
let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//Array Type Annotation
let colors: string[] = ['red','green','blue'];
let tuths: boolean[] = [true,true,false];

//Classes type annotation
class Car {

}
let car: Car = new  Car();

//Object literals
let point: { x:number; y:number } = {
    x: 10,
    y: 20
};

/**
 * before the = is the annotation 
 * what is the argument and 
 * what is the return type
 * @param i 
 */
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

/**
 * Type Inference - TS guess the annotation for us - when to use always
 * If we do declaration and initialisation on a single line the typescript inference the type annotation
 */

 let oranges = 7;

 //Types not working here
 let grapes;
 grapes = 8;

 // When to use annotation
 // 1) Function that returns the 'any' type
 const json = '{ "x" : 10, "y" : 20 }';
 const coordinates = JSON.parse(json);
 console.log(coordinates); // { "x" : 10, "y" : 20 }

 //Type script have no idea about the which value to be return
 //fix 
 const coordinatess : { x: number; y:number } = JSON.parse(json);

 // 2) When we decare a variable on one line and declare it later
 let words = ['red','green','blue'];
 //let foundWord;
let foundWord: boolean;

 for( let i=0; i< words.length; i++){
    if(words[i] === 'green'){
        foundWord = true;
    }
 }

 // 3) Varaible whose type cannot be infered correctly
 let numbers = [-10,-1,12];
 let numberAboveZero: boolean | number = false;

 for ( let i=0; i< numbers.length; i++){
     numberAboveZero = numbers[i];
 }













