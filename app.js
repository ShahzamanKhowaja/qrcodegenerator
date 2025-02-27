const textInput = document.getElementById('textInput');
const sizeSelect = document.getElementById('sizeSelect');
const colorSelect = document.getElementById('colorSelect');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrCodeDiv = document.getElementById('qrCode');
let qrCode;

generateBtn.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (!text) {
        alert('Please enter some text or URL');
        return;
    }

    qrCodeDiv.innerHTML = '';
    qrCode = new QRCode(qrCodeDiv, {
        text: text,
        width: parseInt(sizeSelect.value),
        height: parseInt(sizeSelect.value),
        colorDark: colorSelect.value,
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    downloadBtn.style.display = 'block';
});

downloadBtn.addEventListener('click', () => {
    const canvas = qrCodeDiv.querySelector('canvas');
    if (canvas) {
        const image = canvas.toDataURL('image/jpeg');
        const link = document.createElement('a');
        link.download = 'qrcode.jpg';
        link.href = image;
        link.click();
    }
});

textInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateBtn.click();
    }
});