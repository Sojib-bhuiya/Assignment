const applyPromoCodeButton = document.getElementById('apply-promo-code');
const promoCodeInput = document.getElementById('promo-code');
const totalPriceElement = document.getElementById('total-price');

applyPromoCodeButton.addEventListener('click', function() {
  const enteredCode = promoCodeInput.value.trim();
  applyPromoCode(enteredCode);
});

function applyPromoCode(code) {
  const correctPromoCode = "Ostad";
  const discountPercentage = 10;

  let totalPrice = parseFloat(totalPriceElement.textContent);

  if (code === correctPromoCode) {
    const discountAmount = totalPrice * (discountPercentage / 100);
    const newTotalPrice = totalPrice - discountAmount;
    totalPriceElement.textContent = newTotalPrice.toFixed(2);
    alert('Promo code applied! 10% discount applied.');
  } else {
    alert('Invalid promo code. Please try again.');
  }
}
