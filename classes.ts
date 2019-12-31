class Vehicle {
    
    // color: string = 'red';
    // constructor(color: string) {
    //     this.color = color;
    // }

    /**
     * shortcut for above
     * @param color 
     */
    constructor(public color: string) {}
    //constructor(protected color: string) {}

    protected drive(): void {
        console.log('Hey Hey');
    }

}

const vehicle = new Vehicle('orange');
// vehicle.drive();

class Van extends Vehicle {
    /**
     * here we are no need to put the color as public because it is already assign on parent
     * @param seats 
     * @param color 
     */
    constructor(public seats: number,  color: string){
        super(color);
    }

    private driveManual(): void{
        this.drive();
        console.log("broooom....")
    }

    startDrivingProcess() : void {
        this.driveManual();
    }
}

const van = new Van(4,'white');
// van.drive();
van.startDrivingProcess();

