// const p = new Promise((resolve, reject)=>{
//     let a = false;
//     if(a){
//         resolve('success')
//     }
//     else{
//         reject('Failed')
//     }
// })

// p.then((message)=>{
//     console.log('Recieved ' + message);
// }).catch((message)=>{
//     console.log('Recieved ' + message);
// })

const uno =()=>{
    return "one";
  }
  const dos = ()=>{
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve ("two");
          },3000)
   })
    }
  const mun =()=>{
    return "three"
  }
  
  const callMe = async ()=>{
      let v1 = uno();
      console.log(v1);
      let v2 = await dos();
      console.log(v2);
      let v3 = mun();
      console.log(v3);
  }

  callMe()