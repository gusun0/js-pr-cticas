const video = document.getElementById('video');
const play = document.getElementById('play');
const stop= document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


// PLAY & PAUSE VIDEO
function toggleVideoStatus() {
// return true; 
if(video.paused)
{
  video.play();
}
else
{
 video.pause();
}
}

// UPDATE PLAY/PAUSE ICON 
function updatePlayIcon() {
 // return true;

  if(video.paused)
  {
    play.innerHTML = '<i class="fa fa-play fa-2x"</i>';  
  }
  else
  {
    play.innerHTML = '<i class="fa fa-pause fa-2x"</i>';
  }

} 

// UPDATE PROGRESS & TIMESTAMP
function updateProgress()
{
//  return true;
//console.log(video.duration);

progress.value = (video.currentTime / video.duration) *100;

// get minutes
let mins = Math.floor(video.currentTime/60);
if(mins < 10 )
{
  mins = '0' + String(mins);
}

// get seconds
let secs = Math.floor(video.currentTime%60);
if(secs < 10 )
{
  secs = '0' + String(secs);
}

timestamp.innerHTML = `${mins}:${secs}`;
}

// SET VIDEO TIME TO PROGRESS
function setVideoProgress()
{
//  return true;

video.currentTime = (+progress.value * video.duration) / 100;

	
}


// STOP THE VIDEO
function stopVideo()
{
  video.currentTime = 0;
  video.pause();

//  return true;
}



// EVENT LISTENERS
video.addEventListener('click',toggleVideoStatus);
video.addEventListener('pause',updatePlayIcon);
video.addEventListener('play',updatePlayIcon);
video.addEventListener('timeupdate',updateProgress);

play.addEventListener('click',toggleVideoStatus);
stop.addEventListener('click',stopVideo);
progress.addEventListener('change',setVideoProgress);


