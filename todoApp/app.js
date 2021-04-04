function saveTodo(){
    console.log("Clicked!");

    //get the text from input field
    var todo = $("#todoText").val();

    //create DOM element
    var syntax = "<h6>" + todo + "</h6>";
    $("#pendingTodos").append(syntax);

    // clear the text
    $("#todoText").val("").focus();
}

function init() {
    console.log("Todo app");

    // hook events
    $("#btnSave").click(saveTodo);
    $("#todoText").keypress(function (e) {
        if (e.key === "Enter") {
            saveTodo();
        };
    });
}

window.onload = init;