var scores, currentScore, totalScore;
scores = [0, 0];
currentScore = 0;
totalScore = 0;
activePlayer = 0;

var score = document.querySelector('#score-' + activePlayer).textContent;

document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-score-0').textContent = 0;
document.querySelector('#current-score-1').textContent = 0;
document.querySelector('#dice-img img').style.visibility = 'hidden';

document.querySelector('.btn-roll-dice').addEventListener('click', function () {
    //1. Find Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    document.querySelector('#dice-img img').src = 'assets/img/dice-clipart-' + dice + '.png';
    document.querySelector('#dice-img img').style.visibility = 'visible';

    //3. Update the Total score if the rolled out number was not 1
    if (dice !== 1) {
        totalScore += dice;
        document.querySelector('#current-score-' + activePlayer).innerHTML = totalScore;

    } else {
        // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        // totalScore = 0;
        // document.getElementById('current-score-0').textContent = '0';
        // document.getElementById('current-score-1').textContent = '0';

        // document.querySelector('.user-0').classList.toggle('active');
        // document.querySelector('.user-1').classList.toggle('active');

        // document.querySelector('#dice-img img').style.display = 'none';
        nextPlayer();
    }
});

//4. Save totalScore and update in respective user scores
document.querySelector('#hold-score').addEventListener('click', function () {
    // var dom = document.querySelector('#score-' + activePlayer)
    // dom.innerHTML = totalScore;

    //Add totalScore to Player
    scores[activePlayer] += totalScore;

    //Update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //Check if Player won the game or not
    var target = document.querySelector('#score-' + activePlayer).textContent;
    //console.log('target is : ' + target + 'for' + '#score-' + activePlayer);
    if (target >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        document.querySelector('#name-' + activePlayer).classList.add('winner');
        document.querySelector('#dice-img img').style.visibility = 'hidden';
        document.querySelector('.user-' + activePlayer).classList.remove('active');
    } else {
        //Next Players Turn
        nextPlayer();
    }

})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    totalScore = 0;
    document.getElementById('current-score-0').textContent = '0';
    document.getElementById('current-score-1').textContent = '0';

    document.querySelector('.user-0').classList.toggle('active');
    document.querySelector('.user-1').classList.toggle('active');

    document.querySelector('#dice-img img').style.visibility = 'hidden';
}


