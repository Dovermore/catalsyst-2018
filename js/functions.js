var pagelocation = window.location.href.split("/");
pagelocation = pagelocation[pagelocation.length - 1].split("#")[0].split("?")[0];

// Pages only members can visit.
var member = ["home", "book", "events", "teams", "profile"];

// Pages both guests and members can visit.
var hybrid = ["about", "contact", "information"];

// Pages generally accessed only by guests.
var guest = ["", "signup", "signin"]

// Check the login status
$.getJSON('/api-activeuserid', function(doc){
    // If accessing a members page and a guest, redirect to home.
    if (member.indexOf(pagelocation) != -1) {
        if (doc.donorID == 0) {
            alert("You are not logged in.");
            window.location.href = "/";
        }
    }

    // Handle which header bar to show based on login status.
    if (hybrid.indexOf(pagelocation) != -1) {
        $(".loaderDiv").hide();

        if (doc.donorID != 0) {
            $(".headerMember").removeAttr("hidden");
        }

        else {
            $(".headerGuest").removeAttr("hidden");
        }

        $(".contentDiv").animate({opacity: 1});
    }

    // 404 Case
    if (member.indexOf(pagelocation) == -1 && hybrid.indexOf(pagelocation) == -1 && guest.indexOf(pagelocation) == -1) {
        $(".loaderDiv").hide();

        if (doc.donorID != 0) {
            $(".headerMember").removeAttr("hidden");
        }

        else {
            $(".headerGuest").removeAttr("hidden");
        }

        $(".contentDiv").animate({opacity: 1});
    }
});







$(document).ready(function() {
    $(".textFieldInput").hide();
    $(".textFieldInput").removeAttr("hidden");
    $(".join").hide();
    $(".join").removeAttr("hidden");
    $(".groupInvite").hide();
    $(".groupInvite").removeAttr("hidden");

    $('#datepicker').datepicker({
        uiLibrary: 'bootstrap4',
        format: 'dd/mm/yyyy'
    });

    // Get what page we are currently on
    var location = window.location.href.split("/");
    location = location[location.length - 1];

    // Only run the create function on the correct page
    if (location === "profile" || location === "teamprofile") {
        createGraph();
    }

    if (location.split("#").length > 1) {
        tabtype = location.split("#")[1];
        $('.nav-pills a[href="#' + $.trim(tabtype) + '"]').tab('show');
    }

    else if (location === "about") {
        $('.nav-pills a[href="#blood"]').tab('show');
    }



    $(".showForm").click(function() {
        const thisForm = "#" + $(this).attr("id") + "Form";
        $(thisForm).fadeIn();
        $(".appForm:not(" + thisForm + ")").hide();

    });

    $(".selectType").click(function() {
        $($(this).siblings()).prop("checked", !$(this).siblings().prop("checked"));

        if($(this).siblings().prop("checked")) {
            $(this).removeClass("btn-outline-danger");
            $(this).addClass("btn-danger");
        }

        else {
            $(this).removeClass("btn-danger");
            $(this).addClass("btn-outline-danger");
        }

    });

    $(".groupDono").click(function() {
       $(".groupInvite").removeAttr("hidden");
        $(".groupInvite").css('opacity', 0)
            .slideDown('slow')
            .animate(
                { opacity: 1 },
                { queue: false, duration: 'slow' }
            );
    });


    $(".deleteEntry").click(function() {
        $(this).closest("tr").remove();
    });

    $(".btnBone").click(function() {
        $(this).parent().parent().find(".join").css('opacity', 0)
            .slideDown('slow')
            .animate(
                { opacity: 1 },
                { queue: false, duration: 'slow' }
            );
    });

    $(".dismissBone").click(function() {
        $(this).parent().css('opacity', 1)
            .slideUp('slow')
            .animate(
                { opacity: 0 },
                { queue: false, duration: 'slow' }
            );
    });

    $("#btnYes").click(function() {
        $(this).removeClass("btn-outline-success");
        $(this).addClass("btn-success");
    });

    // Form validation
    window.addEventListener('load', function() {
        var form = document.getElementById('needs-validation');
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    }, false);
});

// Creates the graph data.
function createGraph() {
    new Chart(document.getElementById("myChart"), {
        type: 'pie',
        data: {
            labels: ["Blood", "Plasma", "Bone Marrow"],
            datasets: [{
                label: '# of Votes',
                data: [1, 1, 1],
                backgroundColor: [
                    '#dc3545',
                    '#007bff',
                    '#ffc107'
                ],
                borderColor: [
                    '#dc3545',
                    '#007bff',
                    '#ffc107'
                ],
                borderWidth: 1
            }]
        },
        options: {
            animation: false,
            showAllTooltips: true,
            tooltips: {
                custom: function (tooltip) {
                    if (!tooltip) return;
                    // disable displaying the color box;
                    tooltip.displayColors = false;
                }
            },
            legend: {
                display: false,
            },
            responsive: false
        }
    });
}



function bookedAlert() {
    alert("Appointment Booked!");
};



