function hslToHex(h: number, s: number, l: number): string {
  l /= 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0')
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

export function generateColors(
  numColors: number,
  saturation?: number,
  lightness?: number,
) {
  const colors = []
  // const saturation = 70 // High Saturation
  // const lightness = 50 // Average brightness

  for (let i = 0; i < numColors; i++) {
    const hue = ((i * 360) / numColors) % 360
    colors.push(hslToHex(hue, saturation ?? 70, lightness ?? 50))
  }

  return colors
}

export function hashCodeInRange(str: string, min: number, max: number): number {
  let hash = 0
  if (str.length === 0) {
    return min
  }
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32-bit integer
  }
  const range = max - min + 1
  const hashedValue = Math.abs(hash)
  return min + (hashedValue % range)
}

export const getColorByName = (
  anyName: string,
  range: number = 360,
  saturation: number = 70,
  lightness: number = 50,
) =>
  generateColors(range, saturation, lightness)[
    hashCodeInRange(anyName, 0, range - 1)
  ]

export const getGradientByName = (
  anyName: string,
  range: number = 360,
  hueDifference: number = 30,
  saturation: number = 70,
  lightness: number = 50,
) => {
  const maxValueRange = range - 1
  const baseHue = hashCodeInRange(anyName, 0, maxValueRange)
  const secondHue = (baseHue + hueDifference) % maxValueRange

  const colors = [
    hslToHex(baseHue, saturation, lightness),
    hslToHex(secondHue, saturation, lightness),
  ]
  // return `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`
  return colors
}
