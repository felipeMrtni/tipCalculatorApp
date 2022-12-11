const billRef = document.querySelector("#bill-value");
const customRef = document.querySelector("#custom-value");
const peopleRef = document.querySelector("#people-value");
const valueRef = document.querySelector(".value");
const totalRef = document.querySelector("#total-each");
const totalTipRef = document.querySelector("#tip-each");
const optionRef = document.querySelectorAll(".btn");
const resetRef = document.querySelector("#reset-btn");
const errorRef = document.querySelector(".error-message");

let billValue;
let peopleValue;
let tipValue = 1;
let valueRule = /^[0-9.]+$/;

// ------------------------ SELECT TIP % -----------------------------------
for(let i = 0; i < optionRef.length; i++){
    optionRef[i].addEventListener('click', (event) => {
        event.preventDefault();
        customRef.value = '';
        const optionActive = document.querySelector('.active-option');
        removeActive();
        if(optionActive){
            optionRef[i].classList.remove('active-option')
            tipValue = 1;
            totalTipCalc(billValue, peopleValue, tipValue);
            totalCalc(billValue, peopleValue, tipValue);
        }
        if(optionRef[i] !== optionActive){
            tipValue = optionRef[i].value;
            optionRef[i].classList.toggle('active-option');
            totalTipCalc(billValue, peopleValue, tipValue);
            totalCalc(billValue, peopleValue, tipValue);
        }
    })
}

function removeActive (){
    optionRef.forEach((item) => (item.classList.remove("active-option")))
}

// -------------------------- INPUT -----------------------------

function getValue(){

    billRef.addEventListener('input', () => {
        getBillValue();
        totalCalc(billValue, peopleValue, tipValue);
    });

    peopleRef.addEventListener('input', () => {
        getPeopleValue();
        totalCalc(billValue, peopleValue, tipValue);
    });

    customRef.addEventListener('input', () => {
        removeActive();
        getCustomValue();
        totalTipCalc(billValue, peopleValue, tipValue);
        totalCalc(billValue, peopleValue, tipValue);
    });
}

function getBillValue() {
    if(!valueRule.test(billRef.value)){
        return;
    } else {
        billValue = +billRef.value;
        return billValue;
    }
}

function getPeopleValue() {
    if(!valueRule.test(peopleRef.value)){
        return;
    } else {
        errorRef.classList.remove('active-error')
        peopleValue = +peopleRef.value;
        if(peopleValue === 0) {
            errorRef.classList.toggle('active-error');
            totalTipRef.innerHTML = `$0.00`;
            totalRef.innerHTML = `$0.00`;
            return
        }
        return peopleValue;
    }
}

function getCustomValue() {
    if(!valueRule.test(customRef.value)){
        return;
    } else {
        tipValue = +customRef.value/100+1;
        return tipValue;
    }
}

getValue();

// ----------------------- CALCULATION --------------------------

function totalCalc(bill, people, tip) {
    if(bill > 0 && people > 0){
        totalResult = (bill/people*tip).toFixed(2);
        totalRef.innerHTML = `$${totalResult}`;
    } 
}

function totalTipCalc(bill, people, tip){
    if(tipValue > 0 && bill > 0 && people > 0){
        totalTip = ((tip - 1)*bill/people).toFixed(2);
        totalTipRef.innerHTML = `$${totalTip}`;
    }
}

// ------------------------- RESET ------------------------------


function resetInfo () {
    totalTipRef.innerHTML = `$0.00`;
    totalRef.innerHTML = `$0.00`;
    billValue = 0;
    peopleValue = 0;
    totalResult = 0;
    totalTip = 0;
    tipValue = 1;
    errorRef.classList.remove('active-error')
}

resetRef.addEventListener('click', () => {
    resetInfo();
    removeActive();
})