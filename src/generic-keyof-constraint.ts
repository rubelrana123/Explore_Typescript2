type PersonType = {
    name : string;
    age : number;
    address : string
};

type newType = "name" | "age" | " address";
type newKeyUsingKeyOf = keyof PersonType ;

const a : newType = "age";
const b : newKeyUsingKeyOf  = "name";


function getProperty <X,Y extends keyof X> (obj : X, key : Y) {  // y = "name" | "age"
    console.log(obj)
    const property = obj[key];
    return property;
}
const result = getProperty({name : "Rubel", age : 50}, "age")
console.log(result)