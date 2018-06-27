var music = document.getElementById('music');
var pButton = document.getElementById('pButton');
var player = document.getElementById('player');

$('#pButton').on('click', function() {
  if (music.paused) {
    music.play();
    pButton.className = "";
    pButton.className = "pause";
  } else {
    music.pause();
    pButton.className = "";
    pButton.className = "play";
  }
});

function updateTime() {
  var currTime = Math.floor(music.currentTime).toString(); 
  var duration = Math.floor(music.duration).toString();

  $('#current').text(formatSecondsAsTime(currTime));
  $('#total').text(formatSecondsAsTime(duration));
}

function formatSecondsAsTime(secs, format) {
  var hr  = Math.floor(secs / 3600);
  var min = Math.floor((secs - (hr * 3600))/60);
  var sec = Math.floor(secs - (hr * 3600) -  (min * 60));

  if (min < 10){ 
    min = "0" + min; 
  }
  if (sec < 10){ 
    sec  = "0" + sec;
  }
  return min + ':' + sec;
}

