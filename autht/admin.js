
let login= document.getElementById("Login");
login.onclick= function(){
    Login();
}




function Login(){
    let username= document.getElementById("login-username").value;
let password= document.getElementById("login-password").value;
   
    if(username=="kml552"&&password=="password552"){
        alert("welcome Kamal" )
       
        window.location.replace("./login.html")
    }else if(username=="pankaj_01"&&password=="pankaj_01"){
        alert("welcome Pankaj" )
        window.location.href()
        window.location.replace("./login.html")
    }else if(username=="vibhor"&&password=="passwords"){
        alert("welcome Vibhor" )
        window.location.href()
        window.location.replace("./login.html")
    }else if(username=="aniket"&&password=="aniket07"){
        alert("welcome aniket" )
        window.location.href()
        window.location.replace("./login.html")
    }else{
        alert("wrong details")
    }
    
}