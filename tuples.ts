const drink = {
    color: 'brown',
    carbonate: true,
    sugar: 40
};


//Looks Like and Array but the order is not going to change
const pepsi: [string,boolean,number] = ['brown',true,40];
//pepsi[0] = 40;


//type alias - we create a brand new type
type Drink = [string,boolean,number];

const cola: Drink = [ 'dark-brown', true, 0];
const sprite: Drink = ['clear', true, 20];



