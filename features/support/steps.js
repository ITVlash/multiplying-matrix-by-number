const assert = require('assert')
const { Given, When, Then } = require('@cucumber/cucumber')
const { Operation } = require('../../src/operation')

function parse(data) {
    return data.raw().map(row => row.map(value => parseFloat(value)))
}

//Тест для умножения матрицы на число
Given('матрицa:', function (aData) {
    this.a = parse(aData);
});
Given('число:', function (numData) {
    this.num = parse(numData)[0][0];
});
When('умножаем матрицу на число', function () {
    this.multiplication = new Operation().multiplication_number(this.a, this.num);
});
Then('результат умножения должен быть такой:', function (resData) {
    const expected_result = parse(resData);
    assert.deepStrictEqual(this.multiplication, expected_result);
});

//Запуск в терминале: npx cucumber-js