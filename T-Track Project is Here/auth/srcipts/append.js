const append =(data,container)=>{
    container.innerHtml=null;
    data.forEach(({name,email,mobile,username,id,description
    })=>{
        let div=document.createElement("div");
        div.className="userdata"
    div.innerHTML=`
    <h3> Name: ${name} </h3>
    <h3> User Name: ${username} </h3>
    <h4> email: ${email} </h4>
    <h5> Mobile: ${mobile} </h5>
    <h5> ID: ${id} </h5>
    <h5> Description : ${description} </h5>

    `
    
     
    container.append(div);
    })
    }
    export { append };