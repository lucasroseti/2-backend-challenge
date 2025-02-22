/*3. Testes de Clean Code */
/* 3.1 Refatoração de Código
  Dado o seguinte código, identifique e implemente as melhorias necessárias 
  seguindo princípios de Clean Code:

  function processItems(items: any[]) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].price > 100) {
        console.log(items[i].name + ' is expensive');
      }
    }
  }
*/

interface Items {
  name: string
  price: number
}

const MAX_NOT_EXPENSIVE = 100

function processItems(items: Items[]) {
  items.forEach((item) => {
    const { price, name } = item

    if (price > MAX_NOT_EXPENSIVE) console.log(`${name} is expensive`)
  })
}