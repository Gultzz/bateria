document.body.addEventListener('keypress', (event)=>{
    playSound(event.code.toLowerCase());
});
document.querySelector(".composer button").addEventListener("click", ()=>{
    let song = document.getElementById("input").value.toLowerCase();
    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
    }

});
function playSound(sound){
    let audio = document.getElementById("s_" + sound);
    let key = document.querySelector(`div[data-key="${sound}"]`);
    if(audio){
        audio.currentTime = 0;
        audio.play();
    }
    if(key){
        key.classList.add("active");

        setTimeout(()=>{
            key.classList.remove("active");
        }, 100);
    }
}
function playComposition(songArray){
    let weit = 0;
    for(let songItem of songArray){
        setTimeout(()=>{
            playSound('key'+songItem);
        }, weit);
        weit += 250;
    }
}
function trocarCor(){
    var colorid = document.getElementById("textCor").value;
    var boy = document.getElementById("boy").style;
    document.getElementById("inner").innerHTML = colorid;
        boy.backgroundColor = colorid;
    
    
}