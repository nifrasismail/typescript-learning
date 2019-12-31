const carMakers: string[] = ['ford','toyota', 'chevy'];

//avoid any type
const vanMakers: string[] = [];

const dates = [new Date(), new Date()];

//Don't add anootation if we won't to
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camero']
];

const vanByMake: string[][] = [];

//Help with inference when extracting values
const cars = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible value
//carMakers.push(100);

// Help with map
carMakers.map((car:string): string => {
    return car.toLowerCase();
});

// Flexible Types
const importantDates : (Date|string)[] = [new Date(), '2030-10-10'];
importantDates.push('2019-10-23');
importantDates.push(new Date());
//importantDates.push(19);





