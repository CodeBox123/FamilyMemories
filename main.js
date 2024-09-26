
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
  
function charlotte(){
    window.location = "charlotte.html"
}
function familyMemories(){
    window.location = "familymemories.html"
    localStorage.setItem(results)
}












