let num = document.getElementById("number");
let cod = document.getElementById("code");

document.querySelector("#save").addEventListener("click", function () {
    localStorage.setItem("number", num.value);
    localStorage.setItem("code", cod.value);
    if (num !== '' && cod !== '') {
        window.location.href = "MainPage2.html";
    }
});