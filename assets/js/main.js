const billRef = document.querySelector("#bill-value");
const customRef = document.querySelector("#custom-value");
const peopleRef = document.querySelector("#people-value");
const valueRef = document.querySelector(".value");
const totalRef = document.querySelector("#total-each");
const totalTipRef = document.querySelector("#tip-each");
const optionRef = document.querySelectorAll(".btn");
const resetRef = document.querySelector("#reset-btn");

let billValue;
let peopleValue;
let tipValue = 1;
let valueRule = /^[0-9.]+$/;

// ------------------------ SELECT TIP % -----------------------------------
for(let i = 0; i < optionRef.length; i++){
    optionRef[i].addEventListener('click', (event) => {
        event.preventDefault();

        const optionActive = document.querySelector('.active-option');
        removeActive();
        if(optionActive){
            console.log("reconheceu active")
            optionRef[i].classList.remove('active-option')
            tipValue = 1;
            totalTipCalc(billValue, peopleValue, tipValue);
            totalCalc(billValue, peopleValue, tipValue);
        }
        if(optionRef[i] !== optionActive){
            tipValue = optionRef[i].value;
            optionRef[i].classList.toggle('active-option');
            console.log("clicou em -> "+ tipValue);
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
    if(billRef.value !== 0 || peopleRef !== 0){
        console.log("entrou no get value")

        billRef.addEventListener('input', () => {
            getBillValue();
            totalCalc(billValue, peopleValue, tipValue);
        });

        peopleRef.addEventListener('input', () => {
            getPeopleValue();
            totalCalc(billValue, peopleValue, tipValue);
        });

        customRef.addEventListener('input', () => {
            // tipValue = 1;
            removeActive();
            console.log("ativou custom ref");
            getCustomValue();
            totalTipCalc(billValue, peopleValue, tipValue);
            totalCalc(billValue, peopleValue, tipValue);
        });
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

function getCustomValue() {
    console.log("entrou no getCustomValue")
    if(!valueRule.test(customRef.value)){
        return;
    } else {
        tipValue = +customRef.value/100+1;
        console.log(tipValue)
        return tipValue;
    }
}

getValue();

// ----------------------- CALCULATION --------------------------

function totalCalc(bill, people, tip) {
    console.log("entrou no totalCalc");
    if(billValue > 0 && peopleValue > 0){
        console.log("entrou no if do totalcalc")
        totalResult = (bill/people*tip).toFixed(2);
        totalRef.innerHTML = `$${totalResult}`;
    }
}

function totalTipCalc(bill, people, tip){
    if(tipValue > 0 && bill > 0 && people > 0){
        console.log("entrou no totalTipCalc - tipValue => "+tipValue)
        totalTip = ((tip - 1)*bill/people).toFixed(2);
        totalTipRef.innerHTML = `$${totalTip}`;
    }
}

// ------------------------- RESET ------------------------------

resetRef.addEventListener('click', () => {
    totalTipRef.innerHTML = `$0.00`;
    totalRef.innerHTML = `$0.00`;
    billValue = 0;
    peopleValue = 0;
    tipValue = 1;
    removeActive();
})