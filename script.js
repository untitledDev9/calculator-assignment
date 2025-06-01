const screen = document.getElementById('screen')
const equals = document.getElementById('equals')
const clear = document.getElementById('clear')
const allButtons = document.querySelectorAll('.btns')

let text;

allButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        text = btn.textContent
        if (text == 'x') {
            text = '*'
        }
  
        screen.textContent += text 

        console.log(text);
        
    })
})

function equalsTo() {
    const expression = screen.textContent;

    try {
        if (expression) {
            screen.textContent = eval(expression);
        }
    } catch (error) {
        screen.textContent = "Error";
    }
}

clear.addEventListener('click', () => {
    screen.textContent = ''
})

equals.addEventListener('click', equalsTo)
console.log('working')