const display = document.querySelector(".display")
const buttons = document.querySelectorAll('button')
const specialChar = ['%','*','/','-','+','=']
let output = ""


const calculate = (btnValue) => {
    if(btnValue === '=' && output !== ''){
        output = eval(output.replace('%','/100'));
    }
    else if(btnValue === 'AC'){
        output = '';
    }
    else if(btnValue === 'DEL'){
        output = output.toString().slice(0,-1);
    }
    else{
        if(output === '' && specialChar.includes(btnValue)) return;
        output += btnValue;
    }
        display.value = output;

}

buttons.forEach((button) => {
    button.addEventListener('click',(e) => calculate(e.target.dataset.value))
})

//color change
const changeColor = document.querySelector('.color-change');
const root = getComputedStyle(document.documentElement);


changeColor.addEventListener('click', _ => {
    let background = root.getPropertyValue('--background');
    if(background === "#edf1f4"){
        document.documentElement.style.setProperty('--background', '#34393f');
        document.documentElement.style.setProperty('--display-font', 'white');
        document.documentElement.style.setProperty('--color-change', '#edf1f4');
    }
    if(background === "#34393f"){
        document.documentElement.style.setProperty('--background', '#edf1f4');
        document.documentElement.style.setProperty('--display-font', '#818084');
        document.documentElement.style.setProperty('--color-change', '#34393f');
    }
})