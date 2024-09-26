function readURL(input) 
{
    document.getElementById("bannerImg").style.display = "block";

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('bannerImg').src =  e.target.result;
        }

        reader.readAsDataURL(input.files[0]);

            var answer = input.value.slice(12)
            console.log('Selected file: ' + answer);

        var namething = "<h4>Name of Image :</h4> <input id='name' type='text' class='form-control'/>"
        var placething = "<h4 style=' text-shadow: 2px 2px 1px white;' >Description (make sure to  include the year and place!) :</h4> <input id='place' placeholder='2023-- Shenadoah National Park-- We planned on skipping this trail, but now we are glad we dit it!' type='text' class='form-control'/>"
        var btn = "<button onclick='save()' class='btn btn-success' style='border-radius: 15px; margin: 10px; padding:5px; width:100px;'>Save</button>"
        document.getElementById("form").innerHTML = namething + placething + btn
    }
}

function save() {
    var src = document.getElementById("bannerImg").src
    var description = document.getElementById("place").value
    var name = document.getElementById("name").value

    localStorage.setItem("src, "+name, src);
    localStorage.setItem("des, "+name, description);
}
