// List of tracks that have to be played
let track_list = [
  {
    name: "Demo1",
    artist: "Broke For Free",
    image: "https://picsum.photos/640/360",
    path: "songs/sample1.mp3"
  },
  {
    name: "Every Morning",
    artist: "Anton Vlasov",
    image: "https://picsum.photos/320/180",
    path: "songs/every-morning-18304.mp3"
  },
  {
    name: "Relax and Sleep",
    artist: "Anton Vlasov",
    image: "https://picsum.photos/480/270",
    path: "songs/relax-and-sleep-18565.mp3",
  },
  {
    name: "Uplifting Day",
    artist: "Lesfm",
    image: "https://picsum.photos/240/180",
    path: "songs/uplifting-day-15583.mp3",
  }
];

// Step 1: Select all the elements in the HTML page and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track i");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Step 2: Specify globally used values
let isPlaying = false;
let trackIndex = 0;
let timerId;

const audio = document.createElement('audio');

// Step 3 : Create the audio element for the player

// loadTrack() to load a track and set it up
function loadTrack() {
  if (timerId) {
    clearInterval(timerId);
  }

  const track = track_list[trackIndex];

  now_playing.innerText = `Playing ${trackIndex + 1} of ${track_list.length}`;
  track_art.style.backgroundImage = `url("${track.image}")`;
  track_name.innerText = track.name;
  track_artist.innerText = track.artist;

  audio.src = track.path;
  audio.load();

  // Hey browser! call seekUpdate every 1000 ms
  timerId = setInterval(seekUpdate, 1000);
}

// Set up a random background color
function random_bg_color() {

}

// Reset all values to their default
function resetValues() {
}

// To switch to playing when paused, and vice versa
function playPauseTrack() {
  const totalMinutes = '' + Math.floor(audio.duration / 60);
  const totalSeconds = '' + Math.floor(audio.duration - (60 * totalMinutes));

  total_duration.innerText = `${totalMinutes.padStart(2, '0')}:${totalSeconds.padStart(2, '0')}`;

  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
}

function playTrack() {
  isPlaying = true;
  audio.play();
  playpause_btn.classList.remove('fa-play-circle');
  playpause_btn.classList.add('fa-pause-circle');
}

function pauseTrack() {
  isPlaying = false;
  audio.pause();
  playpause_btn.classList.remove('fa-pause-circle');
  playpause_btn.classList.add('fa-play-circle');
}

function nextTrack() {
  ++trackIndex;

  if (trackIndex === track_list.length) {
    trackIndex = 0;
  }

  loadTrack();
  playTrack();
}

function prevTrack() {
  --trackIndex;

  if (trackIndex < 0) {
    trackIndex = track_list.length - 1;
  }

  loadTrack();
  playTrack();
}

function seekTo() {
  audio.currentTime = (seek_slider.value / 100) * audio.duration;
}

function setVolume() {
  audio.volume = volume_slider.value / 100;
}

// update the progress slider and durations as the music plays
function seekUpdate() {
  console.log(new Date());

  seek_slider.value = Math.floor((audio.currentTime / audio.duration) * 100);

  const curMinutes = '' + Math.floor(audio.currentTime / 60);
  const curSeconds = '' + Math.floor(audio.currentTime - (60 * curMinutes));

  curr_time.innerText = `${curMinutes.padStart(2, '0')}:${curSeconds.padStart(2, '0')}`;
}

// set the ball rolling when the page loads!
loadTrack();
playpause_btn.addEventListener('click', playPauseTrack);
next_btn.addEventListener('click', nextTrack);
prev_btn.addEventListener('click', prevTrack);
volume_slider.addEventListener('input', setVolume);
seek_slider.addEventListener('input', seekTo);
audio.addEventListener('ended', nextTrack);