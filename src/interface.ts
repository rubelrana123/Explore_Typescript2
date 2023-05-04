// type User = {
//     name : string;
//     age : number
    
// }
// type extendsUser = User & {role : string}
// const userWithIUserTypeAlias : extendsUser = {
//     name : "Type Alias",
//     age : 100,
//     role :  " Top"
// }

// interface IUser {
//     name : string;
//     age : number
// }
// interface IextendUser extends IUser {
//     role : string;
// };
// const newIUser : IextendUser =  {
//  name : "Rubel",
//  role : "top",
//  age : 20
// };

// // type addNumbersType = (num1 : number, num2 : number) => number;
//   interface IAddNumbers {
//     (num1 : number, num2 : number) : number;
//   }

// const addNumbers : IAddNumbers = (num1, num2) => num1 + num2;

//   type  ROllType = number[];
//   interface IRollNumber  {
//     [index : number] : number;
//   }
// const rollNumbers : IRollNumber = [2,6,7,8]