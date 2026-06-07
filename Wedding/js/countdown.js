const weddingDate = new Date("2027-04-24T16:00:00");

function updateCountDown(){
    const now = new Date();
    const timeDiff = weddingDate - now;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days} Dias ${hours}h ${minutes}m ${seconds}s`;

    if (timeDiff < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Chegou o grande dia!";
    }
}

updateCountDown();
const countdownInterval = setInterval(updateCountDown, 1000);