var score0, score1, currentScore,totalScore;
score0 = 0;
score1 = 0;
currentScore = 0;
totalScore = 0;
activePlayer = 0;

var score = document.querySelector('#score-' + activePlayer).textContent;

document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-score-0').textContent = 0;
document.querySelector('#current-score-1').textContent = 0;
document.querySelector('#dice-img img').style.display = 'none';

document.querySelector('.dice-roll .btn').addEventListener('click', function () {
    //1. Find Random Number
    var dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);

    //2. Display the result
    document.querySelector('#dice-img img').src = 'assets/img/dice-clipart-' + dice + '.png';
    document.querySelector('#dice-img img').style.display = 'block';

    //3. Update the Total score if the rolled out number was not 1
    if(dice !== 1) {
        debugger;
        totalScore += dice;
        console.log(totalScore);
        document.querySelector('#current-score-'+ activePlayer).innerHTML = totalScore;
    } else {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        totalScore = 0;
        document.querySelector('.user-0').classList.toggle('active');
        document.querySelector('.user-1').classList.toggle('active');
    }
});
