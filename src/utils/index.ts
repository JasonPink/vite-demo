/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
const list: number[] = [1, 2, 3]
const list2: Array<number> = [4, 5, 6]

enum Direction {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH'
}

const dir: Direction = Direction.NORTH

const tupleType: [string, boolean] = ['true', false]
console.log(list, list2, dir, tupleType)
export default function ss(): void {
  console.log(1)
}
