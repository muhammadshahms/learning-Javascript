const showRoom = function() {
    const car = {
        carName: "BMW",
        model: "X5",
        engineType: "v8",
        color: "black",
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