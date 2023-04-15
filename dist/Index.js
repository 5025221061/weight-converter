function poundToKg() {
  const poundInput = document.getElementById("pound");
  const ounceInput = document.getElementById("ounce");
  const gramInput = document.getElementById("gram");

  const pound = parseFloat(poundInput.value) || 0;
  const ounce = parseFloat(ounceInput.value) || 0;
  const gram = parseFloat(gramInput.value) || 0;

  const kg = pound * 0.453592

  ounceInput.value = (kg * 35.274).toFixed(3)
  gramInput.value = (kg * 1000).toFixed(3)
}

function ounceToKg() {
  const poundInput = document.getElementById("pound");
  const ounceInput = document.getElementById("ounce");
  const gramInput = document.getElementById("gram");

  const pound = parseFloat(poundInput.value) || 0;
  const ounce = parseFloat(ounceInput.value) || 0;
  const gram = parseFloat(gramInput.value) || 0;

  const kg =ounce * 0.0283495;

  poundInput.value = (kg / 0.453592).toFixed(3);
  gramInput.value = (kg * 1000).toFixed(3);
}

function gramToKg() {
  const poundInput = document.getElementById("pound");
  const ounceInput = document.getElementById("ounce");
  const gramInput = document.getElementById("gram");

  const pound = parseFloat(poundInput.value) || 0;
  const ounce = parseFloat(ounceInput.value) || 0;
  const gram = parseFloat(gramInput.value) || 0;

  const kg = gram / 1000

  poundInput.value = (kg / 0.453592).toFixed(3)
  ounceInput.value = (kg * 35.274).toFixed(3)

}
