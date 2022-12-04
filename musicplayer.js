
let now_playing = document.querySelector(".now-playing");

let playpause_btn = document.querySelector(".playpause-track");

let seek_slider = document.querySelector(".seek_slider");

let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

let curr_track = document.createElement('audio');

let track_list = [
{
	name: "Relaxing Studying Music",
	artist: "Youtube",
	image: "Image URL",
	path: "https://youtu.be/VvSEumomV3U"
},
];
  function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
  }

  function playTrack() {

    curr_track.play();
    isPlaying = true;
   
  }

  loadTrack(track_index);