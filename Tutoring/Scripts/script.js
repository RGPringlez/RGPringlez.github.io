//VARIABLES
const solocheck = document.querySelector("input.solocheck");
const groupcheck = document.querySelector("input.groupCheck");
const lblName = document.querySelector("input.lblName");
const lblNum = document.querySelector("input.lblNum");
const divNum = document.querySelector("div.enterNum");
const btnEnter = document.querySelector("input.enterbtn");
const lblTotal = document.querySelector("label.totCost");
const txtNumber = document.querySelector("input.txtNumber");
const txtEmail = document.querySelector("input.txtEmail");
const rRate = 0;
const totCost = 0;

//FUNCTIONS

function clearText(inputLabel, phrase) {

    if (inputLabel.value == phrase) {

        inputLabel.value = '';
        
    };
};


function Reinstate(lblInput, textValue) {

    if (lblInput.value = '') {

        lblInput.value = textValue;

    };

};


//MAIN CODE BODY

divNum.style.visibility = 'hidden';

solocheck.addEventListener("change", function(){

    if (solocheck.checked) {
        
        if (groupcheck.checked) {groupcheck.click()};

        divNum.style.visibility = 'hidden';

    


    };
});

groupcheck.addEventListener("change", function(){

    if (groupcheck.checked) {
        
        if (solocheck.checked) {solocheck.click()};

        divNum.style.visibility = 'visible';
    
        
    }

});

lblName.addEventListener("click", function(){

    clearText(lblName, "Enter your name");


});

txtEmail.addEventListener("click", function(){

    clearText(txtEmail, "Enter Email Address");

});

txtNumber.addEventListener("click", function(){

    clearText(txtNumber, "Enter Cellphone Number");

});



btnEnter.addEventListener("click", function(){ //wanting to add total cost function, div value returns as undefined 

    const numStud = lblNum.value;

    if (groupcheck.checked) {
        
        const rRate = 70;

        let totCost = numStud * rRate;

        lblTotal.innerHTML = lblName.value + ' your total cost is ' + new Intl.NumberFormat('en-SA', {style: 'currency', currency: 'ZAR'}).format(totCost);

    } else if (solocheck.checked) {

        const rRate = 100;

        let totCost = rRate;

        lblTotal.innerHTML = lblName.value + ' your total cost is ' + new Intl.NumberFormat('en-SA', {style: 'currency', currency: 'ZAR'}).format(totCost);
    };

})





