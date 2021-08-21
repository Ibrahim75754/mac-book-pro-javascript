function setInnerText(id, price) {
    const cost = document.getElementById(id);
    cost.innerText = price;

    return parseInt(cost.innerText);
}
function updateTotalCost() {
    const price = parseInt(document.getElementById('price').innerText);
    const memoryCost = parseInt(document.getElementById('memory-cost').innerText);
    const storageCost = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery-cost').innerText);

    const totalCost = document.getElementById("total-cost");
    totalCost.innerText = price + memoryCost + storageCost + deliveryCost;

    const grandTotalCost = document.getElementById("grand-total");
    grandTotalCost.innerText = parseInt(totalCost.innerText);
}



document.getElementById('memory-button-1').addEventListener('click', function () {
    setInnerText('memory-cost', 0);
    updateTotalCost();
});
document.getElementById('memory-button-2').addEventListener('click', function () {
    setInnerText('memory-cost', 180);
    updateTotalCost();
});


document.getElementById('storage-button-1').addEventListener('click', function () {
    setInnerText('storage-cost', 0);
    updateTotalCost();
});
document.getElementById('storage-button-2').addEventListener('click', function () {
    setInnerText('storage-cost', 100);
    updateTotalCost();
});
document.getElementById('storage-button-3').addEventListener('click', function () {
    setInnerText('storage-cost', 180);
    updateTotalCost();
});


document.getElementById('delivery-button-1').addEventListener('click', function () {
    setInnerText('delivery-cost', 0);
    updateTotalCost();
});
document.getElementById('delivery-button-2').addEventListener('click', function () {
    setInnerText('delivery-cost', 20);
    updateTotalCost();
});

document.getElementById('pomo-button').addEventListener('click', function () {
    const getPomoCode = document.getElementById('pomo-input');
    const pomoCode = getPomoCode.value;
    const getTotal = document.getElementById('grand-total');
    let total = parseFloat(getTotal.innerText);

    if (pomoCode == 'stevekaku') {
        total = total - (total * 20 / 100);
    }
    getTotal.innerText = total;
    getPomoCode.value = '';

})

