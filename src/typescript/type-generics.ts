import { extractValues } from '../functions/extract-values'

interface DataProps {
  id: number
  name: string
}

export function typeGenerics(field: string) {
  const data: DataProps[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]
  
  return extractValues<DataProps>(data, field as keyof DataProps)
}