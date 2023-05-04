// let emni : any ;
// emni = "next level web development";

// const result = (emni as string).split(" ");
// const result = <string> emni.split(" ");
// console.log(result);
// function kiloTogm (param : string | number) : string | number | undefined{
//     if(typeof param === "string"){
//        const value = parseFloat(param) * 1000;
//        return `converted gram ${value}`
//     }
//   if (typeof param === "number") {
//           const value = param * 1000;
//           return value;

//   } else {
//     console.log("nothing")
//   }
// }
// const result = kiloTogm(65) as number;
// console.log(result)

type CustomErrorType = {
    message : string;
}
try {
    
} catch (error) {
    console.log((error as CustomErrorType).message)
}