const physics = parseFloat(prompt("Enter your physics marks"))
const chemistry = parseFloat(prompt("Enter your chemistry marks"))
const maths = parseFloat(prompt("Enter your maths marks"))
const science = parseFloat(prompt("Enter your science marks"))

const obtain_marks = physics + chemistry + maths + science
const total_marks = 400
const percentage = (obtain_marks / total_marks) * 100

if(obtain_marks > total_marks || percentage < 0 || percentage > 100 || physics < 0 || physics > 100 || chemistry < 0 || chemistry > 100 || maths < 0 || maths > 100 || science < 0 || science > 100){
    console.log("invalid input")
}
else if(percentage >= 90){
    console.log(percentage + "Grade A")
}else if(percentage >= 80){
    console.log( percentage + "Grade B")
}else if(percentage >= 70){
    console.log(percentage + "Grade C")
}else if(percentage >= 60){
    console.log(percentage + "Grade D")
}else{
    console.log(percentage + "Grade F")
}