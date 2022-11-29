const startingMinutes = 3;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds =  time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}

setScore()

function jawab(correct_answer, next_soal) {
    let answer = document.getElementsByClassName('input-soal')[0].value
    
    document.getElementsByClassName('wrong-answer-notice')[0].style.display = 'none'

    if (correct_answer == answer.toLowerCase()) {
        setScore(100)
        window.location.href = next_soal
    } else {
        setTimeout(function() {
            setScore(-100)
            document.getElementsByClassName('wrong-answer-notice')[0].style.display = 'block'
            document.getElementsByClassName('wrong-answer-notice')[0].innerHTML = 'JAWABAN SALAH!'
        }, 0);
    }
}

function setScore(point = 0) {
    let score = parseInt(localStorage.getItem('score'))
    score += point
    localStorage.setItem('score',score)
    document.getElementById('score').innerHTML = score
}