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
var isBool = true;
// number
var isNumber = 3;
// string
var isString = 'brown';
var isStatement1 = isString + 'bull';
var isStatement2 = isString + "bull";
// arrays
var isArray1 = ['asd', 'qwe'];
var isArray2 = ['asd', 'qwe'];
// object
var isObject = { a: '123' };
// null and undefined
var isNull = null;
var isUndefined = undefined;
// NEW TYPES
// tuple
var isTuple;
isTuple = ['asd', 123];
// enum
var isEnum;
(function (isEnum) {
    isEnum[isEnum["small"] = 1] = "small";
    isEnum[isEnum["medium"] = 2] = "medium";
    isEnum[isEnum["large"] = 3] = "large";
})(isEnum || (isEnum = {}));
var fromEnum = isEnum[2];
console.log(fromEnum);
// Any - !!! Be careful !!!
var isAny = 'asdasdasd';
isAny = 5;
isAny = true;
isAny = fromEnum;
// void
var isVoidFunction = function () {
    console.log('asdasd');
    // return 'asd' 
};
// never , for function without reachable endpoint, does not return
var error = function () { throw Error('asd'); };
var fightRobotArmy1 = function (robots) {
    console.log('Fight');
};
var fightRobotArmy2 = function (robots) {
    console.log('Fight');
};
var fightRobotArmy3 = function (robots) {
    console.log('Fight');
};
fightRobotArmy3({ count: 1, type: 'dragoon' });
var dog = {};
dog.count;
// function
var fightRobotArmy4 = function (robots) {
    console.log('Fight');
    return 7;
};
// class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RAAAWWRR');
console.log(lion.greet());
// lion.sing // this is private so I dont have access
// union
var isUnion = "hello";
isUnion = 5;
var x = 3;
// x = "hello" // x is supposed tobe a number so this will throw an error
