$(document).ready(function() {
    $('.tr-about').click(function() {
        $('.entries').fadeOut();
        $('.pop-about').fadeIn();
    });
    
    $('.pop-close').click(function() {
        $('.pop-about').fadeOut();
        $('.entries').fadeIn();
    })
});


var track = document.getElementById('track');

var controlBtn = document.getElementById('play-pause');

function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else { 
        track.pause();
         //controlBtn.textContent = "Play";
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});