//generic interface
interface CrudshInterface<T, U> {    //we can set default value u = undefined
    name : string;
    husband : T;
    wife? : U
}
interface HusbandInterface  {name : string; salary : number };
interface  PersonalInterface   {name : string, age : number} 


const crush1 : CrudshInterface<boolean, undefined> = { name : "Rose", husband : true

}
const crush2 : CrudshInterface<string, undefined> = { name : "Rose", husband : "jack"

}
const crush3 : CrudshInterface< HusbandInterface, undefined> ={
    name : "Rubel",
    husband : {
        name : "Hellowen",
        salary : 5000
    }


}

const crush4 : CrudshInterface<PersonalInterface, PersonalInterface> = {
    name : "jorina",
    husband : {
        name : "Jack",
        age : 54
    },
    wife : {
        name : "jarin",
        age : 40
    }
}
console.log(crush1)