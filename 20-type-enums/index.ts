// numeric enums
// enum Direction{ // secara default value dari enum tersebut adalah number incremet
//   up, // 0
//   right, // 1
//   down, // 2
//   left, //3
// }

// enum Direction{ // secara default value dari enum tersebut adalah number incremet
//   up, // 0
//   right = 2, // 2
//   down, // 3
//   left, //4
// }

enum Direction{ // secara default value dari enum tersebut adalah number incremet
  up, // 0
  right = 2, // 2
  down, // 3
  left = 3, //3
}

console.log(Direction.up)
console.log(Direction.right)
console.log(Direction.down)
console.log(Direction.left)


// string enums
// enum UkuranBaju{
//   extraSmall = "XS",
//   small = "S",
//   medium = "M",
//   large = "L",
//   extraLarge = "XL"
// }

// const baju: UkuranBaju = UkuranBaju.large
// console.log(baju)


// heterogeneus enums (campuran string dan number)

// enum UkuranBaju{
//   extraSmall = 3,
//   small,
//   medium = 10,
//   large = "L",
//   extraLarge = "XL"
// }


// computed enums member
const areaCircle = (radius: number): number => Math.PI * Math.pow(radius, 2) 

enum Circle{
  radius = 10,
  area = areaCircle(radius)
}

console.log(Circle.radius)
console.log(Circle.area)

