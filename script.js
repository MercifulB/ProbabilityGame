const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');
const spinner = document.querySelector('.spinner');
// Diff Styling
const differenceDisplay = document.createElement('div');
differenceDisplay.style.position = 'absolute';
differenceDisplay.style.bottom = '0';
differenceDisplay.style.right = '0';
differenceDisplay.style.fontSize = '20px';
differenceDisplay.style.fontFamily = 'sans-serif, veranda';
differenceDisplay.style.marginBottom = '20px';
differenceDisplay.style.marginRight = '20px';
differenceDisplay.style.color = 'white';
document.body.appendChild(differenceDisplay);


// Dice Number Styling
const numberDisplay = document.createElement('div');
numberDisplay.style.position = 'absolute';
numberDisplay.style.top = '0';
numberDisplay.style.right = '0';
numberDisplay.style.fontSize = '30px';
numberDisplay.style.fontFamily = 'sans-serif, veranda';
numberDisplay.style.marginTop = '20px';
numberDisplay.style.marginRight = '20px';

numberDisplay.style.color = 'white';
document.body.appendChild(numberDisplay);

let randomNumber;

const randomDice = () => {
    randomDiceNumber = Math.floor(Math.random() * 6) + 1;
    numberDisplay.innerHTML = `Rolled: ${randomDiceNumber}`;
    rollDice(randomDiceNumber);

    // Calculate and display the absolute value difference
    const difference = Math.abs(randomDiceNumber - randomSpinnerNumber);
    differenceDisplay.innerHTML = `Difference: ${difference}`;
}


const randomSpin = () => {
    const randomSpinNumber = Math.floor(Math.random() * 8) + 1;
    spinner.innerHTML = `Spun: ${randomSpinNumber}`;
    spin(randomSpinNumber);
}
const rollDice = random => {

    dice.style.animation = 'rolling 4s';

    setTimeout(() => {

        switch (random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;

            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;

            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;

            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;

            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;

            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;

            default:
                break;
        }
        rollBtn.disabled = true;


        // Wait for 5 seconds before hiding the dice and showing the spinner
        setTimeout(() => {
            dice.style.display = 'none';
            spinner.style.display = 'block';
        }, 5000);

    }, 4050);

}



rollBtn.addEventListener('click', randomDice);
const spin = random => {
    spinner.style.animation = 'spinning 4s';

    setTimeout(() => {
        spinner.style.transform = `rotate(${random * 45}deg)`;

        // Hide the dice and show the spinner
        dice.style.display = 'none';
        spinner.style.display = 'block';

        // Update the button text
        rollBtn.innerHTML = "Spin!";
    }, 6050);
}
rollBtn.addEventListener('click', randomSpin); 
/*
const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');

// Dice Number Styling
const numberDisplay = document.createElement('div');
numberDisplay.style.position = 'absolute';
numberDisplay.style.top = '0';
numberDisplay.style.right = '0';
numberDisplay.style.fontSize = '30px';
numberDisplay.style.fontFamily = 'sans-serif, veranda';
numberDisplay.style.marginTop = '20px';
numberDisplay.style.marginRight = '20px';
numberDisplay.style.color = 'white';
document.body.appendChild(numberDisplay);

let randomNumber;

const randomDice = () => {
    randomNumber = Math.floor(Math.random() * 6) + 1;
    numberDisplay.innerHTML = `Rolled: ${randomNumber}`;
    rollDice(randomNumber);
    setTimeout(() => {
        randomSpin = Math.floor(Math.random() * 8) + 1;
        rollBtn.innerHTML = 'Spin!';
    }, 3000);
}

const rollDice = random => {
    dice.style.animation = 'rolling 4s';

    setTimeout(() => {
        switch (random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;

            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;

            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;

            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;

            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;

            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;

            default:
                break;
        }

        dice.style.animation = 'none';
        // Hide the dice and show the spinner after 3 seconds
        setTimeout(() => {
            dice.style.display = 'none';
            btn.style.display = 'block';
        }, 3000);

    }, 4050);
}
rollBtn.addEventListener('click', randomDice);

let container = document.querySelector(".cont");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);
let arrow = document.querySelector(".arrow");
let selectedNumber;

btn.onclick = function () {
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 1000);
}

container.addEventListener("animationend", function(){
    // Get the position of the container element
    let containerRect = container.getBoundingClientRect();
    let arrowRect = arrow.getBoundingClientRect();
    let arrowX = arrowRect.x;
    let arrowY = arrowRect.y;
    
    
    // Use the position to calculate which number the arrow is touching
    if(arrowX > containerRect.x && arrowX < containerRect.x + containerRect.width && arrowY > containerRect.y && arrowY < containerRect.y + containerRect.height){
        let children = container.children;
        for(let i = 0; i < children.length; i++){
            let childRect = children[i].getBoundingClientRect();
            if(arrowX > childRect.x && arrowX < childRect.x + childRect.width && arrowY > childRect.y && arrowY < childRect.y + childRect.height){
                selectedNumber = children[i].innerHTML;
                break;
            }
        }
    }
});

let containerNumber;
btn.addEventListener('animationend', () => {
    let children = Array.from(container.children);
    containerNumber = children.find(element => {
        return window.getComputedStyle(element).display !== 'none';
    }).innerHTML;
    numberDisplay.innerHTML += `<br>Number: ${containerNumber}`;
});
*/