const arrayofnumber = [1,2,3];
const arraystring  = arrayofnumber.map((number) => number.toString);
console.log(arraystring);
//or
type AreaNumber = {
    height : number;
    width : string;
    dept : number
}
type Area <T> = {
    // [key in keyof AreaNumber] : number;
    // [key in keyof AreaNumber] : AreaNumber[key];
   readonly [key in keyof T] : T[key]

}
const Area2 : Area <{name : string}> = {name : "Rubel"};

type AreaString  ={
    height : string;
    width : string
}
type AreaReadOnly = {
    height : number;
    width : number
}
const  retangularArea : AreaNumber = {
    height : 263,
    width : 54
}

type A1 = Area["height"];
type B2 = keyof Area;
// const  obj = {
//     name : "Persian",
// }
// obj.name;