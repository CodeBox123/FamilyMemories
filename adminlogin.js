function check(){
    password = document.getElementById("password").value
    if(password == "betien123"){
      window.location = "admin.html"
    }else{
        document.getElementById("wrong").innerHTML = "Incorrect"
  
    }
  }
