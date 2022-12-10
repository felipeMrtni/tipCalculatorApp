const billRef = document.querySelector("#bill-value");
const customRef = document.querySelector("#costum-value");
const peopleRef = document.querySelector("#people-value");
const valueRef = document.querySelector(".value");
const totalRef = document.querySelector("#total-each");
const optionRef = document.querySelector(".option");

let billValue;
let peopleValue;
let valueRule = /^[0-9.]+$/;

optionRef.addEventListener('click', () => {
    console.log("clicou")
})

// function getTipValue {

// }


function getValue(){
    if(billRef.value !== 0 || peopleRef !== 0){
        console.log("entrou no get value")

        billRef.addEventListener('input', () => {
            getBillValue();
            totalCalc(billValue, peopleValue);
        });

        peopleRef.addEventListener('input', () => {
            getPeopleValue();
            totalCalc(billValue, peopleValue);
        })


    }
}

getValue();

function totalCalc(bill, people) {
    const totalRef = document.querySelector("#total-each");
    console.log("entrou no totalCalc");
    if(billValue > 0 && peopleValue > 0){
        console.log("entrou no if do totalcalc")


        totalResult = (bill/people).toFixed(2);
        totalRef.innerHTML = `$${totalResult}`;
    }
}

function getBillValue() {
    console.log("entrou no getBillValue")
    if(!valueRule.test(billRef.value)){
        return;
    } else {
        billValue = +billRef.value;
        console.log(billValue)
        return billValue;
    }
}

function getPeopleValue() {
    console.log("entrou no getPoepleValue")
    if(!valueRule.test(peopleRef.value)){
        return;
    } else {
        peopleValue = +peopleRef.value;
        console.log(peopleValue)
        return peopleValue;
    }
}

