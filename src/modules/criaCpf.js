
export class createCpf{
    constructor(){
        this.firstNineNumbers = '';
    }

    getCheckedDigit(totalNumbers,multiply){
        let sum = 0;
        for(let currentNumber of totalNumbers){
            sum += Number(currentNumber) * multiply;
            multiply--;
        }
        let checkedDigit = 11 - (sum % 11);
        checkedDigit = checkedDigit > 9 ? 0 : checkedDigit;
        return String(checkedDigit);
    }

    buildCpf(){
        const firstNineNumbers = this.generateRandomNumbers()
        const firstDigitChecked = this.getCheckedDigit(firstNineNumbers,10)
        
        const firstTenNumber = firstNineNumbers + firstDigitChecked
        
        const secondDigitChecked = this.getCheckedDigit(firstTenNumber,11)
        const finallyCpf = firstTenNumber + secondDigitChecked

        return finallyCpf
    }
    generateRandomNumbers(){
        this.firstNineNumbers = ''
        for(let count = 1; count <= 9; count++){
            const randomNumber = Math.random() * 10;
            const aroundNumber = Math.floor(randomNumber)
            this.firstNineNumbers += String(aroundNumber)
        }
        return this.firstNineNumbers
    }
}