var selector="#global > article > div > div.formation > div.h-slider > div > div:nth-child(2) > div.list-videos.skill-list > div.list-videos-container"
var divVideo=$(selector);
var divVideoChilds = divVideo[0].childNodes;
var divList=[];
var allVideos=divVideo.find("ul");
var VideoList=[]
var pos=0;


var fillVideos = function(){
	divVideo=$(selector);
	divVideoChilds = divVideo[0].childNodes;
	allVideos=divVideo.find("ul");
	divList=[];
	VideoList=[]
	for (var i = 0; i < divVideoChilds.length; ++i){
		if (divVideoChilds[i].classList && divVideoChilds[i].classList.value.indexOf("skill-list-item") >=0 ){
			divList.push(divVideoChilds[i]);
		}
	}

	for (var i = 0; i < allVideos.length; ++i){
		var allLi=allVideos[i].children;
		for (var j = 0; j < allLi.length; ++j){
			VideoList.push(allLi[j]);
		}
	}


}
var isSeen = function(video){
	for (var i = 0; i < video.children.length; ++i){
		if (video.children[i].dataset && video.children[i].dataset.msvSeen){
			
			for (var j = 0; j < video.children[i].classList.length; ++j){
				if (video.children[i].classList[j] == "v-active")
					return true;
				
				
			}
			//return false;
		}
	}
	return false;
}
fillVideos();
for (var i = 0; i < VideoList.length; ++i){
	if (isSeen(VideoList[i])){
		pos++;
	}
}
setTimeout(function() {
	console.log("on demarre video : " + pos);
	VideoList[pos].click();
	
},2000);
setInterval(function() {
	fillVideos();
	
	if (isSeen(VideoList[pos]))
	{
		pos++;
		console.log("next video");
		VideoList[pos].click();
	}
	else {
		
		console.log("video pas terminée");
		
	}
},10000);



