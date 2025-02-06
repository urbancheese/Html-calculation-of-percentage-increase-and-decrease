const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
  const original = parseFloat(document.getElementById('original').value);
  const newValue = parseFloat(document.getElementById('newValue').value);

  if (isNaN(original) || isNaN(newValue)) {
    showResult('Please enter valid numbers.');
    return;
  }
  
  if (original === 0) {
    showResult('Original value cannot be zero.');
    return;
  }

  const difference = newValue - original;
  const percentChange = (difference / original) * 100;
  let changeType = percentChange >= 0 ? 'Increase' : 'Decrease';
  const formattedChange = Math.abs(percentChange).toFixed(2);
  showResult(`${changeType}: ${formattedChange}%`);
});

function showResult(message) {
  resultDiv.classList.remove('animate__fadeIn');
  resultDiv.style.opacity = 0;
  resultDiv.textContent = message;
  setTimeout(() => {
    resultDiv.classList.add('animate__animated', 'animate__fadeIn');
    resultDiv.style.opacity = 1;
  }, 50);
}
