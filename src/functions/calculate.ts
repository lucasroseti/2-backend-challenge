
export function calculate(operation: string, number: number, number2: number): number | string {
  switch (operation) {
    case 'add':
      return number + number2
    case 'divide':
      if (number2 === 0) throw new Error('Error: Division by zero')

      return number / number2
    case 'multiply':
      return number * number2
    case 'subtract':
      return number - number2
    default:
      throw new Error('Error: Operation not permitted')
  }
}