/**
 * return a number annotation added
 * @param a 
 * @param b 
 */
const add = (a: number, b: number): number => {
    return a + b;
};

/**
 * Here we are missing the return type but typescript not say the error
 * This is the main reason we are mentioning the return type
 * @param a 
 * @param b 
 */
const subtract = (a: number, b: number) => {
    a - b;
};

function divide(a: number, b:number): number{
    return a / b;
}

/**
 * Also work with annonymous function
 * @param a 
 * @param b 
 */
const multiply = function(a:number, b:number): number {
    return a * b;
}

const logger = (message: string): void => {
    console.log(message);
    //return null;
    return undefined;
}

/**
 * never reach the end of the function
 * @param message 
 */
const throwError = (message: string): never => {
    throw new Error(message)
}

const thowErrorNoMessage = (message: string): void => {
    if(!message) {
        throw new Error(message);
    }
}

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forcast: { date: Date, weather: string}) : void => {
    console.log(forcast.date);
    console.log(forcast.weather);
};

//Destructuring
const logWeather1 = ({ date,weather } : { date: Date, weather: string}) : void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);




