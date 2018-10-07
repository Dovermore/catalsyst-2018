var chat_messages = ["Hey Dan","I'm great", "I love my job, Computing and marketing are crucial parts of my " +
"job. I personally wasn't super interested in computing and I had to work hard to learn to love it" ,
    "My favourite part of my job is that I can work really hard at work and then go home and focus on my family",
    "Just enjoy everything","Your welcome, reach out to me anytime! :)"];
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


function add_to_chat() {
    //Get the chat line and add the text in the chat box
    document.getElementById("chat").innerHTML += document.getElementById("chat_box").value + "<br>";
    //Clear the chat box
    document.getElementById("chat_box").value = "";

    //Time before random response
    var timer = (Math.min(chat_messages[counter].length+2,40)*70);

    //Make the other user "respond"
    setTimeout(random_reponse,timer);



};

function random_reponse(){
    document.getElementById("chat").innerHTML += "<b>"+chat_messages[counter++] +"</b> <br>";
}