
function whenstartpage(){
        var results = [];
        for (i = 0; i < window.localStorage.length; i++) {
            key = window.localStorage.key(i);
            if (key.slice(0,2) === "ne") {
                results.push(window.localStorage.getItem(key));
            }
        }
        console.log(results)
        document.getElementById("output").innerHTML = results.map(i => `<li>${i}</li>`).join('');     
}
  
  function updateplaces(){
    newplace = document.getElementById("input").value;
    if(newplace == ""){
        alert("type in a place first!")
    }else{
        localStorage.setItem("new"+newplace, newplace);
        console.log(newplace)
        addplace = localStorage.getItem("newplace")
        document.getElementById("output").innerHTML += "reload the page to see new place";
    }
  }

  function familyMemoriesadmin(){
    window.location = "familymemoriesadmin.html"
  }
