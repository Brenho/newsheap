$(document).ready(function () {

    //gaming
    var polygon = "https://newsapi.org/v2/top-headlines?sources=polygon&apiKey=820ef3088f094cf4b42fa03b90a1bdbc";
    var polygonSection = $('#polygon-section');

    var ign = "https://newsapi.org/v2/top-headlines?sources=ign&apiKey=820ef3088f094cf4b42fa03b90a1bdbc";
    var ignDiv = $('#ign-section');
    //science    
    var natGeo = "https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=820ef3088f094cf4b42fa03b90a1bdbc";
    var natGeoDiv = $('#natGeo-section');

    var newScientist = "https://newsapi.org/v2/top-headlines?sources=new-scientist&apiKey=820ef3088f094cf4b42fa03b90a1bdbc";
    var newScientistDiv = $('#newScientist-section');
    //politics    
    var politico = "https://newsapi.org/v2/top-headlines?sources=politico&apiKey=820ef3088f094cf4b42fa03b90a1bdbc";
    var politicoDiv = $('#politico-section');

    var theHill = "https://newsapi.org/v2/top-headlines?sources=the-hill&apiKey=820ef3088f094cf4b42fa03b90a1bdbc";
    var theHillDiv = $('#theHill-section');
    //sport   
    var espn = "https://newsapi.org/v2/top-headlines?sources=espn&apiKey=820ef3088f094cf4b42fa03b90a1bdbc";
    var espnDiv = $('#espn-section');

    var fourfourtwo = "https://newsapi.org/v2/top-headlines?sources=four-four-two&apiKey=820ef3088f094cf4b42fa03b90a1bdbc";
    var fourfourtwoDiv = $('#four-four-two-section');

    var headlinesTopRow = "https://newsapi.org/v2/top-headlines?sources=reuters,cnn,associated-press&apiKey=820ef3088f094cf4b42fa03b90a1bdbc";
    var headlinesSecondRow = "https://newsapi.org/v2/top-headlines?sources=bbc-news,the-guardian-uk,independent&apiKey=820ef3088f094cf4b42fa03b90a1bdbc";
    
    var politicsTop = "https://newsapi.org/v2/top-headlines?category=politics&language=en&apiKey=820ef3088f094cf4b42fa03b90a1bdbc";
    var businessTop = "https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=820ef3088f094cf4b42fa03b90a1bdbc";
    var techTop = "https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=820ef3088f094cf4b42fa03b90a1bdbc";

    function headlines() {
        $.get(headlinesTopRow, function (response) {
            for (var i = 0; i < 30; i += 10) {
                var title = response.articles[i].title;
                var image = response.articles[i].urlToImage;
                var linkUrl = response.articles[i].url;
                var author = response.articles[i].source.name;
                $("#topStory").append($("<div class='item topStory'>" + "<div class='description'><p>" + title + "</p><div class='author'>" + author + "</div></div>" + "<a href='" + linkUrl + "'><img src='" + image + "'></a>" + "</div>"));
            }
        });

        $.get(headlinesSecondRow, function (response) {
            for (var i = 0; i < 30; i += 10) {
                var title = response.articles[i].title;
                var image = response.articles[i].urlToImage;
                var linkUrl = response.articles[i].url;
                var author = response.articles[i].source.name;
                $("#topStory2").append($("<div class='item topStory'>" + "<div class='description'><p>" + title + "</p><div class='author'>" + author + "</div></div>" + "<a href='" + linkUrl + "'><img src='" + image + "'></a>" + "</div>"));
            }
        });


    };
    headlines();
    
    function politicsHeadlines(){
        $.get(politicsTop, function (response) {
            for (var i = 0; i < 30; i += 10) {
                var title = response.articles[i].title;
                var image = response.articles[i].urlToImage;
                var linkUrl = response.articles[i].url;
                var author = response.articles[i].source.name;
                $("#politics-top").append($("<div class='item topStory'>" + "<div class='description'><p>" + title + "</p><div class='author'>" + author + "</div></div>" + "<a href='" + linkUrl + "'><img src='" + image + "'></a>" + "</div>"));
            }
        });
    };
    politicsHeadlines();
    
    function businessHeadlines(){
        $.get(businessTop, function (response) {
            for (var i = 0; i < 30; i += 10) {
                var title = response.articles[i].title;
                var image = response.articles[i].urlToImage;
                var linkUrl = response.articles[i].url;
                var author = response.articles[i].source.name;
                $("#business-top").append($("<div class='item topStory'>" + "<div class='description'><p>" + title + "</p><div class='author'>" + author + "</div></div>" + "<a href='" + linkUrl + "'><img src='" + image + "'></a>" + "</div>"));
            }
        });
    };
    businessHeadlines();
    
    function techHeadlines(){
        $.get(techTop, function (response) {
            for (var i = 0; i < 30; i += 10) {
                var title = response.articles[i].title;
                var image = response.articles[i].urlToImage;
                var linkUrl = response.articles[i].url;
                var author = response.articles[i].source.name;
                $("#tech-top").append($("<div class='item topStory'>" + "<div class='description'><p>" + title + "</p><div class='author'>" + author + "</div></div>" + "<a href='" + linkUrl + "'><img src='" + image + "'></a>" + "</div>"));
            }
        });
    };
    techHeadlines();



    function topHeadlines(endpoint, divID) {
        $.get(endpoint, function (response) {
            for (var i = 0; i < 3; i++) {
                var title = response.articles[i].title;
                var image = response.articles[i].urlToImage;
                var linkUrl = response.articles[i].url;
                var author = response.articles[i].source.name;
                $(divID).append($("<div class='item topStory'>" + "<div class='description'><p>" + title + "</p></div>" + "<a href='" + linkUrl + "'><img src='" + image + "'></a>" + "</div>"));
            }
        });
    };

    topHeadlines(natGeo, natGeoDiv);
    topHeadlines(newScientist, newScientistDiv);
    topHeadlines(ign, ignDiv);
    topHeadlines(polygon, polygonSection);
    topHeadlines(politico, politicoDiv);
    topHeadlines(theHill, theHillDiv);
    topHeadlines(espn, espnDiv);
    topHeadlines(fourfourtwo, fourfourtwoDiv);


});
