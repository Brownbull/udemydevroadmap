// EXAMPLE
// const sum = (a: number, b: number) => {
//   return a + b
// }

// const answer = sum(4, 5)
// // this is wrong because of type expected on function
// // so this will  not pass typescript syntax
// // const answer2 = sum('hello', 5)

// console.log(answer)

//TYPES
// boolean
let isBool: boolean = true
// number
let isNumber: number = 3
// string
let isString: string = 'brown'
let isStatement1: string = isString + 'bull'
let isStatement2: string = `${isString}bull`
// arrays
let isArray1: string[] = ['asd', 'qwe']
let isArray2: Array<string> = ['asd', 'qwe']
// object
let isObject: object = { a: '123' }
// null and undefined
let isNull: null = null
let isUndefined: undefined = undefined

// NEW TYPES
// tuple
let isTuple: [string, number]
isTuple = ['asd', 123]
// enum
enum isEnum {small = 1, medium = 2, large = 3}
let fromEnum: string = isEnum[2]
console.log(fromEnum)
// Any - !!! Be careful !!!
let isAny: any = 'asdasdasd'
isAny = 5
isAny = true
isAny = fromEnum
// void
let isVoidFunction = ():void => {
  console.log('asdasd')
  // return 'asd' 
}
// never , for function without reachable endpoint, does not return
let error = ():never => { throw Error('asd') }
// interface
interface RobotArmy {
  count: number,
  type: string,
  magic: string
}
let fightRobotArmy1 = (robots: RobotArmy) => {
  console.log('Fight')
}
let fightRobotArmy2 = (robots: { count: number, type: string, magic: string }) => {
  console.log('Fight')
}

// ASSERTIONS, override types
interface CatArmy {
  count: number,
  type: string,
  magic?: string
}
let fightRobotArmy3 = (robots: CatArmy) => {
  console.log('Fight')
}
fightRobotArmy3({count: 1, type: 'dragoon'})
let dog = {} as CatArmy
dog.count

// function
let fightRobotArmy4 = (robots: RobotArmy):number => {
  console.log('Fight')
  return 7
}

// class
class Animal {
  private sing: string = 'lalala'
  constructor(sound: string) {
    this.sing = sound
  }

  greet() {
    return `Hello ${this.sing}`
  }
}
let lion = new Animal('RAAAWWRR')
console.log(lion.greet())
// lion.sing // this is private so I dont have access

// union
let isUnion: string | number | boolean = "hello"
isUnion = 5

let x = 3
// x = "hello" // x is supposed tobe a number so this will throw an error




