const wrapper = document.querySelector('.wrapper'),
    qrInput = wrapper.querySelector('.form input'),
    genarateBtn = wrapper.querySelector('.form button'),
    qrImg = wrapper.querySelector('.qr-code img');

genarateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    genarateBtn.innerText = "Generating QR Code..."

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener('load', () => {
        wrapper.classList.add('active');
        genarateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener('keyup', () => {
    if (!qrInput.value) {
        wrapper.classList.remove('active')
    }
})