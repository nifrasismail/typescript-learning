import faker from 'faker';
import {Mappable} from './CustomMap';

export class Company implements Mappable{
    companyName: string;
    catchPhase: string;
    location: {
        lat: number,
        lng: number
    };
    color:string;

    constructor(){
        this.companyName = faker.company.companyName();
        this.catchPhase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    markerContent(): string {
        return `Company Name: ${this.companyName}`; 
    }
}