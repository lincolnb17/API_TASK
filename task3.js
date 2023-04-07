import fs from 'fs'
import fetch from 'node-fetch'
const url = 'https://reqres.in/api/users?page=2'

const response = await fetch(url,{
    method:"GET",
    headers:{"Content-Type":"application/json"}
})
const jsonData = await response.json();
// console.log(jsonData.data)
const res_data = jsonData.data

fs.writeFile('/payload/data3.json',jsonData.data)

console.log(res_data)

