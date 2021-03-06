var patients = document.querySelectorAll(".patient");

for (var i = 0; i < patients.length; i++) {
  var patient = patients[i];

  var tdWheight = patient.querySelector(".info-weight");
  var weight = tdWheight.textContent;

  var tdHeight = patient.querySelector(".info-height");
  var height = tdHeight.textContent;

  var tdImc = patient.querySelector(".info-imc");

  var isWeightValid = true;
  var idHeightValid = true;

  if (weight <= 0 || weight >= 1000) {
    isWeightValid = false;
    tdImc.textContent = "Peso inválido";
    patient.classList.add("invalid-patient");
  }

  if (height <= 0 || height >= 3.0) {
    idHeightValid = false;
    tdImc.textContent = "Altura inválida";
    patient.classList.add("invalid-patient");
  }

  if (idHeightValid && isWeightValid) {
    tdImc.textContent = calculateImc(weight, height);
  }
}

function calculateImc(weight, height) {
  var imc = 0;
  imc = weight / (height * height);
  return imc.toFixed(2);
}
