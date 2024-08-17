import './assets/css/style.css';
import { validCpf } from './modules/validaCpf.js';
import {createCpf} from './modules/criaCpf.js'
const generateBtn = document.querySelector("button");

generateBtn.addEventListener('click',() => {
    const newCpf = new createCpf().buildCpf()
    const finallyCpf = new validCpf(newCpf).isValid()

    const result = document.querySelector("#result")
    const cpfIsValid = document.querySelector("#is-valid")  
    
    if(finallyCpf !== 'Deu Erro!'){
        result.textContent = formatCpf(finallyCpf);
        cpfIsValid.textContent = `${result.textContent} é válido!`
    }
    
}) 


function separateCpf(cpf){
    const lastTwoDigits = cpf.slice(-2)
    const voidArr = [];
    let voidStr = '';
    for(let currentNumber of cpf){
        voidStr += currentNumber;
        if(voidStr.length == 3){
            voidArr.push(voidStr)
            voidStr = ''
        }
    }
    voidArr.push(lastTwoDigits)
    return voidArr
}

function formatCpf(cpf){
    const cpfSeparated = separateCpf(cpf)
    const [firstThreesome,secondThreesome,thirdThreesome,lastTwoDigits] = cpfSeparated
    return `${firstThreesome}.${secondThreesome}.${thirdThreesome}-${lastTwoDigits}`
}