const more = document.getElementById('more');
const less = document.getElementById('less');
let amountShow = document.getElementById('amount-show');
let initalValue = 0;
amountShow.innerHTML = initalValue;


function oneMoreItem() {        
    amountShow.innerHTML = initalValue;
    amountShow.innerHTML = initalValue++
}

function oneLessItem() {
    if (amountShow.innerHTML == 0) {
        return amountShow.innerHTML = 0;
     }

    amountShow.innerHTML = initalValue--
}

more.addEventListener('click', oneMoreItem);
less.addEventListener('click', oneLessItem);
