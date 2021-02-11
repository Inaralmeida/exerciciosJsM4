//Arrays e seus métodos
//A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
var numbers = [4, 9, 16, 25];
const raiz = numbers.map((item)=> (Math.sqrt(item)))
console.log(raiz)
  
//   //A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
var numbers2 = [65, 44, 12, 4];
var numPor10 = numbers2.map((item)=> item *10)
console.log(numPor10)
  
//   //A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
var ages = [32, 33, 16, 40];
let maiorIdade= ages.filter((item) => item > 18)
console.log(maiorIdade)

  
//   //A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
  data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog',
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog',
    },
  
    {
      name: 'Red',
      age: 1,
      type: 'cat',
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog',
    },
  ];
  const soDogs = data.filter((item) => item.type.includes('dog'))
  console.log(soDogs)
  
//   //Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​
const idadeDogs = soDogs.map((item)=> Number(item.age)).reduce((a,b)=> a + b)
console.log(idadeDogs)
//   //Parte B - Hora do Jogo!

//   //Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
  var getShirtsColorsAmount =  (company) =>{
    const{preducts:{shirts:{colors}}} = colors
    return colors.length;
  };