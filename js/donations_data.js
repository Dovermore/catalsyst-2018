// DOM Ready
$(document).ready(function() {
    // Populate page with HTML snippets

    alert("hello");
});

// Create HTML snippets
function processDonationData() {

    // jQuery AJAX call for JSON
    $.getJSON( '/api-donations', function(data) {

        $.each(data, function(){
            html = '<tr>'
            html += '<td>'+this.date+'</td>'
            html += '<td>'+ this.location +'</td>'

            html += '<td class="text-success font-weight-bold text-center">&#10004;</td>'
            html += '<td class="text-danger font-weight-bold text-center">&times;</td>'
            html += '<td class="text-danger font-weight-bold text-center">&times;</td></tr>'

            // if(this.type == "blood"){
            //     html += '<td class="text-success font-weight-bold text-center">&#10004;</td>'
            //     html += '<td class="text-danger font-weight-bold text-center">&times;</td>'
            //     html += '<td class="text-danger font-weight-bold text-center">&times;</td></tr>'
            // }
            // else if (this.type == "bone"){
            //     html += '<td class="text-success font-weight-bold text-center">&times;</td>'
            //     html += '<td class="text-danger font-weight-bold text-center">&#10004;</td>'
            //     html += '<td class="text-danger font-weight-bold text-center">&times;</td></tr>'
            // }
            // else{
            //     html += '<td class="text-success font-weight-bold text-center">&times;</td>'
            //     html += '<td class="text-danger font-weight-bold text-center">&times;</td>'
            //     html += '<td class="text-danger font-weight-bold text-center">&#10004;</td></tr>'
            // }
            //append the previous donations to the div prevDon
           $("#prevDon").append(html);
        })

    });
};


