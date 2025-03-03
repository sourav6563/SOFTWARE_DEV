function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("data fetched Succesfully");
      } else {
        reject("error");
      }
    }, 2000);
  });
}
let response = fetchData()
.then((data)=>{console.log(data);
  return `sunny honey`
})
.then((value)=>{
  console.log(value);
  
})
.catch((Error)=>{console.log(Error);
})
