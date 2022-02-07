/* CONTROL PANEL */

const audio = document.querySelector('audio');
const play = document.querySelector('#play');
const nextTrack = document.querySelector('#forward');
const prevTrack = document.querySelector('#backward');
const musicCover = document.querySelector('.cover');
const musicArtist = document.querySelector('.artist');
const musicTitle = document.querySelector('.title');

const mainAudio = document.querySelector('#mainAudio');
const currentTimePlay = document.querySelector('.current-time');
const totalDurationPlay = document.querySelector('.total-duration');
const progressBar = document.querySelector('.progress-status');
const progressBarFull = document.querySelector('.progress-bar');
//
let isPlay = false;
let playNum = 0;

let musicLib = [
  { 
    artist: 'The Neighbourhood',
    title: 'Dust',
    img: 'cover-1',
    src: 'song-1'
  },
  { 
    artist: 'Tyler, The Creator',
    title: '911 / Mr. Lonely',
    img: 'cover-2',
    src: 'song-2'
  }
];


// play
function playAudio() {
  if (isPlay == false) {
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    play.src = "assets/svg/pause.png";
    musicCover.style.transform = `scale(1.05)`;
    console.log(playNum, musicLib[playNum].title)
  }
  else {
    pauseAudio()
  }
}

// pause
function pauseAudio() {
  audio.pause();
  isPlay = false;
  play.src = "assets/svg/play.png"
  musicCover.style.transform = `scale(1)`;
}

play.addEventListener('click', () => playAudio());

/*  << | >>  */

//  >>
function playNext() {
  if (musicLib.length-1 > playNum) {
    playNum++;
    audio.src = `assets/audio/${musicLib[playNum].src}.mp3`
    musicCover.src = `assets/img/${musicLib[playNum].img}.jpg`;
    musicArtist.innerText = musicLib[playNum].artist;
    musicTitle.innerText = musicLib[playNum].title;
    isPlay = false;
    playAudio()
  } else {
    playNum = 0;
    audio.src = `assets/audio/${musicLib[playNum].src}.mp3`
    musicCover.src = `assets/img/${musicLib[playNum].img}.jpg`;
    musicArtist.innerText = musicLib[playNum].artist;
    musicTitle.innerText = musicLib[playNum].title;
    isPlay = false;
    playAudio()
  }
}

//  <<
function playPrev() {
  if (playNum > 0) {
    playNum--;
    audio.src = `assets/audio/${musicLib[playNum].src}.mp3`;
    musicCover.src = `assets/img/${musicLib[playNum].img}.jpg`;
    musicArtist.innerText = musicLib[playNum].artist;
    musicTitle.innerText = musicLib[playNum].title;
    isPlay = false;
    playAudio()
  } else {
    playNum = musicLib.length-1;
    audio.src = `assets/audio/${musicLib[playNum].src}.mp3`
    musicCover.src = `assets/img/${musicLib[playNum].img}.jpg`;
    musicArtist.innerText = musicLib[playNum].artist;
    musicTitle.innerText = musicLib[playNum].title;
    isPlay = false;
    playAudio()
  }
}

nextTrack.addEventListener('click', () => playNext());
prevTrack.addEventListener('click', () => playPrev());

// Progress Bar update

mainAudio.addEventListener('timeupdate', (element) => {
    const currentTime = element.target.currentTime;
    const totalDuration = element.target.duration;
    progressBar.style.width = `${(currentTime / totalDuration) * 100}%`;

  // Time update 
    mainAudio.addEventListener('loadeddata', () => {
      let audioMin = Math.floor(mainAudio.duration / 60);
      let audioSec = Math.floor(mainAudio.duration % 60);
      totalDurationPlay.innerText = `${audioMin}:${audioSec}`;
    })
    let audioCurrentMin = Math.floor(mainAudio.currentTime / 60);
    let audioCurrentSec = Math.floor(mainAudio.currentTime % 60);
    if (audioCurrentSec < 10) { audioCurrentSec = `0${audioCurrentSec}`};
    currentTimePlay.innerText = `${audioCurrentMin}:${audioCurrentSec}`;
});



progressBarFull.addEventListener('click', (element) => {
  mainAudio.currentTime = (element.offsetX / progressBarFull.clientWidth) * mainAudio.duration;
/*   if(isPlay == false) {
    playAudio();
  } */
})



