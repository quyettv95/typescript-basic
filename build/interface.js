"use strict";
const long = {
    name: "Long",
    age: 30
};
var Transportation;
(function (Transportation) {
    class Vehicle {
    }
    class Bike extends Vehicle {
        constructor(serialNumber) {
            super();
            this.serialNumber = serialNumber;
        }
        ;
        run() {
            return "Run by Bike";
        }
        stop() {
            return "Stop by Bike";
        }
        drive() {
            return "Drive by Bike";
        }
    }
    Transportation.Bike = Bike;
    class Car extends Vehicle {
        run() {
            return "Run by Car";
        }
        stop() {
            return "Stop by Car";
        }
        drive() {
            return "Drive by Car";
        }
    }
    Transportation.Car = Car;
})(Transportation || (Transportation = {}));
const bike = new Transportation.Bike("1554258");
const car = new Transportation.Car;
console.log(bike.serialNumber);
