let time = prompt("enter your time")

if(time>=6 && time<12){
    console.log("good morning")
}
else if(time>12 & time<16){
    console.log("good afternoon");
}
else if(time>18 & time<20){
console.log("good evening");
}
else if(time>20 & time<24){
    console.log("good night");
}
else{
    console.log("invalid input");
}