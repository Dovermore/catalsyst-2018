var chat_messages = ["Hey Max","I'm doing great, how are you?", "I love my job, I love my kids" +
" sometimes working Google makes it hard to balance both.", "BMW"];
var counter = 0;

//Adds listener to the chat box
document.getElementById("chat_box").addEventListener("keyup", function(event) {
    event.preventDefault();
    //When enter is pressed
    if (event.keyCode === 13) {
        //Click on the button
        document.getElementById("chat_input").click();
    }
});


function x() {
    //Get the chat line and add the text in the chat box
    document.getElementById("chat").innerHTML += document.getElementById("chat_box").value + "<br>";
    document.getElementById("chat").innerHTML += chat_messages[counter++] + "<br>";
    //Clear the chat box
    document.getElementById("chat_box").value = "";

};