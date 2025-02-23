export function extractValues<Data>(
  data: Data[],
  field: keyof Data
) {
  return data.map(item => item[field])
}
