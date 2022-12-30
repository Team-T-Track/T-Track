import {append} from "./srcipts/append.js";
let maindiv= document.getElementById("append");
const getDAta =async()=>{
    let res = await fetch(`https://floating-island-82380.herokuapp.com/users`);
    let data = await res.json();
    console.log(data)
    append(data,maindiv)
    }
    getDAta()
