document.addEventListener("DOMContentLoaded", setupControl, false);
var vid = document.getElementById("vdo");
var toggle_play_holder = document.getElementById('toggle_play');
var start = document.getElementById("start");
var vdo_wrapper = document.getElementById('vdo_wrapper');
var progress_bar = document.getElementById('progress_bar')
var toggle_mute_dom = document.getElementById('toggle_mute')
var volume_dom = document.getElementById('volume_dom')

function sliderupdate(e) {
    var x = e.pageX - $('#progress_bar').offset().left;
    var total = $('#progress_bar').width();
    var result = Math.round((x / total) * 100);
    vid.currentTime=vdo_percentage(result);
}

function vdo_percentage(percent){
  var duration = parseInt(vid.duration);
  var result = (percent / 100) * duration;
  return result;
}
  function setupControl() {
      if (vid.canPlayType) {
         vid.addEventListener("timeupdate", reportProgress, false);
         toggle_play_holder.addEventListener("click",toggle_play,false);
         start.addEventListener("click",startPlayback,false);
         toggle_mute_dom.addEventListener("click",toggleMute,false);
         volume_dom.addEventListener("click",volume,false);
     }
  }
   function startPlayback() {
       if (vid.paused) {
         vid.play();
         vdo_wrapper.className='vdo_wrapper playing';
         toggle_play_holder.className='toggle_play pause';
         start.className='start active';
      }
   }
   function toggle_play(){
     if (vid.paused) {
       vid.play();
       vdo_wrapper.className='vdo_wrapper playing';
       toggle_play_holder.className='toggle_play pause';
       start.className='start active';
     }
     else {
       vid.pause();
       vdo_wrapper.className='vdo_wrapper control';
       toggle_play_holder.className='toggle_play play';
       start.className='start';
     }
   }

  function volume(e){
    var x = e.pageY - $('#volume_dom').offset().top;
    var total = $('#volume_dom').height();
    var result= (x/total)*100;
    var final = (100-result)/100
    document.getElementById("volume_progress").style.height=(100-result) + "%";
    vid.volume=final;
  }

  function toggleMute() {
      if (vid.muted) {
          vid.muted = false;
          vid.volume=0.5;
          toggle_mute_dom.className='mute'
      } else {
          vid.muted = true;
          toggle_mute_dom.className='mute ed'
      }
  }
function reportProgress() {
      var time = Math.round(vid.currentTime);
      var duration = parseInt(vid.duration);
      var position = Math.floor(100 * (time / duration));
      if (isNaN(position)) return;
      document.getElementById("loadingprogress").style.width=position + "%";
      if (this.currentTime > vdo_percentage(100)) {
        toggle_play();
        this.currentTime=0;
      }
  }
