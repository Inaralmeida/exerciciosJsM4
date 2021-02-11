// //Exercicios - Dinamica aula 01
// //Escolha 2 dos 3 exercícios para realizar nessa dinâmica. O que sobrar deverá ser resolvido em casa durante essa semana.

// //1. Escreva uma função soma que retorna a soma dos números de um array usando spread operator
array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];
 const somaTudo = (array)=>{
   return [...array].reduce((a,b) => a + b)
 }
console.log(somaTudo(array))

// //2. Faça fetch dos dados através da aPI (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.
// //Formato:
// //Nome: [nome]
// //ID: [id]
// //Região: [area]
// //Ingredientes: [ingredientes (string única)]
// //Instruções: [instruções]
fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
.then




// //3. Faça fetch dos dados através da API (https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood) e retorne uma lista(array) com os nomes dos primeiros 10 resultados.

// //Parte A - Aquecimento Arrow Function

// //Transforme as funções declarativas abaixo em Arrow Functions
// const upperName = function (name) {
//     return name.toUpperCase();
//   };
//   function myFunction(p1, p2) {
//     return p1 * p2;
//   }
//   function toCelsius(fahrenheit) {
//     return (5 / 9) * (fahrenheit - 32);
//   }
  
//   //Destructuring - Desestruturação
//   //Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
//   function handleMouseMove(event) {
//     const clientX = event.clientX;
//     const clientY = event.clientY;
//     console.log(clientX, clientY);
//   }
  
//   //A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
//   const obj = { first: 'Jane', last: 'Doe' };
  
//   //A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors
//   company = {
//     name: 'ACME Corp',
//     address: 'Nowhere st',
//     products: {
//       shirts: {
//         colors: ['red', 'green', 'blue'],
//       },
//       socks: {
//         colors: ['cyan', 'magenta', 'yellow'],
//       },
//     },
//   };
  
//   //Rest & Spread
//   //Utilizando um operador clone o objeto c​lothes
//   const clothes = {
//     pants: { colors: ['black', 'blue'] },
//     shirts: { colors: ['white', 'red'] },
//     socks: { colors: ['beige', 'gray'] },
//   };
  
//   //Novamente utilizando um operador, clone o objeto c​ lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ ants, shirts ​e​ socks
  
//   //Arrays e seus métodos
//   //A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
//   var numbers = [4, 9, 16, 25];
  
//   //A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
//   var numbers = [65, 44, 12, 4];
  
//   //A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
//   var ages = [32, 33, 16, 40];
  
//   //A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
//   data = [
//     {
//       name: 'Butters',
//       age: 3,
//       type: 'dog',
//     },
//     {
//       name: 'Lizzy',
//       age: 6,
//       type: 'dog',
//     },
  
//     {
//       name: 'Red',
//       age: 1,
//       type: 'cat',
//     },
//     {
//       name: 'Joey',
//       age: 3,
//       type: 'dog',
//     },
//   ];
  
//   //Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​
  
//   //Parte B - Hora do Jogo!
//   //Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
//   var getShirtsColorsAmount = function (company) {
//     colors = company.products.shirts.colors;
//     return colors.length;
//   };

// FALTA ESSES
  
  //A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks
  const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
  };
  
//   const   = clothes
  let newClothes= {}
  newClothes['shirts'] = {...clothes.shirts}
  newClothes['socks'] = {...clothes.socks} 
  console.log(newClothes)
//   //Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
  const arr = [1, 2, 3];
  const arr2 = [4, 5, 6];

  let outroArray = [1, 2, 3, 4, 5]

  let [primeiroNumeor, ...resto1] = arr
  let [primeiroNumeoro, ...resto2] = arr2

  console.log(...resto1)
  console.log(...resto2)

  
//   //A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
  var persons = [
    { firstname: 'Malcom', lastname: 'Reynolds' },
    { firstname: 'Kaylee', lastname: 'Frye' },
    { firstname: 'Jayne', lastname: 'Cobb' },
  ];

  const nomeCompleto = persons.map((item) => item.firstname + ' ' +item.lastname)
  console.log(nomeCompleto)
