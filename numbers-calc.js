//FUNCTION FOR ADDING NUMBER WITH INTERNATIONAL NUMERAL SYSTEM
function addingCommas(className, quantity) {
    if (quantity < 0) {
        quantity = 0;
    }
    document.querySelectorAll(className).forEach(item => {
        let num_part = quantity.toString().split(".");
        num_part[0] = num_part[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        item.innerText = num_part.join(".");
    });
}

// FUNCTION FOR GETTING WIDTH OF PROGRESSBAR :- also shows value of fund_raised after changes
function progressPercentage(pvalue) {
    let progress = document.querySelector('.progress-done');
    
    let fund_raised = 89914;
    fund_raised = fund_raised + pvalue;
    if (total == 0 || fund_raised == 0) {
        progress.style.width = 0 + '%';
    }
    else {
        progress.style.width = (fund_raised / total) * 100 + '%';
    }
    console.log('progress bar is at ' + progress.style.width);
    addingCommas('.fund_raised', fund_raised);
}
let left25 = document.querySelector('.left-25').innerText = 101;
let left75 = document.querySelector('.left-75').innerText = 64;
let left200 = document.querySelector('.left-200').innerText = 0;

addingCommas('.restDays', 56);

let total = 100000;
progressPercentage(0);
addingCommas('.total', total);

// P R O D U C T -- L E F T
//TO ADD NUMBER FROM THE PRODUCT PRICE INPUT TO RAISED FUND AND CALCULATE THE WIDTH OF PROGRESS BAR 
let priceInput = document.querySelectorAll('.price--Input');
let continueClass = document.querySelectorAll('.continue');
let rest = document.querySelectorAll('.rest');
let reward_btn = document.querySelectorAll('.reward_btn');
let CB = document.querySelectorAll('.checkbox');
let dead = document.querySelectorAll('.pepe');

let sum = 0;
let backer_raised = 5007;
for (let i = 0; i < priceInput.length; i++) {
    let continueID = `#${continueClass[i].getAttribute('id').toString()}`;
    document.querySelector(continueID).addEventListener('click', () => {
        sum = sum + Number(priceInput[i].value);
        if (continueID == `#continue25`) {
            left25 = left25 - 1;
            addingCommas('.left-25', left25);
        }
        else if (continueID == `#continue75`) {
            left75 = left75 - 1;
            addingCommas('.left-75', left75);
        }
        else if (continueID == `#continue200`) {
            left200 = left200 - 1;
            addingCommas('.left-200', left200);
        }
        progressPercentage(sum);
        backer_raised = backer_raised + 1;
        addingCommas('.backer_raised', backer_raised); // backer_raised
    });
}
addingCommas('.backer_raised', backer_raised); // backer_raised

let productLeft = {
    '.left-25': left25,
    '.left-75': left75,
    '.left-200': left200,
}
for (const key in productLeft) {
    addingCommas(key, productLeft[key]);
}
for (let j = 0; j < dead.length; j++) {
    if (rest[j].innerText <= 0) {
        let exDiv = document.createElement("div");
        exDiv.classList.add('dead');
        dead[j].appendChild(exDiv);
        dead[j].classList.add('dead2');
    }
}
for (let k = 0; k < CB.length; k++) {
    if (rest[k].innerText <= 0) {
        CB[k].disabled = true;
    }
}
console.log(dead.length);
console.log(rest.length);