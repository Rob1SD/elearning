
var divVideo=$("#global > article > div > div.formation > div.h-slider > div > div:nth-child(2) > div.list-videos.skill-list > div.list-videos-container");
var divVideoChilds = divVideo[0].childNodes;
var divList=[];
var allVideos=divVideo.find("ul");
var VideoList=[]
var pos=0; // la video a jouer en premier

// temps en minute
var tempsEntreDeuxVideo = 10;
var timer = tempsEntreDeuxVideo * 60;


for (var i = 0; i < divVideoChilds.length; ++i){
	if (divVideoChilds[i].classList && divVideoChilds[i].classList.value == "skill-list-item closed"){
		divVideoChilds[i].click();
		divList.push(divVideoChilds[i]);
	}
}

for (var i = 0; i < allVideos.length; ++i){
	var allLi=allVideos[i].children;
	for (var j = 0; j < allLi.length; ++j){
		VideoList.push(allLi[j]);
	}
}
setTimeout(function() {
	VideoList[pos].click();
	pos++;
},2000);
setInterval(function() {
	VideoList[pos].click();
	pos++;
	timer=tempsEntreDeuxVideo*60;
},tempsEntreDeuxVideo * 60 * 1000);

setInterval(function() {
	console.log("changement de video dans : " + timer);
	timer--;
	
},1000);


