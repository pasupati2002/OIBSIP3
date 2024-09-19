var objUser=[
    {
        username:"Pasupati",
        password:"@123"
    },
    {
        username:"Gaurav",
        password:"_9163"
    },
    {
        username:"gauravjha",
        password:"gaurav@52"
    }
]

function getInfo(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    // console.log("Your username is:" + username + " And password is:" + password);
    for(i=0; i<objUser.length; i++){
        if(username==objUser[i].username && password==objUser[i].password){
            console.log(username + " is logged in!")
        }
    }
    console.log("incorrect Username or Password");
}