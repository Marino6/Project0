let that = 0; 

function Search() {
    console.log("clicked");
}

function change() {
    let fun = document.getElementById('search');
    let fan = document.getElementById('more');
    let fin = document.getElementById('setting');
    var what = (that + 1) % 360;
    fun.style.background = `linear-gradient(${what}deg, #ff7e5f, #122cbe)`;
    fan.style.background = `linear-gradient(${(what + 30) % 360}deg, #ff7e5f, #122cbe)`;
    fin.style.background = `linear-gradient(${(what + 60) % 360}deg, #ff7e5f, #122cbe)`;
    that++;
}

setInterval(change, 10);