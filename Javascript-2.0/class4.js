<<<<<<< HEAD
const showRoom = function() {
=======
/**
 * Function to display car details and quantity
 */
const showRoom = () => {
    // Define car object with details
>>>>>>> 9d4cea7f144a6136ed4e6e0fa89828bd49eeed46
    const car = {
        carName: "BMW",
        model: "X5",
        engineType: "v8",
        color: "black",
<<<<<<< HEAD
        getobj: function () {
            return `Your car name is ${this.carName},
your car model is ${this.model},
your car engine type is ${this.engineType},
your car color is ${this.color}.
`   }
    }
    console.log(car.getobj());
}

showRoom()
=======
        quantity: function() {
            // Store car name in variable 'a'
            const a = this.carName;
            return a;
        }
    }

    // Display car quantity and return car name
    console.log(car.quantity());
}
showRoom();
>>>>>>> 9d4cea7f144a6136ed4e6e0fa89828bd49eeed46
