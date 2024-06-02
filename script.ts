let that = 0;

function Search() {
    const searchBar = document.getElementById("searchBar") as HTMLInputElement;
    const searchText = searchBar.value.toLowerCase();
    const content = document.getElementById("letter").innerHTML;

    // Create a regular expression pattern to match the search text
    const pattern = new RegExp(searchText, 'gi');

    // Replace the matched text with italicized text
    const replacedContent = content.replace(pattern, (match) => {
        return '<i>' + match + '</i>';
    });

    // Update the HTML content with the replaced text
    document.getElementById("letter").innerHTML = replacedContent;
}

function change() {
    const fun = document.getElementById('search');
    const fan = document.getElementById('more');
    const fin = document.getElementById('setting');
    const what = (that + 1) % 360;
    fun.style.background = `linear-gradient(${what}deg, #ff7e5f, #122cbe)`;
    fan.style.background = `linear-gradient(${(what + 30) % 360}deg, #ff7e5f, #122cbe)`;
    fin.style.background = `linear-gradient(${(what + 60) % 360}deg, #ff7e5f, #122cbe)`;
    that++;
}

function pop() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

function changer() {
    const input = document.getElementById("inputChange") as HTMLInputElement;
    const value = input.value;
    document.body.style.backgroundColor = value;
}

setInterval(change, 10);
