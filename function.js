/* ----------------- declare a function ---------------- */

function turnOn() {
    firstWork = "1- Get up ,";
    secWork = "2- Go to switch board ,";
    thirdWork = "3- Turn Switch on ,";
    lastWork = "4- Get back to your position"
    console.log(firstWork,secWork,thirdWork,lastWork);
}

turnOn();


/*-------------------- return --------------------*/

let x = myFunction(4, 3);  

function myFunction(a, b) {
  return a * b;             
}

console.log(x);