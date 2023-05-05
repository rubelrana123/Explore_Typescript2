//mocking
const makePromise = () => {
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