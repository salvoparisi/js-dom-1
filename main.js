let i=0;
let button = document.getElementById('bottone')

button.addEventListener('click', function(){
    let img = document.getElementById('lampadina')
    if (i%2==0) {
        img.src = './img/yellow_lamp.png'
        button.textContent = 'SPEGNI'
    }else{
        img.src = './img/white_lamp.png'
        button.textContent = 'ACCENDI'
    }
    console.log("lampadina cambiata");
    i++;
})


