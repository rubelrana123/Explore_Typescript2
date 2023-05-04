type User = {
    name : string;
    age : number
    
}
type extendsUser = User & {role : string}
const userWithIUserTypeAlias : extendsUser = {
    name : "Type Alias",
    age : 100,
    role :  " Top"
}

interface IUser {
    name : string;
    age : number
}
interface IextendUser extends IUser {
    role : string;
};
const newIUser : IextendUser =  {
 name : "Rubel",
 role : "top",
 age : 20
};
