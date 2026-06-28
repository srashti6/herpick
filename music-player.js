const songs = [
{
title:"Song 1",
file:"music/song1.mp3"
},
{
title:"Song 2",
file:"music/song2.mp3"
},
{
title:"Song 3",
file:"music/song3.mp3"
},
{
title:"Song 4",
file:"music/song4.mp3"
},
{
title:"Song 5",
file:"music/song5.mp3"
}
];

const audio=document.getElementById("audio");
const playBtn=document.getElementById("play");
const prevBtn=document.getElementById("prev");
const nextBtn=document.getElementById("next");
const progress=document.getElementById("progress");
const volume=document.getElementById("volume");
const title=document.getElementById("songTitle");
const playlist=document.getElementById("playlist");
const openBtn=document.getElementById("musicOpen");
const player=document.getElementById("musicPlayer");

let index=0;

function loadSong(i){
audio.src=songs[i].file;
title.innerHTML=songs[i].title;
}

loadSong(index);

playBtn.onclick=()=>{

if(audio.paused){

audio.play();

playBtn.innerHTML="⏸";

}else{

audio.pause();

playBtn.innerHTML="▶";

}

}

nextBtn.onclick=()=>{

index++;

if(index>=songs.length){

index=0;

}

loadSong(index);

audio.play();

playBtn.innerHTML="⏸";

}

prevBtn.onclick=()=>{

index--;

if(index<0){

index=songs.length-1;

}

loadSong(index);

audio.play();

playBtn.innerHTML="⏸";

}

audio.addEventListener("ended",()=>{

nextBtn.click();

});

audio.addEventListener("timeupdate",()=>{

progress.value=(audio.currentTime/audio.duration)*100||0;

});

progress.oninput=()=>{

audio.currentTime=(progress.value/100)*audio.duration;

}

volume.oninput=()=>{

audio.volume=volume.value;

}

songs.forEach((song,i)=>{

const div=document.createElement("div");

div.innerHTML=song.title;

div.onclick=()=>{

index=i;

loadSong(index);

audio.play();

playBtn.innerHTML="⏸";

}

playlist.appendChild(div);

});

openBtn.onclick=()=>{

player.classList.toggle("show");

}