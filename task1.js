import fs from 'fs'
import fetch from 'node-fetch'

try{
    // read the JSON file
const data= fs.readFileSync("./payload/data.json", "utf-8");
const url= 'https://reqres.in/api/users'

// // send the POST request
const response = await fetch(url,{
    method:"POST",
    body:data,
    headers:{"Content-Type":"application/json"}
})
const jsonData = await response.json();
console.log(jsonData)

}catch(err){
    console.log("Error Occured")
}