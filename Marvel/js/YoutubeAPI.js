/*VARIABLES INITIALIZATION AND DECLARATION*/
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');
var image4 = document.getElementById('image4');
var image5 = document.getElementById('image5');
var image6 = document.getElementById('image6');
var image7 = document.getElementById('image7');
var image8 = document.getElementById('image8');
var image9 = document.getElementById('image9');
var image10 = document.getElementById('image10');
var image11 = document.getElementById('image11');
var image12 = document.getElementById('image12');
var image13 = document.getElementById('image13');
var image14 = document.getElementById('image14');
var image15 = document.getElementById('image15');
var image16 = document.getElementById('image16');
var image17 = document.getElementById('image17');
var image18 = document.getElementById('image18');
var image19 = document.getElementById('image19');
var image20 = document.getElementById('image20');
var image21 = document.getElementById('image21');
var image22 = document.getElementById('image22');
var image23 = document.getElementById('image23');
var image24 = document.getElementById('image24');
var image25 = document.getElementById('image25');
var image26 = document.getElementById('image26');
var image27 = document.getElementById('image27');
var image28 = document.getElementById('image28');
var modal = document.getElementById('modal');
var exit = document.getElementById('exit');
/*EVENTLISTENERS ADD TO VARIABLES*/
image1.addEventListener('click', modalViewer);
image2.addEventListener('click', modalViewer);
image3.addEventListener('click', modalViewer);
image4.addEventListener('click', modalViewer);
image5.addEventListener('click', modalViewer);
image6.addEventListener('click', modalViewer);
image7.addEventListener('click', modalViewer);
image8.addEventListener('click', modalViewer);
image9.addEventListener('click', modalViewer);
image10.addEventListener('click', modalViewer);
image11.addEventListener('click', modalViewer);
image12.addEventListener('click', modalViewer);
image13.addEventListener('click', modalViewer);
image14.addEventListener('click', modalViewer);
image15.addEventListener('click', modalViewer);
image16.addEventListener('click', modalViewer);
image17.addEventListener('click', modalViewer);
image18.addEventListener('click', modalViewer);
image19.addEventListener('click', modalViewer);
image20.addEventListener('click', modalViewer);
image21.addEventListener('click', modalViewer);
image22.addEventListener('click', modalViewer);
image23.addEventListener('click', modalViewer);
image24.addEventListener('click', modalViewer);
image25.addEventListener('click', modalViewer);
image26.addEventListener('click', modalViewer);
image27.addEventListener('click', modalViewer);
image28.addEventListener('click', modalViewer);
/*EXIT METHOD*/
exit.onclick = function () {
    stopVideo();
    modal.style.display = 'none';
};
/*HIDDEN DIV SHOWING*/
modal.style.transition = "all 2s";

function modalViewer() {
    modal.style.display = 'block';
}
/*YOUTUBE API*/
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '75%',
        width: '75%',
//        videoId: 'HoVWmW0Zdmo',
        events: {
            'onReady': onPlayerReady
        }
    });
}
function onPlayerReady(event) {
    event.target.playVideo();
}

function stopVideo() {
    player.stopVideo();
}

$(function () {
    jQuery(".media-circle").on("click", function () {
        player.loadVideoById(this.id);
    });
});

