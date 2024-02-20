let name = document.querySelector(".name");
let family = document.querySelector(".family");
let nationalcode = document.querySelector(".nationalcode");
let birthday = document.querySelector(".birthday");
let number = document.querySelector(".number");

document.querySelector("#save").addEventListener("click", function () {
    localStorage.setItem("name", name.value);
    localStorage.setItem("family", family.value);
    localStorage.setItem("nationalcode", nationalcode.value);
    localStorage.setItem("birthday", birthday.value);
    localStorage.setItem("number", number.value);
    if (name.value !== '' && family.value !== '' && nationalcode.value !== '' && birthday.value !== '' && number.value !== '') {
        window.location.href = "MainPage2.html";
    }
});
