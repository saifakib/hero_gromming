let subTotal = document.getElementById('subtotal');
let vat = document.getElementById('vat');
let total = document.getElementById('total');

let firstPlusBtn = document.getElementById('firstPlus');
let firstMinusBtn = document.getElementById('firstMinus');
let economyPlusBtn = document.getElementById('economyPlus');
let economyMinusBtn = document.getElementById('economyMinus');

let firstClassInput = document.querySelector('.f-first-class input[type="number"]');
let economyClassInput = document.querySelector('.f-economy-class input[type="number"]');
document.querySelector('button').addEventListener('click', booked);

firstPlusBtn.addEventListener('click', firstClassPlusCount);
firstMinusBtn.addEventListener('click', firstClassMinusCount);

economyPlusBtn.addEventListener('click', economyClassPlusCount);
economyMinusBtn.addEventListener('click', economyClassMinusCount);

function firstClassPlusCount() {
    firstClassSeat = parseInt(firstClassInput.value);
    firstClassSeat++;
    firstClassInput.value = firstClassSeat;
    totalAmount();
};

function firstClassMinusCount() {
    firstClassSeat = parseInt(firstClassInput.value);
    if (firstClassSeat < 1) {
        alert('negetive value not supported')
    } else {
        firstClassSeat--;
        firstClassInput.value = firstClassSeat;
        totalAmount();
    }
    
};

function firstClassAmount(seat, price) {
    let total = price * seat;
    totalAmount(total, 'firstClass')
}

function economyClassPlusCount() {
    economicClassSeat = parseInt(economyClassInput.value);
    economicClassSeat++;
    economyClassInput.value = economicClassSeat;
    totalAmount();
}
function economyClassMinusCount() {
    economicClassSeat = parseInt(economyClassInput.value);
    if (economicClassSeat < 1) {
        alert('negetive value not supported')
    } else {
        economicClassSeat--;
        economyClassInput.value = economicClassSeat;
        totalAmount();
    }
}
function economicClassAmount(seat, price) {
    let total = price * seat;
    totalAmount(total, 'economicClass')
}

function totalAmount() {
    let firstClsSeat = document.querySelector('.f-first-class input[type="number"]').value;
    let economicClsSeat = document.querySelector('.f-economy-class input[type="number"]').value;
    let totalSubAmounts = (firstClsSeat * 150) + (economicClsSeat * 100);
    let vats = Math.round(totalSubAmounts * .1);
    let totals = totalSubAmounts + vats;

    subTotal.textContent = `$${totalSubAmounts}`;
    vat.textContent = `$${vats}`;
    total.textContent= `$${totals}`;
}

function booked() {
    if(total.textContent == '$0') {
        alert('Please Confirm Your Ticket First');
    }else {
        alert('Ticket Booking Confirm');
    }
    
}



