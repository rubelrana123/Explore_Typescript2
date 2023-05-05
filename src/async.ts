/* //json data ffetch

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
  }
const getData = async () : Promise <ITodo> => {
 const response =   await fetch('https://jsonplaceholder.typicode.com/todos/1');
      return await response.json();
     
}

const getToDoData= async () : Promise<void> => {
    const data = await getData();
    console.log(data)
}
getToDoData();
//mocking
/* const makePromise = () => {
  return  new Promise <string>  ((resolve, reject) => {
        const data : string = " data is fached";
        if(data) {
            resolve(data);
        }
        else {
            reject("Failed to fatch data")
        }
    })
};
const getPromiseData = async() : Promise<string> => {
    const data = await makePromise();
    return data;
    // console.log(data)
}


//bollean
const makePromise1 = () => {
  return  new Promise <boolean>  ((resolve, reject) => {
        const data : boolean = true;
        if(data) {
            resolve(data);
        }
        else {
            reject("Failed to fatch data")
        }
    })
};

const getPromiseData1 = async() : Promise<boolean> => {
    const data = await makePromise1();
    return data;
    // console.log(data)
}

//object
type MeInfoType = { name : string; age : number};

const makePromise3 = () : Promise <MeInfoType> => {
    return  new Promise <MeInfoType>  ((resolve, reject) => {
          const data : MeInfoType = { name : "data fatched" , age : 50};
          if(data) {
              resolve(data);
          }
          else {
              reject("Failed to fatch data")
          }
      })
  };
  const getPromiseData3 = async() : Promise<MeInfoType> => {
      const data = await makePromise3();
      return data;
      // console.log(data)
  } */  