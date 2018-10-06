//Team Functions
// DOM Ready
$(document).ready(function() {

    var pathname = window.location.pathname;

    if (pathname == "/teams") {
        processTeamData();

    };

});





// POPULATE TEAMS PAGE
function processTeamData() {

    var userdoc = $.getJSON('/api-activeuserid', function(doc){
        var userid = doc.donorID;
        // jQuery AJAX call for JSON
        $.getJSON( '/api-teams', function(data) {
            $.each(data, function(){
                if (this.email == userid) {
                    //var html = '<a href="/teamsprofile/'+this.link+'/'+ this.teamname +'/'+ this.members +/'" class="cardLink text-body mx-1 mt-3">'
                    // var html = '<a href="" class="cardLink text-body mx-1 mt-3">'
                    html = '<div class="card px-3 pt-3 pb-2" style="width:175px;">'
                    html += '<img class="card-img-top rounded" src="../img/'+ this.link +'" alt="Card image">'
                    html += '<hr class="mb-2"/>'
                    html += '<div class="card-body px-2 py-1">'
                    html += '<h5 class="card-title text-center font-rubik my-1"> '+this.teamname+' </h5>'
                    html += '<p class="mb-0 text-center"><img src="img/torso.png" width="16px" class="mr-1">'+this.members.length+'</p>'
                    // html += '</div></div></a>'
                    html += "</div></div>"

                    // append the previous donations to the div prevDon
                    $("#teamsPage").append(html);
                }

            })
            $.each(data, function(){
                if (this.email != userid) {
                    //var html = '<a href="/teamsprofile/'+this.link+'/'+ this.teamname +'/'+ this.members +/'" class="cardLink text-body mx-1 mt-3">'
                    // var html = '<a href="" class="cardLink text-body mx-1 mt-3">'
                    html = '<div class="card px-3 pt-3 pb-2" style="width:175px;">'
                    html += '<img class="card-img-top rounded" src="../img/'+ this.link +'" alt="Card image">'
                    html += '<hr class="mb-2"/>'
                    html += '<div class="card-body px-2 py-1 ">'
                    html += '<h5 class="card-title text-center font-rubik my-1"> '+this.teamname+' </h5>'
                    html += '<p class="mb-0 text-center"><img src="img/torso.png" width="16px" class="mr-1">'+this.members.length+'</p>'
                    // html += '</div></div></a>'
                    html += "</div></div>"

                    // append the previous donations to the div prevDon
                    $("#suggestedPage").append(html);
                }

            })
        });

        // Hide loading icon and show content
        $(".loaderDiv").hide();
        $(".contentDiv").animate({opacity: 1});
    });
};







