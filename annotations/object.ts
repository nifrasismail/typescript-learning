const profile = {
    name: "alex",
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void{
        this.age = age
    }
};

/**
 * Destructring as put the format on the types
 */
const { age }: { age: number } = profile;

const { coords : { lat, lng }} : { coords: { lat: number, lng: number }} = profile;
