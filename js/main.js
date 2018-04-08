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
    var imc = weight / (height * height);
    tdImc.textContent = imc.toFixed(2);
  }
}

var addButton = document.querySelector("#add-patient");
addButton.addEventListener("click", addPatient);

function addPatient(event) {
  event.preventDefault();

  var form = document.querySelector("#add-form");

  var name = form.name.value;
  var weight = form.weight.value;
  var height = form.height.value;
  var fat = form.fat.value;

  var patientTr = document.createElement("tr");
  var nameTd = document.createElement("td");
  var weightTd = document.createElement("td");
  var heightTd = document.createElement("td");
  var fatTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nameTd.textContent = name;
  weightTd.textContent = weight;
  heightTd.textContent = height;
  fatTd.textContent = fat;

  patientTr.appendChild(nameTd);
  patientTr.appendChild(weightTd);
  patientTr.appendChild(heightTd);
  patientTr.appendChild(fatTd);

  var table = document.querySelector("#table-patients");
  table.appendChild(patientTr);
}
