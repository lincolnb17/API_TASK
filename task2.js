import fs from 'fs'
import fetch from 'node-fetch'
// Read the JSON file
const data= fs.readFileSync("./payload/data2.json", "utf-8");
const url= 'https://reqres.in/api/users'

// Replace the variables with desired values
const name = 'Ram';
const job = 'Developer';

const requestBody = JSON.stringify(JSON.parse(data.replace("${name}", name).replace("${job}", job)));             
// // send the POST request
const response = await fetch(url,{
    method:"POST",
    body:requestBody,
    headers:{"Content-Type":"application/json"}
})
const jsonData = await response.json();
console.log(jsonData)



