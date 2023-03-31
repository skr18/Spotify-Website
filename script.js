

let songIndex = 0;
let audioElement = new Audio('/songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogessBar = document.getElementById('progessBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Let Me Love You" , filepath:"/songs/1.mp3"},
    {songName: "Take Me Down" , filepath:"/songs/2.mp3"},
    {songName: "See You Now" , filepath:"/songs/3.mp3"},
    {songName: "Migenta" , filepath:"/songs/4.mp3"},
    {songName: "Baby - Girl" , filepath:"/songs/5.mp3"},
    {songName: "SpiderMan Pc" , filepath:"/songs/6.mp3"},
    {songName: "God Of War" , filepath:"/songs/7.mp3"},
];
// audioElement.play();
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        gif.style.opacity=0;
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
    }

})

audioElement.addEventListener('timeupdate',()=>{
    progess =parseInt(( audioElement.currentTime/audioElement.duration )*100);
    myprogessBar.value = progess;
})

myprogessBar.addEventListener('change',()=>{
    audioElement.currentTime = myprogessBar.value * audioElement.duration/100;
})

const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((e)=>{
        e.classList.remove('fa-pause-circle');
        e.classList.add('fa-play-circle');
        gif.style.opacity=1;
    })
}

// learn how this work correctly 
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(audioElement.palay )
        {
            audioElement.pause();
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
        }
        else{
            makeAllplays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src=`/songs/${songIndex}.mp3`;
            audioElement.currentTime=0;
            audioElement.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
        }
    })

})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 7)
    {
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
    gif.style.opacity=1;
    audioElement.src=`/songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 1)
    {
        songIndex=7;
    }
    else{
        songIndex-=1;
    }
    gif.style.opacity=1;
    audioElement.src=`/songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
