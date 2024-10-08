let i=0;
function changeimg(){
    let img = document.getElementById('lampadina')
    if (i%2==0) {
        img.src = './img/yellow_lamp.png'
    }else{
        img.src = './img/white_lamp.png'
    }
    console.log("lampadina cambiata");
    i++;
}

