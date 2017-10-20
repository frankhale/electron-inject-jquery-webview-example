document.addEventListener("DOMContentLoaded", function(event) {
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.2.1.min.js";
    script.onload = script.onreadystatechange = function() {
        $(function() {
            $("#lst-ib").val("Hello, World!");
        });
    };
    document.body.appendChild(script);
});
