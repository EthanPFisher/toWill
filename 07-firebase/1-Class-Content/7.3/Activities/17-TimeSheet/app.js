
var name;
var role;
var startDate;
var rate;



var config = {
    apiKey: "AIzaSyAPSiS9-44hON82RyTw8RFUR1p2-q6JJnM",
    authDomain: "liveitup-17b42.firebaseapp.com",
    databaseURL: "https://liveitup-17b42.firebaseio.com",
    projectId: "liveitup-17b42",
    storageBucket: "liveitup-17b42.appspot.com",
    messagingSenderId: "1024070571793"
};

firebase.initializeApp(config);

var database = firebase.database();


$("#submit-button").on("click", function (event) {
    event.preventDefault()
    console.log("submitted")
    name = $("#name-input").val()
    role = $("#role-input").val()
    startDate = $("#start-date-input").val()
    rate = $("#rate-input").val()

    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        rate: rate
    })
})

database.ref().on("child_added", function (snapshot) {

    if (snapshot.child("name").exists() && snapshot.child("role").exists() && snapshot.child("startDate") && snapshot.child("rate")) {
        name = snapshot.val().name;
        role = snapshot.val().role;
        startDate = snapshot.val().startDate;
        rate = parseInt(snapshot.val().rate);

        var monthsWorked = moment().diff(moment(startDate), "months");
        var totalBilled = monthsWorked * rate;

        $("#tbody").append("<tr> <td>" + name + "</td> <td>" + role + "</td> <td>" + startDate + "</td> <td>" + monthsWorked + "</td> <td>" + rate + "</td> <td>" + totalBilled + "</td> </tr>");
    }
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});
