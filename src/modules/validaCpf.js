import { createCpf } from "./criaCpf";

export class validCpf{
    constructor(cpf){
        this.cpf = cpf;
        this.firstNineNumbers = cpf.slice(0,-2);
    }

    isSequence(cpf){
        if(cpf == cpf[0].repeat(cpf.length)){
            return true
        }
        return false
    }
    
    getCheckedDigits(){
        const firstDigitChecked = new createCpf().getCheckedDigit(this.firstNineNumbers,10);
        const firstTenNumbers = this.firstNineNumbers + firstDigitChecked;

        const secondDigitChecked = new createCpf().getCheckedDigit(firstTenNumbers,11);
        const twoDigits = firstDigitChecked + secondDigitChecked;
        return twoDigits
    }

    isValid(){
        let finallyCpf;
        const twoCheckedDigits = this.getCheckedDigits()
        if(this.isSequence(this.cpf)){
            finallyCpf = 'Deu erro!'
            return finallyCpf
        }
        if(((this.firstNineNumbers + twoCheckedDigits) == this.cpf)){
            finallyCpf = this.firstNineNumbers + twoCheckedDigits
            return finallyCpf
        }
        finallyCpf = 'Deu erro!'
        return finallyCpf
    }
}