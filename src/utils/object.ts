// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function removeEmptyStringProperties<T extends Record<string, any>>(
  obj: T
): T {
  for (const key in obj) {
    if (typeof obj[key] === 'string' && obj[key].trim() === '') {
      delete obj[key]
    }
  }
  return obj
}
