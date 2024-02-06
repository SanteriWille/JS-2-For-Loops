// oppgave 1
/*
for (let i = 1; i <= 50; i++) {
    console.log(i);
}*/

//oppgave 2
/*
for (let i = 0  ; i <= 50; i = i + 2) {
    console.log(i)
}*/

//oppgave 3
// Modulus Mod in JS
/*
for (let i = 0; i <= 100; i++) {

    if (i%3 == 0 && i%5 == 0) {
        console.log(i);
    }
}*/

//oppgave 4
/*
for (let i = 0; i <= 100; i++) {

    if (i%3 == 0 || i%5 == 0) {
        console.log(i);
    }
}*/

//oppgave 5
/*
for (let i = 6; i > 0; i--) {
    document.write(`<h${i}>Røyken VGS</h${i}>`)
    
}*/

//oppgave 6
/*
for (let i = 1; i <= 7; i++) {
    for (let a = 1; a <= 15; a++) {
       if (i == 1 || i == 7 || a == 1 || a == 15){
        document.write("*")
       } 
       else{
        document.write("&nbsp;&nbsp;")
       }
    }
    document.write(`<br>`)
}*/

//oppgave 7

var stjerne = prompt("Skriv inn nummer fra 1 til 5")

if (stjerne = 1) {
   for (let i = 1; i <= 1; i++) {
    for (let a = 1; a <= i; a++) {
        document.write("*")
        
    }
    document.write(`<br>`)
} 
}

