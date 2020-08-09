


// "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&begin_date=&api-key=ba09bbfdde0e4b779d3df5a8947d752e"

$("#search-button").on("click", function () {

    var searchTerm = $("#search-term").val();
    var beginDate = "";
    var endDate = "";
    var records = 5;

    if ($("#start-year").val() != "") {
        beginDate = "&begin_date=" + $("#start-year").val() + "0101";
        console.log($("#start-year").val())
    }
    if ($("#end-year").val() != "") {
        beginDate = "&end_date=" + $("#end-year").val() + "0101";
        console.log($("#end-year").val())
    }

    var queryUrl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&page=0" + beginDate + endDate + "&api-key=ba09bbfdde0e4b779d3df5a8947d752e"

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (i = 0; i < records; i++) {
            var title = response.data[i].headline.main;
            var byLine = response.data[i].byline.person.firstname + " " + response.data[i].byline.person.lastname;
            // append to DOM
        }


    });

});