import {append} from "./srcipts/append.js";
let maindiv= document.getElementById("append");
const getDAta =async()=>{
    let res = await fetch(`http://localhost:3000/users`);
    let data = await res.json();
    console.log(data)
    append(data,maindiv)
    }
    getDAta()
