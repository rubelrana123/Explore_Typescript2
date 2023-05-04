// const createArray = (param : string): string[] =>  {
//     return [param];
// }
type PersonalInfoType =  {
    name : string
}
const createArray2 = <X,Y> (param1 : X, param2 : Y): [X,Y] =>  {
    return [param1,param2];
}
// const createArray2 = <T> (param : T): T[] =>  {
//     return [param];
// }
const result = createArray2<string, number>("hello", 15);
const result2 = createArray2<string, boolean>("Hello", true);
const result3 = createArray2<PersonalInfoType, string>({name : "Rubel"}, "Gello");
console.log(result3);

const myInfo = {
    name : "Jack",
    age : 55,
    salary : 25555
};

const AddMeInMyFriendMind = <T> (myInfo : T) => {
    const crush = "Laila";
    const newData = {...myInfo, crush}
    return newData;
}
const result5 = AddMeInMyFriendMind(myInfo);
console.log(result5)