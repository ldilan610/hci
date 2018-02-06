// JavaScript source code

$(document).ready(function (){
    var first = $("#first");
    var second = $("#second");
    var tInput = $("#tInput");
    var result = $("#result");
    var result2 = $("#result2");
    var first2 = $("#first2");
    var second2 = $("#second2");
    var tInput2 = $("#tInput2"); 

    $("#button").on("click", function (event) {
        event.preventDefault();
        console.log("click");
        var firstCode = first.val();
        var secondCode = second.val();
        var text = tInput.val();
        var target = secondCode;

        var authToken = "b2ca38ca72564d6b959810b9116b991b";
        var data = {
            appId: "Bearer " + authToken,
            from: firstCode,
            to: secondCode,
            contentType: "text/plain",
            text: text
        };

        axios
            .get("/translate/" + secondCode + "/" + encodeURI(text))
            .then(function (response) {
                result.text(
                    response.data.slice(
                        response.data.indexOf(">") + 1,
                        response.data.lastIndexOf("<")
                    )
                );
            })
            .catch(function (error) {
                console.log(error);
            });
    });





    $("#button2").on("click", function (event) {
        event.preventDefault();
        console.log("click");
        var firstCode = first2.val();
        var secondCode = second2.val();
        var text = tInput2.val();
        var target = secondCode;

        var authToken = "b2ca38ca72564d6b959810b9116b991b";
        var data = {
            appId: "Bearer " + authToken,
            from: firstCode,
            to: secondCode,
            contentType: "text/plain",
            text: text
        };

        axios
            .get("/translate/" + secondCode + "/" + encodeURI(text))
            .then(function (response) {
                result2.text(
                    response.data.slice(
                        response.data.indexOf(">") + 1,
                        response.data.lastIndexOf("<")
                    )
                );
            })
            .catch(function (error) {
                console.log(error);
            });
    });

});






