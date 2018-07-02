class BMI {
    constructor (height, weight) {
        this.height = height
        this.weight = weight
        this.bmi = this.calc()
    }

    calc() {
        const heightM = this.height / 100
        return this.weight / (heightM ** 2)
    }
    print () {
        let res = 'normal'
        if (this.bmi >= 25) res = 'biman'
        else if (this.bmi >= 18.5) res = 'normal'
        else res = 'low'
        console.log('BMI =', this.bmi, res)
    }
}
// test
const bmi = new BMI(160, 60)
bmi.print()
