import fs from 'fs'
import fetch from 'node-fetch'
const url = 'https://reqres.in/api/users?page=2'
const url2= 'https://reqres.in/api/users'

// // send the GET request
const response = await fetch(url,{
    method:"GET",
    headers:{"Content-Type":"application/json"}
})
const res= await response.json();
const jsonData= res.data[0];

// Add some more parameters to the response
const modifiedData = {
    ...jsonData,
    job: 'Docotor'
  };
const parsedData = JSON.stringify(modifiedData,null,2);

// Writing the response to JSON File
fs.writeFile('payload/data3.json', parsedData, (err) => {
  if (err) throw err;
  console.log('Data written to file');
});




// Read the JSON file and sending post request
const data2= fs.readFileSync("./payload/data3.json", "utf-8");

// // send the POST request
const response2 = await fetch(url2,{
  method:"POST",
  body:data2,
  headers:{"Content-Type":"application/json"}
})
const jsonData2 = await response2.json();
console.log(jsonData2)