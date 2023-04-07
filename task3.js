import fs from 'fs'
import fetch from 'node-fetch'
const url = 'https://reqres.in/api/users?page=2'

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
console.log(parsedData)

// Writing the response to JSON File
fs.writeFile('payload/data3.json', parsedData, (err) => {
  if (err) throw err;
  console.log('Data written to file');
});