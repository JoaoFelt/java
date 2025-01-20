console.log('adição (+)', 2 + 2);
console.log('Subtração (-)', 8 - 3);
console.log('Multiplicação (*)', 8 * 5);
console.log('Divisão (/)', 12 / 2);
console.log('Modulo (%)', 10 % 2);
console.log('Exponenciação (**)', 2 ** 3);

var valor = 10;
console.log('incremento(++): ', valor++);
console.log(valor);

var valor = 10;
console.log('Decremento (--): ', valor--);
console.log(valor);

var animal = 'gato';


console.log(animal === 'gato');

var animal = 'gato';

console.log(animal === 'gato' || animal === 'cachorro');

var animal = 'gato';
var idade = 5;

console.log(animal === 'gato' && idade === 5);

var numero = 18;
var idade = '18';

if(idade == numero){
    console.log('É igual!');
} else{
    console.log('Não é igual!')
}
var nome = 'João';

if(nome ==='João'){
    console.log('Ola João');
} else if(nome === 'Maria'){
    console.log('Olá Maria')
}else{
    console.log(Olá)
}
var contador = 0;

while(contador <=10){
    console.log(contador);
    contador++
}