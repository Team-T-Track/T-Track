
let login= document.getElementById("Login");
login.onclick= function(){
    Login();
}




function Login(){
    let username= document.getElementById("login-username").value;
    let password= document.getElementById("login-password").value;
   
    if(username == "kml552" && password == "password552"){
        alert("Welcome Kamal")
       
        window.location.href = "./admin_main.html";
    }
    
    else if(username=="pankaj_01"&&password=="pankaj_01"){
        alert("Welcome Pankaj");

        window.location.href = "./admin_main.html";
    }
    
    else if(username == "vibhor" && password == "passwords"){
        alert("Welcome Vibhor");

        window.location.href = "./admin_main.html";
    }
    
    else if(username == "aniket" && password == "aniket07"){
        alert("Welcome Aniket")

        window.location.href = "./admin_main.html";
    }
    
    else {
        alert("Wrong Credentials");
    }
    
}