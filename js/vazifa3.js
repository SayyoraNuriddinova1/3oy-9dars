// 3) random number guesser with 5chances 


function rand () {
    son = prompt (" 10gacha son kiriting, men o'ylagan son bilan bir xil ekanmi?")
    return son == Math.floor(Math.random() * 10+1)
}

for (let i = 0; i <= 5; i++) {
    if (rand()) {
        alert("Barakalla, siz topdingiz!");
        break;
    }else  {
        if (i===5) {
            alert("Afsuski sizning imkoniyatlaringiz tugadi")
            break; 
        }  else {
            alert ("afsuski topolmadingiz, sizda yana " +(5-i)  + " ta imokoniyat qoldi. ") 
        }
    }
}

