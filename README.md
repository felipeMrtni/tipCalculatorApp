# Frontend Mentor - Tip calculator app solution

## Sumário

- [Overview](#overview)
  - [O desafio](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Processo](#my-process)
  - [Construido com](#built-with)
  - [O que aprendi](#what-i-learned)
  - [Aprendizagem continuada](#continued-development)
- [Autor](#author)

## Overview

### O Desafio

O usuário deve ser capaz de:

- Landing Page responsiva
- Ver efeito de hover nos itens
- Calcular a gorjeta e valor total da conta por pessoa.

### Screenshot

![](/assets/screenshots/project-screenshot.jpg)


### Links

- Solution URL: [Project repository](https://github.com/felipeMrtni/tipCalculatorApp)
- Live Site URL: [Project site](https://felipemrtni.github.io/tipCalculatorApp/)

## Processo

### Construido com

- HTML5
- CSS
- JavaScript

### O que aprendi

Para fazer calculos e mostrar o resultado em "tempo real" utilizou-se o evento 'input'. Sendo necessário pegar o value dos input e valida-los para que só então o cálculo usando seus values fosse efetuado.
```js

const billRef = document.querySelector("#bill-value");
let billValue;

function getValue(){

    billRef.addEventListener('input', () => {
        getBillValue();
        totalCalc(billValue, peopleValue, tipValue);
    });
}

```
na função getValue adicionamos os event listener nos inputs que dejamos pegar os valores.

```js

let valueRule = /^[0-9.]+$/;

function getBillValue() {
    if(!valueRule.test(billRef.value)){
        return;
    } else {
        billValue = +billRef.value;
        return billValue;
    }
}

getValue();

```
na função getBillValue verificamos se o valor inserido é um digito numérico com a validação em valueRule.test(), onde caso não passar no teste, não é atribuido valor na variavel billValue, e se passar, entao billValue recebe o valor inserito no input.

```js

function totalCalc(bill, people, tip) {
    if(bill > 0 && people > 0){
        totalResult = (bill/people*tip).toFixed(2);
        totalRef.innerHTML = `$${totalResult}`;
    } 
}

```

Quando os valores são maiores que zero, então é feito o calculo e seu valor é inserido no HTML.

### Aprendizagem continuada

Melhorar o uso de metodos array no JavaScript para deixar o código mais limpo, e utilizar mais CSS grid.

## Autor

- Github - [Felipe Martini](https://github.com/felipeMrtni)
- Frontend Mentor - [felipeMrtni](https://www.frontendmentor.io/profile/felipeMrtni)
- Linkedin - [Felipe Martini](https://www.linkedin.com/in/felipe-campana-martini/)
