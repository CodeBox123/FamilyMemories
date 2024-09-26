function whenstartpage(){
    var results2 = [];
    for (i = 0; i < window.localStorage.length; i++) {
        key = window.localStorage.key(i);
        if (key.slice(0,3) === "src") {
        results2.push(window.localStorage.getItem(key));
    }}

    var desforalbum = [];
    for (y = 0; y < window.localStorage.length; y++) {
        key2 = window.localStorage.key(y);
        if (key2.slice(0,3) === "des") {
        desforalbum.push(window.localStorage.getItem(key2));
    }}

       console.log(desforalbum)
       console.log(results2)

        for (x = 0; x < results2.length; x++) {
            src = results2[x]
            description = desforalbum[x]
            newimg = "<span class='albumdiv_output2'><img class='album' src='"+src+"'></img> <p class='img__description'>"+description+"</p><span>"
            document.getElementById('output2').innerHTML +=  newimg;
        }







    }
    function Home(){
        window.location = "index.html"
    }