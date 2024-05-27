function Search() {
 console.log("clicked");
}
 
var that = 0;
function change() {
    var fun = document.getElementById('search');
    var fan = document.getElementById('more');
   
    var what = (that + 1) % 360;
    fun.style.background = `linear-gradient(${what}deg, #ff7e5f, #122cbe)`;
    fan.style.background = `linear-gradient(${what}deg, #ff7e5f, #122cbe)`;
    that++;
}
setInterval(change, 100);