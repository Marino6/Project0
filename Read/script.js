that = 0;
function Search() {
    var searchBar = document.getElementById("searchBar");
    var searchText = searchBar.value.toLowerCase();
    var content = document.getElementById("letter").innerHTML;
    // Create a regular expression pattern to match the search text
    var pattern = new RegExp(searchText, 'gi');
    // Replace the matched text with italicized text
    var replacedContent = content.replace(pattern, function (match) {
        return '<i>' + match + '</i>';
    });
    // Update the HTML content with the replaced text
    document.getElementById("letter").innerHTML = replacedContent;
}
function change() {
    var fun = document.getElementById('search');
    var fan = document.getElementById('more');
    var what = (that + 1) % 360;
    fun.style.background = `linear-gradient(${what}deg, #ff7e5f, #122cbe)`;
    fan.style.background = `linear-gradient(${what}deg, #ff7e5f, #122cbe)`;
    that++;
}
function pop() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}
function changer() {
    var input = document.getElementById("inputChange");
    var value = input.value;
    document.body.style.backgroundColor = value;
}
setInterval(change, 1);