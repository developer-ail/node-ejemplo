console.log('Inicio del programa');

setTimeout(function() {
    console.log('Primero TimeOut');
}, 3000);

setTimeout(function() {
    console.log('Segundo TimeOut');
}, 0);

setTimeout(function() {
    console.log('Tercero TimeOut');
}, 0);

console.log('Fin del Programa');