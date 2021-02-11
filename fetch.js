// //2. Faça fetch dos dados através da aPI (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.
// //Formato:
// //Nome: [nome]
// //ID: [id]
// //Região: [area]
// //Ingredientes: [ingredientes (string única)]
// //Instruções: [instruções]

fetch('https:www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
    .then((response) => response.json())
    .then((json)=>{
        const objeto = json.meals[0]
        const ingredientes = Object.keys(objeto)
        const  ingredientesUsados  = ingredientes.filter((item)=> item.includes("strIngredient"))
        const ingrUs = ingredientesUsados.join(",")

        const nome = objeto.strMeal
        const id = objeto.idMeal
        const regiao = objeto.strArea
        const ingredientes = addIngretientes(objeto, ingrUs)
        console.log(`NOME: ${nome}\nID: ${id}\nRegião: ${regiao}\nIngredientes: ${ingredientes}`)

        

    })




