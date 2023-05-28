function checkPalindroma (parola){

let palindroma = parola.split ('').reverse('').join('');

if(palindroma.toLowerCase() === parola.toLowerCase()) {
    return true;
}
    return false;

}

let word = prompt('inserisci parola palindroma');

let check = checkPalindroma(word);

if (check){
    console.log('la parola è palindroma')
}
else{
    console.log('la parola non è palindroma');
}