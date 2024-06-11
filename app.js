const songs = [
  {
    songName: "In the Midnight",
    singer: "Ft. Taylor Swfit ki Bhanji",
    image: "./media/simple",
    songUrl: "./songs/song.mp3",
  },
  {
    songName: "Relaxing Song",
    singer: "Chacha Kababi",
    image: "./media/singer",
    songUrl: "./songs/song1.mp3",
  },
  {
    songName: "Just Chill It",
    singer: "Author Unknown",
    image: "./media/song2",
    songUrl: "./songs/song2.mp3",
  },
  {
    songName: "Chacha Chachi",
    singer: "Ft. Maher Zain ka Bhai",
    image: "./media/song3",
    songUrl: "./songs/song3.mp3",
  },
  {
    songName: "Thriller Inro",
    singer: "Zhimmers",
    image: "./media/song4",
    songUrl: "./songs/song4.mp3",
  },
];



let currentMusic = 0;

let music = document.querySelector("#audio");

//select all element
let songName = document.querySelector(".music-name");
let artistName = document.querySelector(".artist-name");
let disc = document.querySelector(".disc");
let seekBar = document.querySelector(".seek-bar");
let currentTime = document.querySelector(".current-time");
let songDuration = document.querySelector(".song-duration");
let backward = document.querySelector(".backward");
let playBtn = document.querySelector("#playBtn");
let play = document.querySelector(".play");
let forward = document.querySelector(".forward");

window.onload = ()=>{
  songDuration.innerHTML = formatTime(music.duration);
};

//play Music
play.addEventListener("click", () => {
  if (playBtn.classList.contains("fa-play")) {
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
    music.play();
  } else {
    playBtn.classList.add("fa-play");
    playBtn.classList.remove("fa-pause");
    music.pause();
  }
});

backward.addEventListener("click", () => {
  if (currentMusic < 0) {
    currentMusic = songs.length - 1;
  } else {
    currentMusic--;
  }

  setMusic(currentMusic);
});

forward.addEventListener("click", () => {
  if (currentMusic > songs.length - 1) {
    currentMusic = 0;
  } else {
    currentMusic++;
  }

  setMusic(currentMusic);
});

//setup music
const setMusic = (i) => {
  seekBar.value = 0;

  let song = songs[i];
  music.src = song.songUrl;

  artistName.innerHTML = song.singer;
  songName.innerHTML = song.songName;

  disc.style.backgroundImage = `url("${song.image}.jpg")`;

  currentTime.innerHTML = "00:00";

  setTimeout(() => {
    seekBar.max = music.duration;

    songDuration.innerHTML = formatTime(music.duration);
  }, 200);

  
};

function formatTime(time) {
  let min = Math.floor(time / 60);

  if (min < 10) {
    min = `0${min}`;
  }

  let sec = Math.floor(time % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }

  return `${min} : ${sec}`;
}

setInterval(() => {
  seekBar.value = music.currentTime;
  currentTime.innerHTML = formatTime(music.currentTime);
}, 200);


//on slide change
seekBar.onchange = () => {
  music.currentTime = seekBar.value;
};
