cart =[]
var item = {
  name: "Mobile",
  description: "description",
  price: 45
};

var item2 = {
  name: "Computer",
  description: "description",
  price: 45
};
// console.log(cart[i].name);

cart.push(item);

var totalPrice = 0;
for (var i = 0; i < cart.length; i++) {
  totalPrice += cart[i].price;
 

}
console.log(totalPrice); 
