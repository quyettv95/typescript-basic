namespace InterfaceItLearn {
    export interface Person {
        name: string
        age: number
    }
}


const long: InterfaceItLearn.Person = {
    name: "Long",
    age: 30
}


namespace Transportation {
    export interface Runable {
        run(): string;
    }

    export interface Stopable {
        stop(): string;
    }

    abstract class Vehicle {
        public abstract drive():string;
    }

    export class Bike extends Vehicle implements Runable, Stopable {
        constructor (public serialNumber: string) {
            super();
        };
        run(): string {
            return "Run by Bike"
        }
        
        stop(): string {
            return "Stop by Bike"
        }

        public drive(): string {
            return "Drive by Bike"
        }
    }

    export class Car  extends Vehicle implements Runable, Stopable {
        run(): string {
            return "Run by Car"
        }
                
        stop(): string {
            return "Stop by Car"
        }

        public drive(): string {
            return "Drive by Car"
        }
    }
}

const bike: Transportation.Bike = new Transportation.Bike("1554258");
const car: Transportation.Car = new Transportation.Car;

console.log(bike.serialNumber);