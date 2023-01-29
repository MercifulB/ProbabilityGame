const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');
const spinner = document.querySelector('.spinner');
const rollSound = document.querySelector('#roll-sound');
const rollSound2 = document.querySelector('#roll-sound2');
const spinSound = document.querySelector('#spin-sound');

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
//reloadBtn.style.display = 'none';

const randomDice = () => {
    rollSound.play();
    rollSound2.play();
    randomDiceNumber = Math.floor(Math.random() * 6) + 1;
    numberDisplay.innerHTML = `Rolled: ${randomDiceNumber}`;
    rollDice(randomDiceNumber);
}
// Diff Styling
const differenceDisplay = document.createElement('div');
differenceDisplay.style.position = 'absolute';
differenceDisplay.style.bottom = '0';
differenceDisplay.style.right = '0';
differenceDisplay.style.fontSize = '30px';
differenceDisplay.style.fontFamily = 'sans-serif, veranda';
differenceDisplay.style.marginBottom = '30px';
differenceDisplay.style.marginRight = '30px';

differenceDisplay.style.color = 'white';
document.body.appendChild(differenceDisplay);

const randomSpin = () => {
    
    const randomSpinNumber = Math.floor(Math.random() * 8) + 1;
    spinner.innerHTML = `Spun: ${randomSpinNumber}`;
    spin(randomSpinNumber);
    // Calculate and display the absolute value difference
    
    const difference = Math.abs(randomDiceNumber - randomSpinNumber);
    differenceDisplay.innerHTML = `Difference: ${difference}`;
    
    if (difference > 0 && difference < 4) {
        differenceDisplay.innerHTML = `The difference is ${difference} - Player 1 Wins!`;
      } else if (difference == 0) {
        differenceDisplay.innerHTML = `The difference is ${difference} - Draw!`;
      } else {
        differenceDisplay.innerHTML = `The difference is ${difference} - Player 2 Wins!`;
      }
    
}
const rollDice = random => {
    rollSound.play();
    dice.style.animation = 'rolling 4s';
    
    setTimeout(() => {

        switch (random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;

            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                rollSound.play();
                break;

            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                rollSound.play();
                break;

            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                rollSound.play();
                break;
                
            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                rollSound.play();
                break;

            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                rollSound.play();
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

//rollBtn.addEventListener('click', randomSpin); 
rollBtn.addEventListener('click', randomDice);
setTimeout(() => {
    randomSpin();
}, 5000);

const spin = random => {
    spinner.style.animation = 'spinning 4s';
    
    setTimeout(() => {
        spinner.style.transform = `rotate(${random * 45}deg)`;
        spinSound.play();

        // Hide the dice and show the spinner
        dice.style.display = 'none';
        spinner.style.display = 'block';
        

        // Update the button text
        rollBtn.style.display = 'none';
        reloadBtn.style.display = 'block';        
        rollBtn.removeEventListener('click');

    }, 2500);
}

// Typing Animation
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span><span class="cursor">|</span>';
  
    var that = this;
    var delta = 200 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }
  
    setTimeout(function() {
    that.tick();
    }, delta);
  };
  
  
  window.onload = function() {
    var elements = document.getElementsByClassName('by-mercy');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
  };


const reloadBtn = document.querySelector('.reload'); // select the reload button

// Add an event listener to the reload button
reloadBtn.addEventListener('click', () => {
    location.reload(); // refresh the page when the button is clicked
});
