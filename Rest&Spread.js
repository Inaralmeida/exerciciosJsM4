//Rest & Spread
//   //Utilizando um operador clone o objeto c​lothes
const clothes = {
pants: { colors: ['black', 'blue'] },
shirts: { colors: ['white', 'red'] },
socks: { colors: ['beige', 'gray'] },
};

const newClothes = {...clothes}

newClothes['shoes'] = { colors: ['yellow', 'purple']} 

  
//Novamente utilizando um operador, clone o objeto c​lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ ants, shirts ​e​ socks
console.log(clothes)
console.log(newClothes)

 //A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks
 const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
  };
  
  const {shirts:{colors:[...corShirts]}}   = clothes
  const {socks:{colors:[...corSocks]}}   = clothes

  console.log(corShirts)
  console.log(corSocks)
  
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