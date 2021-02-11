//Destructuring - Desestruturação
//   //Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
//   function handleMouseMove(event) {
//     const clientX = event.clientX;
//     const clientY = event.clientY;
//     console.log(clientX, clientY);
//   }
function handleMouseMove(event) {
    const [clientX, clientY] = event
    console.log(clientX, clientY);
}

  
//A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
const obj = { first: 'Jane', last: 'Doe' };
const {frist} = obj
  

//   //A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors
  company = {
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
      shirts: {
        colors: ['red', 'green', 'blue'],
      },
      socks: {
        colors: ['cyan', 'magenta', 'yellow'],
      },
    },
  };

  const {name, products:{shirts: colors}} = company
  