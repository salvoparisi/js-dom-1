let i=0;
function changeimg(){
    let img = document.getElementById('lampadina')
    let button = document.getElementById('bottone')
    if (i%2==0) {
        img.src = './img/yellow_lamp.png'
        button.textContent = 'SPEGNI'
    }else{
        img.src = './img/white_lamp.png'
        button.textContent = 'ACCENDI'
    }
    console.log("lampadina cambiata");
    i++;
}

