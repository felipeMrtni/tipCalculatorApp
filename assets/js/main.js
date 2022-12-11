const billRef = document.querySelector("#bill-value");
const customRef = document.querySelector("#custom-value");
const peopleRef = document.querySelector("#people-value");
const valueRef = document.querySelector(".value");
const totalRef = document.querySelector("#total-each");
const optionRef = document.querySelectorAll(".btn");


let billValue;
let peopleValue;
let tipValue = 1;
let valueRule = /^[0-9.]+$/;

// ------------------------ SELECT TIP % -----------------------------------
for(let i = 0; i < optionRef.length; i++){
    optionRef[i].addEventListener('click', () => {
        const optionActive = document.querySelector('.active-option');
        removeActive();
        if(optionActive){
            console.log("reconheceu active")
            optionRef[i].classList.remove('active-option')
            tipValue = 1;
            totalCalc(billValue, peopleValue, tipValue);
        }
        if(optionRef[i] !== optionActive){
            tipValue = optionRef[i].value;
            optionRef[i].classList.toggle('active-option');
            console.log("clicou em -> "+ tipValue);
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
            tipValue = 1;
            removeActive();
            console.log("ativou custom ref")
            getCustomValue();
            totalCalc(billValue, peopleValue, tipValue)
        });
    }
}

getValue();

function totalCalc(bill, people) {
    const totalRef = document.querySelector("#total-each");
    console.log("entrou no totalCalc");
    if(billValue > 0 && peopleValue > 0){
        console.log("entrou no if do totalcalc")
        totalResult = (bill/people*tipValue).toFixed(2);
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