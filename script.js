const screen = document.getElementById('screen')
const equals = document.getElementById('equals')
const clear = document.getElementById('clear')
const allButtons = document.querySelectorAll('.btns')

let text;

allButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        text = btn.textContent
        if (text == 'x'){
            text = '*'
        }
        if (screen.textContent == 'Error') {
            screen.textContent = ''
        }
  
        screen.textContent += text 

        
        console.log(text);
        
    })
})

function equalsTo() {

    const expression = screen.textContent;
    let cal;

    try {
        if (expression) {
            cal = screen.textContent = eval(expression);

        }
    } catch (error) {
        screen.textContent = "Error";
    }

}



clear.addEventListener('click', clearScreen)

function clearScreen (){
    screen.textContent = ''
}

equals.addEventListener('click', equalsTo)
console.log('working')