"use strict";
class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    ;
    sum() {
        return this.a + this.b;
    }
    sub() {
        return this.a - this.b;
    }
    mul() {
        return this.a * this.b;
    }
    div() {
        return this.a / this.b;
    }
}
let a = '';
let b = '';
let cookies2 = document.cookie.split(';');
for (let cookie of cookies2) {
    let cookieSegment = cookie.split('=');
    if (cookieSegment[0].trim() == 'a') {
        a = cookieSegment[1].trim();
    }
    if (cookieSegment[0].trim() == 'b') {
        b = cookieSegment[1].trim();
    }
}
document.querySelector('[name=a]').setAttribute('value', a);
document.querySelector('[name=b]').setAttribute('value', b);
let calculate = () => {
    // console.log("clicked")
    const resultElement = document.getElementById('result');
    const aValue = parseInt(document.querySelector('[name=a]').value);
    const bValue = parseInt(document.querySelector('[name=b]').value);
    document.cookie = `a=${aValue}; expires=Thu, 18 Dec 2024 12:00:00 UTC`;
    document.cookie = `b=${bValue}; expires=Thu, 18 Dec 2024 12:00:00 UTC`;
    if (resultElement) {
        let resultHtml = [];
        let calc = new Calculator(aValue, bValue);
        resultHtml.push(`<p>Kết quả của phép cộng ${calc.sum()} <p>`);
        resultHtml.push(`<p>Kết quả của phép trừ ${calc.sub()} <p>`);
        resultHtml.push(`<p>Kết quả của phép nhân ${calc.mul()} <p>`);
        resultHtml.push(`<p>Kết quả của phép chia ${calc.div()} <p>`);
        resultElement.innerHTML = resultHtml.join('');
    }
};
