const fetchLanding = (req, res) => {
    res.render("index");
};

const fetchHome = (req, res) => {
    res.render("news");
};

const fetchProfile = (req, res) => {
    res.render("profile");
};




const fetchTeams = (req, res) => {
    res.render("teams");
};

const fetchInfo = (req, res) => {
    res.render("info");
};

const fetchAbout = (req, res) => {
    res.render("about");
};

const fetchContact = (req, res) => {
    res.render("contact");
};

// const fetchTeam = (req, res) => {
//     res.render("teamprofile");
// };

const fetchSignIn = (req, res) => {
    res.render("signin");
};
const fetchSignUp = (req, res, next) => {
    res.render("signup");

};
const fetchBookApp = (req, res) => {
    res.render("appointment");
};

const fetchEventPage = (req, res) => {
    res.render("eventpage");
};

const fetchEvents = (req, res) => {
    res.render("events");
};

const fetch404 = (req, res) => {
    res.render("404");
};


module.exports = {
    fetchLanding, fetchHome, fetchProfile, fetchEventPage, fetchEvents, fetchTeams, fetchBookApp, fetchSignIn, fetchSignUp, fetchInfo, fetchContact, fetchAbout, fetch404
}
