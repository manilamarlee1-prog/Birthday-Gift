/* =========================================
   PASSWORD
========================================= */

const correctPassword = "1004";


function checkPassword() {

    const input =
        document.getElementById("passwordInput");

    const passwordScreen =
        document.getElementById("passwordScreen");

    const birthdayPage =
        document.getElementById("birthdayPage");

    const errorMessage =
        document.getElementById("errorMessage");


    if (input.value === correctPassword) {

        passwordScreen.style.display = "none";

        birthdayPage.style.display = "block";

    } else {

        errorMessage.style.display = "block";

        input.value = "";

        input.focus();

    }

}


/* =========================================
   MUSIC
========================================= */

let music =
    document.getElementById("birthdayMusic");

let button =
    document.querySelector(".music-btn");


function toggleMusic() {

    if (music.paused) {

        music.play();

        button.innerHTML =
            "⏸️ Pause Birthday Music";

    } else {

        music.pause();

        button.innerHTML =
            "🎶 Play Happy Birthday";

    }

}


/* =========================================
   PHOTO VIEWER
========================================= */

function openPhoto(src) {

    document.getElementById("bigPhoto").src = src;

    document.getElementById("photoViewer").style.display =
        "flex";

}


function closePhoto() {

    document.getElementById("photoViewer").style.display =
        "none";

}