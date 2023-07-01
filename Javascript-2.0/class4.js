/**
 * Function to display car details and quantity
 */
const showRoom = () => {
    // Define car object with details
    const car = {
        carName: "BMW",
        model: "X5",
        engineType: "v8",
        color: "black",
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
