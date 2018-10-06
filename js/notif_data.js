// Userlist data array for filling in info box

// DOM Ready
$(document).ready(function() {
    // Populate page with HTML snippets
    processNotifsData();
});



//NOTIFICATIONS
//add notifications dynamically to the page
function processNotifsData() {

    // jQuery AJAX call for JSON
    $.getJSON( '/api-notifs', function(data) {

        $.each(data, function() {
            var html = '<div class="media my-2 border rounded p-3 mx-3">';
            html += '<img src=' + this.imgsource + ' alt="Add" class="mr-3 rounded" style="width:50px;">'
            html += '<div class="media-body">'
            html += '<h4 class="mb-1 font-rubik font-weight-bold">' + this.heading + '</h4>'
            html += '<h6 class="font-rubik">' + this.title + '</h6>'
            // html += '<hr/>'
            html += '<p class="mb-1">' + this.content + '</p>'
            html += '<h5 class="mb-0"><small><i>' + this.time + ' hours ago</i></small></h5>'
            html += '</div>'
            html += '</div>'
            $("#append").append(html);
        });



        // Inject the content strings into HTML
        // [insert code here]


    });
};

