// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

function test() {
    alert("Még egyenlőre nem értek ehhez, de idővel meglesz!");
}

function change() {
    var x = document.getElementById("username");
    if (x.innerHTML === "felhasznalo")
        x.innerHTML = "new user!";
    else if (x.innerHTML === "new user!")
        x.innerHTML = "newer user!"
    else x.innerHTML = "new user!";
}
// Write your JavaScript code.