$(document).ready(function(){
    
var polygon = "https://newsapi.org/v2/top-headlines?sources=polygon&apiKey=820ef3088f094cf4b42fa03b90a1bdbc";
var polygonSection = $('#polygon-section');
    
var ign = "https://newsapi.org/v2/top-headlines?sources=ign&apiKey=820ef3088f094cf4b42fa03b90a1bdbc";
var ignDiv = $('#ign-section');
    
var natGeo = "https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=820ef3088f094cf4b42fa03b90a1bdbc";
var natGeoDiv = $('#natGeo-section');
    
var newScientist = "https://newsapi.org/v2/top-headlines?sources=new-scientist&apiKey=820ef3088f094cf4b42fa03b90a1bdbc";
var newScientistDiv = $('#newScientist-section');

function singleStories(endpoint, divID){
    $.get(endpoint, function(response){
        for(var i = 0; i < 5; i++){
            var title = response.articles[i].title;
            var image = response.articles[i].urlToImage;
            var linkUrl = response.articles[i].url;
            $(divID).append($("<div class='item single-story'>" + "<p>" + title + "</p>" + "<img src='" + image + "'>" + "</div>"));
   }
});
};


singleStories(natGeo, natGeoDiv);
singleStories(newScientist, newScientistDiv);
singleStories(ign, ignDiv);        
singleStories(polygon, polygonSection);

}); 