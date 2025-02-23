interface Items {
  name: string
  price: number
}

const MAX_NOT_EXPENSIVE = 100

export function processItems(items: Items[]) {
  items.forEach((item) => {
    const { price, name } = item

    if (price > MAX_NOT_EXPENSIVE) console.log(`${name} is expensive`)
  })
}