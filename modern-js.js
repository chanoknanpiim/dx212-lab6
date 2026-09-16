
function greet(name, faculty) {
    return "สวัสดี" + "จากคณะ" + faculty + "!";
}


const greet_modern = (name, faculty) => `สวัสดี ${name} จากคณะ${faculty}!`;

console.log(greet("Putter", " IT "));
console.log(greet_modern("Putter", " IT "));