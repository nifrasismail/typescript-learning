import faker from 'faker';
import { Mappable } from './CustomMap';

// not on the TS
// export default 'red';
// import color from './Users'

export class User implements Mappable {
    name: string;
    location: {
        lat: number,
        lng: number
    };
    color: string;

    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `User Name: ${this.name}`; 
    }
}