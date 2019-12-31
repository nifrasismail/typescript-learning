interface Reportable {
    summary() : string
}

// interface Vehicle {
//     name: string,
//     year: number,
//     broken: boolean,
//     summary() : string
// };

const myDrink = {
    color: 'brown',
    carbonate: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`
    }

}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary() : string {
        return `Name: ${this.name}`;
    }
};

// This is super long tyoe 
// const printVehicle = (vehicle: Vehicle) : void =>  {
//     console.log(`Name: ${vehicle.name}`);
//     console.log(`Year: ${vehicle.year}`);
//     console.log(`Broken? ${vehicle.broken}`);
//     console.log(vehicle.summary);
// };

const printSummary = (item: Reportable) => {
    console.log(item.summary());
}

printSummary(oldCivic);
printSummary(myDrink);