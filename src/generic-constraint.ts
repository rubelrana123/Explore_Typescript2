type MyInfoType = 
{
    name : string;
    age : number;
    salary : number;
    hight : number
}
const  myInfo : MyInfoType = {
    name : "Jack",
    age : 55,
    salary : 25555,
    hight : 5.6
};

const AddMeInMyFriendMind = <T extends {name : string, age : number, salary : number}> (myInfo : T) => {
    const crush = "Laila";
    const newData = {...myInfo, crush}
    return newData;
}
const result5 = AddMeInMyFriendMind (myInfo);
console.log(result5) 