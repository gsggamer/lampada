var body = document.querySelector('body');
var inter = document.querySelector('#interruptor');
var lamp = document.querySelector('#lamp');
var corda = document.querySelector('#corda');

var isOn = false; 

inter.onclick = function() {
    if(isOn == false) {
        body.style.background = 'radial-gradient(rgb(170,170,170), rgb(110,110,110), rgb(40,40,40))';
        inter.style.background = 'linear-gradient(to top, rgb(230,230,230), rgb(150,150,150))';
        lamp.style.background = 'radial-gradient(rgb(210,210,210),rgb(110, 110, 110))';
        corda.style.animation = 'trocas 1.3s linear infinite';
        isOn = true;
    }
    else if(isOn == true) {
        body.style.background = 'radial-gradient(rgb(40,40,40), rgb(0,0,0))';
        inter.style.background = 'linear-gradient(to bottom, rgb(230,230,230), rgb(150,150,150))';
        lamp.style.background = 'radial-gradient(rgb(40,40,40),rgb(90, 90, 90))';
        corda.style.animation = 'none';
        isOn = false;
    }
}