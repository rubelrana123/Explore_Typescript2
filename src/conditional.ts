type a = null;
type b = a extends string ? string : null;
type c = number;
// nested


type  d = a extends null ? null  : b extends number ? number : c extends null ? null : never;




type Shiekh = {
    wife1 : string;
    wife2 : string
};

type A = keyof Shiekh;

type CheckProperty<T, K> = K extends keyof Shiekh ? true : false;
type CheckWife1 = CheckProperty<Shiekh, "wife6"> 

// hot example

type Bandhubi = "Monika" | "Rachel" | "Papiya";

type RemoveBandhubi<T, K> = T extends K ? never : T;
type CurrentBandhubi = RemoveBandhubi<Bandhubi, "Monika">;