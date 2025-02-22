export function extractValues<DataFields>(
  data: DataFields[],
  field: keyof DataFields
) {
  return data.map(item => item[field])
}
