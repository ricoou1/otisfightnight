function updateCountdown() {
    const targetDate = new Date("2025-07-27T19:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        document.querySelectorAll(".timeCount").forEach((el, i) => {
            el.textContent = ["dní", "hodin", "minut", "sekund"][i];
        });
        clearInterval(timer);
        return;
    }
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = ("0" + hours).slice(-2);
    document.getElementById("minutes").textContent = ("0" + minutes).slice(-2);
    document.getElementById("seconds").textContent = ("0" + seconds).slice(-2);

    document.querySelectorAll(".timeSet").forEach((section, i) => {
        const value = [days, hours, minutes, seconds][i];
        const wordForms = [
            ["den", "dny", "dní"],
            ["hodina", "hodiny", "hodin"],
            ["minuta", "minuty", "minut"],
            ["sekunda", "sekundy", "sekund"]
        ];
        section.querySelector(".timeCount").textContent = getWordForm(value, wordForms[i]);
    });
}

function getWordForm(number, forms) {
    if (number === 1) return forms[0];
    if (number >= 2 && number <= 4) return forms[1];
    return forms[2];
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();


