//2-vazifa
var inputWeight = +prompt ("Og'irligingizni kiriting (masalan:80)");
var inputHeight = +prompt ("Bo'yingizni uzunligini kiriting (masalan:1.8)");
var BMI = parseInt (inputWeight/(inputHeight * inputHeight)/10000);
console.log(BMI);

if (BMI<14.99) {
    console.log("Siz judayam ozg'in ekansiz");
} else if (BMI>=14.99 && BMI<=24.99) {
    console.log("Sizning og'irligingiz normada");
} else {
    console.log("Siz judayam semiribsiz! tezda ozish yo'llarini toping!");
}