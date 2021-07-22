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
    var corDigitada = document.getElementById("textCor").value;
    var boy = document.getElementById("boy").style;
        boy.backgroundColor = corDigitada;
        if(corDigitada === "verde"){
            boy.backgroundColor = "green";
        }else if(corDigitada === "vermelho"){
            boy.backgroundColor = "red";
        }else if(corDigitada === "azul"){
            boy.backgroundColor = "blue";
        }else if(corDigitada === "amarelo"){
            boy.backgroundColor = "yellow";
        }else if(corDigitada === "rosa"){
            boy.backgroundColor = "pink";
        }else if(corDigitada === "cinza"){
            boy.backgroundColor = "gray";
        }else if(corDigitada === "preto"){
            boy.backgroundColor = "black";
        }else if(corDigitada === "roxo"){
            boy.backgroundColor = "purple";
        }else if(corDigitada === "laranja"){
            boy.backgroundColor = "orange";
        }else if(corDigitada === "branco"){
            boy.backgroundColor = "white";
        }else if(corDigitada === "green"){
            boy.backgroundColor = "green";
        }else if(corDigitada === "orange"){
            boy.backgroundColor = "orange";
        }else if(corDigitada === "black"){
            boy.backgroundColor = "black";
        }else if(corDigitada === "yellow"){
            boy.backgroundColor = "yellow";
        }else if(corDigitada === "red"){
            boy.backgroundColor = "red";
        }else if(corDigitada === "blue"){
            boy.backgroundColor = "blue";
        }else if(corDigitada === "gray"){
            boy.backgroundColor = "gray";
        }else if(corDigitada === "purple"){
            boy.backgroundColor = "purple";
        }else if(corDigitada === "pink"){
            boy.backgroundColor = "pink";
        }else if(corDigitada === "pink"){
            boy.backgroundColor = "pink";
        }else if(corDigitada === "marrom"){
            boy.backgroundColor = "rgb(65, 32, 1)";
        }else if(corDigitada === "brown"){
            boy.backgroundColor = "rgb(65, 32, 1)";
        }
        else{
            alert("Se a cor que voce deseja aplicar não funcionou," +
            " teste coloca-lá em ingles e sem espaços");
        }
    
}