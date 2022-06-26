
const prev = document.querySelector('#prev')
const title = document.querySelector('#title')
const artist = document.querySelector('#artist')
const playPause = document.querySelector('#playPause')
const next = document.querySelector('#next')
const cover = document.querySelector('#cover')
const audio = document.querySelector('#audio')
const musicContainer = document.querySelector('.music-container')
const progress = document.querySelector('.progress')








let musicIndex =2;
window.addEventListener('load',()=>{
    loadMusic(musicIndex)
})
;


function loadMusic(indexNumb){
    title.innerText=allMusic[indexNumb-1].name;
    artist.innerText=allMusic[indexNumb-1].artist;
    cover.src=`Images/${allMusic[indexNumb-1].img}`;
    audio.src=`Music/${allMusic[indexNumb-1].src}`;
    


}
function playMusic(){
    musicContainer.classList.add('paused')
    playPause.querySelector("i").innerText="pause"
    audio.play()
    

}
function pauseMusic(){
    musicContainer.classList.add('paused')
    playPause.querySelector.innerText="fa-play"
    audio.pause()
}
function nextMusic(){
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1: musicIndex= musicIndex
    loadMusic(musicIndex)
    playMusic();
}

function prevMusic(){
    musicIndex--;
    musicIndex < 1  ? musicIndex = allMusic.length: musicIndex= musicIndex
    loadMusic(musicIndex)
    playMusic();
}
playPause.addEventListener('click',()=>{
    const isPaused= musicContainer.classList.contains('paused')
    isPaused ? pauseMusic() :playMusic();
    console.log("123")

})
next.addEventListener('click',()=>{
    nextMusic();
})
prev.addEventListener('click',()=>{
    prevMusic();
})


audio.addEventListener('timeupdate',(e)=>{
    const currentTime =e.target.currentTime;
    const duration =e.target.duration;
    let progressWidth=(currentTime / duration)*100;
    progress.style.width = `${progressWidth}%`;


    let musicCurrentTime=document.querySelector('.current')
    musicDuration=document.querySelector('.duration')
    audio.addEventListener('loadeddata',()=>{

        
        

        let audioDuration=audio.duration;
        let totalMin=Math.floor(audioDuration/60)
        let totalSec=Math.floor(audioDuration%60)
        musicDuration.innerText=`${totalMin}:${totalSec}`;
        if(totalSec <10){
            totalSec=`0${totalSec}`
        }
        
        
        
       


    }) 
        let currentMin=Math.floor(currentTime/60)
        let currentSec=Math.floor(currentTime%60)
        musicCurrentTime.innerText=`${currentMin}:${currentSec}`;
        if(currentSec <10){
            current=`0${currentSec}`
        }
        


    
})
progress.addEventListener('click',()=>{

})