const stringForBg = [
  `010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`,
]

let i = 0
export let stringsForBg = [] as string[]

while (i < 150) {
  stringsForBg = [...stringsForBg, ...stringForBg]
  i++
}