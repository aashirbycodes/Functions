
/*Functions*/

function sayGreet() {
    alert("Welcome to my website");
}
sayGreet();


function sum() {
    console.log(5 + 10);
}
sum();


function calculateBMI(w, h) {
    const bmi = w / (h * h);
    console.log(bmi);
    return bmi;
}

calculateBMI(70, 1.75);


function calculateRectangle(w, l) {
    const rectangle = l * w;
    console.log(rectangle);
    return rectangle;
}
calculateRectangle(6, 9);



function calculateSimpleinterest(p, t, r) {
    const SimpleIntrest = (p * t * r) / 100;
    console.log(SimpleIntrest);
    return SimpleIntrest;
}
let si = calculateSimpleinterest(2000, 50, 80);

if (si > 50) {
    console.log("Too much Interest");
} else {
    console.log("Intreset is fine");
}


function dateOfBirth(current, birth) {
    const age = current - birth;
    console.log(age);
    return age;
}

dateOfBirth(26, 4);















