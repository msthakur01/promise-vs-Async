const fetchPromise = fetch("https://jsonplaceholder.typicode.com/users");
fetchPromise.then(response => {
  return response.json();
}).then(users => {
  console.log(users);
}).catch(err=>{
    return err;
});