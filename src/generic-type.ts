type GenericArray<T>  = Array<T>
type GenericTupple <X,Y> = [X,Y];
// type RelationWithMoney = {name : string, money : number};
interface RelationWithMoneyInterface {
    name : string;
    money : number
}

const friendship : GenericTupple <string, string> = ["Rubel", "Sohel"];

const relationWithMoney2 : GenericTupple<
RelationWithMoneyInterface, string> =  [
    {
        name : "Kodom",
        money : 500

    },
    "money",
]
const relationWithMoney : GenericTupple<object, string> =  [
    {
        name : "Kodom",
        money : 500

    },
    "money",
]
type NameRollType = {name : string; roll : number}
const rollNumbers :GenericArray<number>   = [4,9,6,7,8];
const rollNumbers2 :GenericArray<string>   = ["44","95","65","75","8"];
const userNameWithRoll : GenericArray <NameRollType> = [
    {
        name : "Mr. X",
        roll : 10
    },
    {
        name : "Mr Y",
        roll : 5
    }
]

