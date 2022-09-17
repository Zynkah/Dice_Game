function rollDice() {

    let goldCoins = 0;

    for (let i =0; i < 10; i++) {

        const roll = Math.floor(Math.random() * 6) + 1;

        alert('You roll a ' + roll + '. You have ' + goldCoins + ' coins.');

        if (roll === 1) {
            alert('Game over, no more rolls!');
            break;
        }

        if (roll === 4) {
            alert('You lose 1 coin!');
            goldCoins -= 1;
            continue;
        }

        if (roll < 5) {
            continue;
        }
        alert('Congratulations, you win ' + roll + ' gold coins!');
        goldCoins += roll;
    }

    alert('You have wont a total of ' + goldCoins + ' gold coins!');
}